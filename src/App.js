import { useCallback, useState } from "react";
import "./App.css";
import Advantages from "./layouts/Advantages";
import BannerCards from "./layouts/BannerCards";
import DailyBestSells from "./layouts/DailyBestSells";
import FeaturedCategories from "./layouts/FeaturedCategories";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import PopularProducts from "./layouts/PopularProducts";

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
