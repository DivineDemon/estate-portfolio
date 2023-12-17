import About from "./About";
import Services from "./Services";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const App = () => {
  return (
    <div className="bg-[#D7E4DC]">
      <Navbar />
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default App;
