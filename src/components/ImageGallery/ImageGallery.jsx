import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";


function ImageGallery({items, onClick, children}) {  
  return(
    <>
      <ul className="ImageGallery">
        {items.map(({id, webformatURL, largeImageURL, tags}) => (
            <ImageGalleryItem 
              key={id}
              image={webformatURL}
              modalImage={largeImageURL}
              alt={tags}  
              onClick={onClick}            
            />
        ))}
      </ul> 
      {children}
    </>
 )   
}

ImageGallery.defaultProps = {
  onClick: () => {},
  items: []
};
  
ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          webformatURL: PropTypes.string,
          largeImageURLs: PropTypes.string,
          tag: PropTypes.string
        })
      ).isRequired,
      onClick: PropTypes.func.isRequired,
      children: PropTypes.element.isRequired
};

export default ImageGallery;