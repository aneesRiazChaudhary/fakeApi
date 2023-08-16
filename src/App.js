import Navbar from "./components/Navbar";
import 'swiper/css';
import Slider from "./components/Slider";
import Counter from "./components/Counter";
import User from "./components/User";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";



function App() {
  return (
    // <h1 className="text-danger">seena chaudhary
  
    // </h1>
    <>
    <Navbar/>
    <Home/>
    <Slider/>
    <Counter/>
    <User/>
    <AboutUs/>
    </>
  );
}

export default App;
