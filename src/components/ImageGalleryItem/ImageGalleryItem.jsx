import PropTypes from "prop-types";

export default function ImageGalleryItem({ image, modalImage, alt, onClick }) {
  return(
    <li className="ImageGalleryItem" onClick={()=>onClick(modalImage, alt)}>
        <img src={image} alt={alt} className="ImageGalleryItemImage" />    
    </li>
 )   
}

ImageGalleryItem.defaultProps = {
    onClick: () => {}
};
  
ImageGalleryItem.propTypes = {
        alt: PropTypes.string,
        image: PropTypes.string,
        modalImage: PropTypes.string,
      onClick: PropTypes.func.isRequired
};
