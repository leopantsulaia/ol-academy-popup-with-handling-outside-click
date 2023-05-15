import React, { useEffect, useState, useRef } from "react";
import "./PopupWindow.scss";

const Popup = ({ handleClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains("popup-container")) {
        handleClose();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClose]);

  return (
    <div
      className='popup-container'
      ref={popupRef}
    >
      <div className='popup'>
        <h1>Popup</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, doloribus!</p>
        <button
          className='close-button'
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const LearningRefs = () => {
  const myRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.color = "red";
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='popup-main'>
      <div className='popup-div'>
        <h1 ref={myRef}>POPUP</h1>
        <p>Lorem ipsum,aliquam maiores?</p>
        <button
          className='open-popup'
          onClick={handleOpen}
        >
          Open Popup
        </button>
        {isOpen && <Popup handleClose={handleClose} />}
      </div>
    </div>
  );
};

export default LearningRefs;
