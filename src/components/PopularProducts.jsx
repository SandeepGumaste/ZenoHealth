import React from "react";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  return (
    <section className="container-sm my-4 w-100">
      <div className="row w-100">
        <div className="col-6 col-md-4 col-lg-2">
          <ProductCard />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <ProductCard />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <ProductCard />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <ProductCard />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <ProductCard />
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
