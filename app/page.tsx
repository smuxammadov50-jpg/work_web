import Header from "./_components/Header";
import Hero from   "./Home/hero/page";  
import Section from "./Home/section/page";
import Section2 from "./Home/section2/page";
import Footer from "./Home/footer/page";
import Footer2 from "./_components/Footer2";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
     <Section/>
     <Section2/>
     <Footer/>
     <Footer2/>
    </div>
  );
}
