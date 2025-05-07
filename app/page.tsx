import MainLayout from "../components/index";
import { Toaster } from "@/components/ui/sonner";
export default function Home() {
  return (
    <>
      <MainLayout />
      <Toaster
        position="top-right"
        className="pt-[3rem]"
        expand={true}
        richColors
      />
    </>
  );
}
