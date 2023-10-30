import React from "react";
import { ArrowRightShort } from "react-bootstrap-icons";
import BestSellsCard from "../components/BestSellsCard";

const bestSellsData = [
  {
    category: "Tea, Coffee & Drinks",
    rating: 3,
    name: "Onion Flavour Potato",
    price: {
      current: 13,
      actual: 18,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-11.jpg",
    id: 1,
  },
  {
    category: "Fruits & Vegetables",
    rating: 4,
    name: "Crushed Tomatoes",
    price: {
      current: 18,
      actual: 18,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-12.jpg",
    id: 2,
  },
  {
    category: "Fruits & Vegetables",
    rating: 4,
    name: "Golden Pineapple",
    price: {
      current: 13,
      actual: 18,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-13.jpg",
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
