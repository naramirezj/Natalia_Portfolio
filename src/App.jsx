import { BrowserRouter } from "react-router-dom";
import { Element } from "react-scroll";
import { Skills, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Element name="about">
            <Hero />
          </Element>
        </div>
        <Element name="skills">
          <Skills />
        </Element>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Element name="works">
            <Works />
          </Element>
        </div>
        <Element name="experience">
          <Experience />
        </Element>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;