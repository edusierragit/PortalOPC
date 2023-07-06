import Navbar from "@/components/Navbar";
import Logosprov from "@/components/Logosprov";
import Footerpageopc from "@/components/Footerpageopc";
import Destaquehomeprincipal from "@/components/Destaquehomeprincipal";
import Destacadoizquierda from "@/components/Destacadoizquierda";
import Destacadoderecha from "@/components/Destacadoderecha";
import Lineasdeaccion from "@/components/Lineasdeaccion";

export default function Home() {
  return (
    <div className="bg-white">
      <Logosprov />
      <Navbar />

      <div className="mx-auto  px-4">
        <Destaquehomeprincipal />
     <Lineasdeaccion />

        <div className="container  mx-auto mt-10">
          <div className="flex justify-center">
            <div className="w-custom">
              <Destacadoizquierda/>
            </div>
          </div>
        </div>

        <div className="container  mx-auto mt-10">
          <div className="flex   justify-center">
            <div className="w-custom ">
              <Destacadoderecha/>
            </div>
          </div>
          <div className="mx-auto ">
          </div>
        
          <Footerpageopc /> 
        
          
        </div>
      </div>

    </div>
  );
}



