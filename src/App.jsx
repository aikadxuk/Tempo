import "./App.css";
import Header from "./components/Global/Header/Header";
import Background from "./components/Home/BackgroundMain/Background";
import LearnMore from "./components/Home/LearnMore/LearnMore";
import Services from "./components/Home/Services/Services";
import CallToAction from "./components/Home/CallToAction/CallToAction";
import Portfolio from "./components/Home/Portfolio/Portfolio";
import Pricing from "./components/Home/Pricing/Pricing";
import FrequentQuestions from "./components/Home/FrequentQuestions/FrequentQuestions";
import Team from "./components/Home/Team/Team";
import Contact from "./components/Home/Contact/Contact";
import Footer from "./components/Home/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Background />
      <LearnMore />
      <Services />
      <CallToAction />
      <Portfolio />
      <Pricing />
      <FrequentQuestions />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
