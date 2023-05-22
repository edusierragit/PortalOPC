import Navbar from "@/components/Navbar";
import Logosprov from "@/components/Logosprov";
import Searchbar from "@/components/Searchbar";
import Blank from "@/components/Blank";
import BlankCard from "@/components/Blankcard";
import Blankcardright from "@/components/Blankcardright";
import Lineasdeaccion from "@/components/Lineasdeaccion";
import Footerpageopc from "@/components/Footerpageopc";



export default function Home() {
  return (
    <>
    <Logosprov/>
      <Navbar />
       <Blank/>
       <Searchbar/>
       <BlankCard/>
       <Blankcardright/>
       <Lineasdeaccion/>
       <Footerpageopc/>
    </>
  );
}
