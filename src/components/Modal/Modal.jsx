import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.getElementById("modal-root");

function Modal({close, children}) {
    const handleClose = (e) => {
        if(e.target === e.currentTarget || e.code === "Escape") {
            close();
        }
    }
    
    useEffect(()=> {
        document.addEventListener("keydown", handleClose);

        return ()=> document.removeEventListener("keydown", handleClose)
    }, []);

    return (
        createPortal(
            (
             <div className="Overlay" onClick={handleClose}>
                 <div className="Modal">
                     {children}
                 </div>
             </div>
            ),
            modalRoot
        )
    )
}

Modal.defaultProps = {
    close: () => {}
  };

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;