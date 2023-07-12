import { createContext, useContext, useState } from "react";

export const appContext = createContext();

export const useGlobalContext = () => useContext(appContext);

function AppProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <appContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
