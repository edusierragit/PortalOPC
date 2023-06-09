import Navbar from "@/components/Navbar";
import Logosprov from "@/components/Logosprov";
import Searchbar from "@/components/Searchbar";
import BlankCard from "@/components/Blankcard";
import Blankcardright from "@/components/Blankcardright";
import Lineasdeaccion from "@/components/Lineasdeaccion";
import Footerpageopc from "@/components/Footerpageopc";
import Destaquehomeprincipal from "@/components/Destaquehomeprincipal";


export default function Home() {
  return (
    <>
    <Logosprov/>
      <Navbar />
      <Destaquehomeprincipal/>
       <Searchbar/>
       <BlankCard/>
       <Blankcardright/>
       <Lineasdeaccion/>
       <Footerpageopc/>
    </>
  );
}
