import React from "react";
import CommonCard from "./CommonCard";
import { Plus, ArrowRightShort } from "react-bootstrap-icons";
import StarRatingComponent from "react-star-rating-component";

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
        {bestSellsData.map((product) => {
          const { name, price, category, rating, imgUrl } = product;

          return (
            <article className="bestSellsCard col-12 col-sm-5 col-lg-3 ">
              <CommonCard>
                <div className="productCardContent p-3 text-start ">
                  <div className="d-flex justify-content-center">
                    <img src={imgUrl} alt={name} />
                  </div>

                  <p className=" text-muted fw-bold opacity-2 mb-1">
                    {category}
                  </p>
                  <h2 className="name">{name}</h2>

                  <div className="d-flex justify-content-between align-items-center price ">
                    <div className="price">
                      <span>${price.current}</span>{" "}
                      {price.actual && price.actual > price.current && (
                        <span className="text-muted text-decoration-line-through">
                          ${price.actual}
                        </span>
                      )}
                    </div>
                    <div className="ms-3">
                      <div className=" d-flex justify-content-start align-items-center">
                        <StarRatingComponent
                          name="rating"
                          value={rating}
                          starCount={5}
                          editing={false}
                          starColor="#ffc107"
                          emptyStarColor="#d3d3d3"
                        />
                        <span className="rating text-muted pt-1 ms-2 fw-semibold">
                          {rating} (25)
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    class="btn btn-success btn-sm w-100 mt-3 border-0 py-2"
                  >
                    <Plus width={20} height={20} color="white" /> Add to cart
                  </button>
                  <div className="timerContainer row text-center mt-3 px-2">
                    <div className="card col py-3 mx-1">
                      1806 <div className="text-muted">Days</div>
                    </div>
                    <div className="card col py-3 mx-1">
                      11 <div className="text-muted">Hours</div>
                    </div>
                    <div className="card col py-3 mx-1">
                      22 <div className="text-muted">mins</div>
                    </div>
                    <div className="card col py-3 mx-1">
                      46 <div className="text-muted">Sec</div>
                    </div>
                  </div>
                </div>
              </CommonCard>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default DailyBestSells;
