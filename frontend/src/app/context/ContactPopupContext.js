"use client";
import { createContext, useContext, useState } from 'react';

const ContactPopupContext = createContext();

export const ContactPopupProvider = ({ children }) => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => {
    setIsContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <ContactPopupContext.Provider value={{ isContactPopupOpen, openContactPopup, closeContactPopup }}>
      {children}
    </ContactPopupContext.Provider>
  );
};

export const useContactPopup = () => useContext(ContactPopupContext);