
"use client"
import { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openPopup = (pdfName) => {
    setSelectedPdf(pdfName); // store the clicked PDF
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPdf(null);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, selectedPdf }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
