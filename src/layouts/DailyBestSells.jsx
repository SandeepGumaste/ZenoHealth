import React from "react";
import { ArrowRightShort } from "react-bootstrap-icons";
import BestSellsCard from "../components/BestSellsCard";

const bestSellsData = [
  {
    category: "Snacks & Munchies",
    rating: 3,
    name: "Onion Flavour Potato",
    price: {
      current: 3,
      actual: 5,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg",
    id: 1,
  },
  {
    category: "Bakery & Biscuits",
    rating: 4,
    name: "NutriChoice Digestive",
    price: {
      current: 24,
      actual: 24,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg",
    id: 2,
  },
  {
    category: "Cadbury 5 Star Chocolate",
    rating: 4,
    name: "NutriChoice Digestive",
    price: {
      current: 32,
      actual: 35,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg",
    id: 3,
  },
];

const DailyBestSells = ({ handleAddToCart }) => {
  return (
    <section className="container-sm my-4">
      <header className="text-start fw-semibold h3 mb-4">
        <span>Daily Best Sells</span>
      </header>
      <div className="bestSellsContainer d-flex">
        <div
          style={{
            backgroundImage:
              "url(https://freshcart.codescandy.com/assets/images/banner/banner-deal.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-3 dailySellCard px-4 py-4 col-12 col-sm-5 col-lg-4 "
        >
          <div className="d-flex flex-column align-items-start justify-content-start text-start">
            <h3 class="fw-bold text-white">100% Organic Coffee Beans.</h3>
            <p class="text-white">Get the best deal before close.</p>
            <button class="btn btn-success">
              Shop Now <ArrowRightShort height={"20px"} width={"20px"} />
            </button>
          </div>
        </div>
        {bestSellsData.map((product) => (
          <BestSellsCard product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default DailyBestSells;
