// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import arrowup from "../assets/arrow-up.png"

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <img className={`back-to-top-button ${showButton ? 'show-back-to-top' : ''}`}
        onClick={scrollToTop}
        src={arrowup} />
    </div>
  );
};

export default BackToTopButton;
