import Navbar from "@/components/Navbar";
import Logosprov from "@/components/Logosprov";
import Searchbar from "@/components/Searchbar";
import Footerpageopc from "@/components/Footerpageopc";
import Destaquehomeprincipal from "@/components/Destaquehomeprincipal";
import Destacado1 from "@/components/Destacado1";
import Destacado2 from "@/components/Destacado2";
export default function Home() {
  return (
    <div className="bg-white">
      <Logosprov />
      <Navbar />

      <div className="mx-auto   px-4">
        <Destaquehomeprincipal />
        <Footerpageopc />

        <div className="container  mx-auto mt-10">
          <div className="flex justify-center">
            <div className="w-custom">
              <Destacado1 />
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div className="flex justify-center">
            <div className="w-custom">
              <Destacado2 />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}



