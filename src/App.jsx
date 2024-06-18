import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Featured from './components/Featured.jsx';
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  //global scrolltrigger imp

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar/>
        <LandingPage/>
        <About/>
        <Featured/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App

