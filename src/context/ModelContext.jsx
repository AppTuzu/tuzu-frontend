import { createContext, useState } from "react";

export const ModelContext = createContext();

const ModelProvider = ({ children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return <ModelContext.Provider value={{isModalOpen, toggleModal}}>
    {children}
    </ModelContext.Provider>;
};

export default ModelProvider;