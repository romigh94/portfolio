import Work from "../components/Work/Work";
import About from "../components/Aboutme/About";
import Mainbanner from "../components/Home/Mainbanner";
import Contact from "../components/Contactform/Contact";
import Footer from "../components/Layouts/Footer";



export default function Home() {
  return (
    <>
      <Mainbanner />
      <About />
      <Work />
      <Contact />
      <Footer />


    </>
  )
}
