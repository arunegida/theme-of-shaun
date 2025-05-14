"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "../context/ThemeContext";
import SideBar from "./sidebar";
import { presets } from "@/theme/colors";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: presets[theme as keyof typeof presets].lighter.hex,
      }}
      className={cn(
        "flex items-center justify-between h-[4rem] w-[100%] p-5 fixed"
      )}
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
