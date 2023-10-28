import React from "react";
import CommonCard from "./CommonCard";

const ProductCard = () => {
  return (
    <CommonCard>
      <div className="px-2 py-4">
        <img
          src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg"
          alt=""
          width={"100%"}
        />

        <div>Instant Food</div>
        <div>Salted Instant Popcorn</div>
        <div>Rating</div>
      </div>
    </CommonCard>
  );
};

export default ProductCard;
