// "use client"
// import { createContext, useContext, useState } from 'react';

// const PopupContext = createContext();

// export const PopupProvider = ({ children }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   return (
//     <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
//       {children}
//     </PopupContext.Provider>
//   );
// };

// export const usePopup = () => {
//   const context = useContext(PopupContext);
//   if (!context) {
//     throw new Error('usePopup must be used within a PopupProvider');
//   }
//   return context;
// };

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
