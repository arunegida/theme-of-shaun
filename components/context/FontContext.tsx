"use client";
import { createContext, useContext, useEffect, useState } from "react";

type FontContextType = {
  font: string;
  setFont: (font: string) => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState("sans");
  useEffect(() => {
    document.documentElement.setAttribute("data-font", font);
  }, [font]);
  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}

export default FontContext;
