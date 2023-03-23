import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import VideoCard from "./Components/VideoCard";

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Banner />
      <VideoCard />
    </>
  );
}

export default App;
