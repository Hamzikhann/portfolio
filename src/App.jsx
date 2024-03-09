import { BrowserRouter } from "react-router-dom";
import { Whatsapp } from "./assets";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Services,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Experience />

        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
      <div class="fixed bottom-0 right-0 p-3 z-50">
        <a
          href="http://wa.me/923114554242?text=Hello! Welcome to FutureInno Technologies. Need IT Solutions? Chat with our experts on Whatsapp for quick assistance. We're here to answer your queries and provide top-notch IT services. Let's connect!"
          target="_blank"
        >
          <img src={Whatsapp} width="60" alt="Whatsapp icon" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
