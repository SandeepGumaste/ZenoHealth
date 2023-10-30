import { useCallback, useState } from "react";
import "./App.css";
import Advantages from "./components/Advantages";
import BannerCards from "./components/BannerCards";
import DailyBestSells from "./components/DailyBestSells";
import FeaturedCategories from "./components/FeaturedCategories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/PopularProducts";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = useCallback(() => {
    setCartCount((prev) => prev + 1);
  }, []);
  return (
    <div className="App ">
      <Navbar cartCount={cartCount} />
      <div>
        <Hero />
        <FeaturedCategories />
        <div className="py-3"></div>
        <BannerCards />
        <div className="py-1"></div>
        <PopularProducts handleAddToCart={handleAddToCart} />
        <div className="py-1"></div>
        <DailyBestSells handleAddToCart={handleAddToCart} />
        <div className="py-1"></div>
        <Advantages />
        <div className="py-4"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
