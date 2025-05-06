"use client";
import React from "react";
import Navbar from "./navbar";
import Color from "./color";
import { ThemeProvider } from "./context/ThemeContext";

const MainLayout = () => {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Color />
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
