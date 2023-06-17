import Navbar from "@/components/Navbar";
import Logosprov from "@/components/Logosprov";
import Searchbar from "@/components/Searchbar";
import BlankCard from "@/components/Blankcard";
import Blankcardright from "@/components/Blankcardright";
import Footerpageopc from "@/components/Footerpageopc";
import Destaquehomeprincipal from "@/components/Destaquehomeprincipal";
import Lineasdeaccion from "@/components/Lineasdeaccion";


export default function Home() {
  return (
    <>
    <Logosprov/>
      <Navbar />
      <Destaquehomeprincipal/>
       {/* <Searchbar/> */}
       <Footerpageopc/>
       <BlankCard/>
       <Blankcardright/>
       {/* <Lineasdeaccion/> */}
    </>
  );
}
