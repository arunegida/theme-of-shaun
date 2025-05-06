"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "../context/ThemeContext";
import SideBar from "./sidebar";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: theme }}
      className={cn("flex items-center justify-between h-[4rem] w-[100%] p-5")}
    >
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default Navbar;
