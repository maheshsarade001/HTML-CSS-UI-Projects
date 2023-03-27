import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Insurance from "./Components/Insurance";
import MedibuddyGold from "./Components/MedibuddyGold";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Products from "./Components/Products";
import VideoCard from "./Components/VideoCard";

function App() {
  return (
    <div className="font-Nunito">
      <Navbar />
      <Products />
      <Banner />
      <VideoCard />
      <MedibuddyGold />
      <Insurance />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
