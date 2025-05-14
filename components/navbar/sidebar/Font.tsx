import { Button } from "@/components/ui/button";
import { BookA } from "lucide-react";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useTheme } from "@/components/context/ThemeContext";

const LayoutChange = () => {
  const { setTheme } = useTheme();
  return (
    <div className="relative border border-gray-400 rounded-md p-4 mt-4">
      <SheetTitle>
        <span className="absolute -top-3 left-1/7 -translate-x-1/2 bg-white px-2 text-sm text-black-600 font-bold">
          Font
        </span>
      </SheetTitle>
      <SheetDescription className="grid grid-cols-2">
        <Button
          variant="ghost"
          className="flex items-center justify-center flex-col group w-full h-[6rem] bg-transparent border-none hover:bg-green-300"
          onClick={() => setTheme("green")}
        >
          <BookA className="text-gray-700 group-hover:text-green-600" />
          <span>Sans</span>
        </Button>
        <Button
          variant="ghost"
          className="flex items-center justify-center flex-col group w-full h-[6rem] bg-transparent border-none hover:bg-red-300"
          onClick={() => setTheme("red")}
        >
          <BookA className="group-hover:text-red-600" />
          <span>Poppins</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full h-[6rem] bg-transparent border-none"
        >
          <BookA />
        </Button>
        <Button
          variant="ghost"
          className="w-full h-[6rem] bg-transparent border-none"
        >
          <BookA />
        </Button>
      </SheetDescription>
    </div>
  );
};

export default LayoutChange;
