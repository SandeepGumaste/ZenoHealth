import React from "react";
import CommonCard from "./CommonCard";
import StarRatingComponent from "react-star-rating-component";
import { Plus } from "react-bootstrap-icons";

const ProductCard = ({ productData, handleAddToCart }) => {
  const { name, price, category, rating, imgUrl } = productData;
  return (
    <article className="productCard">
      <CommonCard>
        <div className="productCardContent p-3 text-start">
          <img src={imgUrl} alt={name} width={"100%"} />

          <p className="text-muted category fw-bold opacity-2 mb-1">
            {category}
          </p>
          <h2 className="name">{name}</h2>

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

          <div className="pricingContainer d-flex justify-content-between align-items-center price mt-1">
            <div className="price">
              <span>${price.current}</span>{" "}
              {price.actual && price.actual > price.current && (
                <span className="text-muted text-decoration-line-through">
                  ${price.actual}
                </span>
              )}
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                class="btn btn-success btn-sm border-0"
              >
                <Plus width={20} height={20} color="white" /> Add
              </button>
            </div>
          </div>
        </div>
      </CommonCard>
    </article>
  );
};

export default ProductCard;
