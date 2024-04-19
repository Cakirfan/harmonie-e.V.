// Context.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [selectedCardId, setSelectedCardId] = useState(null);

  return (
    <AppContext.Provider value={{ selectedCardId, setSelectedCardId }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
