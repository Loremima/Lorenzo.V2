"use client";

import { createContext, useContext, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
}