import React from "react";
import CommonCard from "./CommonCard";

const FeaturedCategoryCard = ({ categoryData }) => {
  return (
    <div className="px-2 py-4 col-6 col-md-4 col-lg-2">
      <CommonCard>
        <div className="p-3">
          <img src={categoryData.imgUrl} alt="instantfood" />
          <h5 className="fw-semibold py-2 fs-6">{categoryData.name}</h5>
        </div>
      </CommonCard>
    </div>
  );
};

export default FeaturedCategoryCard;
