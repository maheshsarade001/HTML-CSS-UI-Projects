import "./App.css";
import Banner from "./Components/Banner";
import Insurance from "./Components/Insurance";
import MedibuddyGold from "./Components/MedibuddyGold";
import Navbar from "./Components/Navbar";
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
    </div>
  );
}

export default App;
