import { useState, useEffect } from 'react';
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { getPhotos } from "./services/pixabayAPI";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState({
    items: [],
    error: null,
    isLoading: false,
  });
  const [modal, setModal] = useState({
    modalOpen: false,
    modalContent: {}
  });

  useEffect(() => {
   
    const fetchPhotos = async () => {
      setState(prevState => ({
        ...prevState,
        isLoading: true
      }))
      try {
        const data = await getPhotos(search, page);
        setState(prevState => ({...prevState,
          items: [...prevState.items, ...data.hits],
        }))
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          error,
        }))
      } finally {
        setState(prevState => ({
          ...prevState,
          isLoading: false
        }))
      } 
    };       

    if(search){
      fetchPhotos();
    };
  }, [page, search]);

  const changeSearch = ( newSearch ) => {
    if(search !== newSearch) {
        setSearch(newSearch);
        setState(prevState => ({
            ...prevState,
            items: [],
            page: 1,
        }));
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
    setState(prevState => ({...prevState, isLoading: true}))
  }

  const showModal = (modalImage, alt) => {
    setModal({
        modalOpen: true,
        modalContent: {
          src: modalImage,
          alt
        }
    })
}

  const closeModal = () => {
    setModal({
      modalContent: {},
      modalOpen: false,
    })
}

  const { items, isLoading, error } = state;
  const { modalOpen, modalContent } = modal;
  const wrongWord = search && items.length === 0 && !isLoading;
  const showImageGal = search && items.length > 0;
  
  return (
      <div className='App'>
        {modalOpen && <Modal close={closeModal} >
                        <img src={modalContent.src} alt={modalContent.alt} />
                      </Modal>}
        <Searchbar onSubmit={changeSearch} />
        {error && <p>Cant load photos</p>}
        {wrongWord && <h2 className='wrongWord'>No matches with tag "{search}", try another one</h2>}
        {showImageGal && <ImageGallery items={items} onClick={showModal} >
                           <Button onClick={loadMore}/>
                         </ImageGallery>}
        {isLoading &&<Loader />}
      </div>
    );
}

export default App;