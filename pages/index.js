import Work from "../components/Work/Work";
import About from "../components/Aboutme/About";
import Mainbanner from "../components/Home/Mainbanner";
import Contact from "../components/Contactform/Contact";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Mainbanner />
      <About />
      <Work />
      <Contact />
      <Footer />
      <div id="modal-root"></div>
    </>
  )
}
