"use client";
import React from "react";
import Navbar from "./navbar";
import Typography from "@/components/typography";
import Color from "./color";
import { ThemeProvider } from "./context/ThemeContext";

const MainLayout = () => {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Color />
        <Typography />
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
