import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";
import Category from "./components/Category/Category.js";
import Banner from "./components/Banner/Banner.js";
import Products from "./components/Products/Product.js";
import Special from "./components/Special/Special.js";
import Testimonials from "./components/Testimonials/Testimonial.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Category/>
      <Banner/>
      <Products/>
      <Special/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App;
