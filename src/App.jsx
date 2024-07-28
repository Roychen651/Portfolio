import "./app.scss";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Test from "./Test";

const App = () => {
  return <div>

    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section>Skills</section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Portfolio4</section>
    <section>Portfolio5</section>
    <section>Portfolio6</section>
    <section id="Contact">Contact</section>

    <Test/>

  </div>;
};

export default App;
