import  Section  from "./section/page";
import Header from "./header/page";
import Hero from "./hero/page";
import Section2 from "./section2/page";
// import Footer from "./footer/page"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
     <Section/>
     <Section2/>
     {/* <Footer/> */}
    </div>
  );
}