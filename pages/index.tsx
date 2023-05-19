import Navbar from "@/components/Navbar";
import Logosprov from "@/components/Logosprov";
import Searchbar from "@/components/Searchbar";
import Blank from "@/components/Blank";
import BlankCard from "@/components/Blankcard";
import Blankcardright from "@/components/Blankcardright";



export default function Home() {
  return (
    <>
    <Logosprov/>
      <Navbar />
       <Blank/>
       <Searchbar/>
       <BlankCard/>
       <Blankcardright/>
    </>
  );
}
