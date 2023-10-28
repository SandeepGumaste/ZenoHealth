import React from "react";

const BannerCard = ({ bannerData }) => {
  return (
    <div>
      <div
        className="rounded text-start bannerCard"
        style={{
          background: `url(${bannerData.imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h3 className="fw-bold mb-1">{bannerData.title}</h3>
          <p className="mb-4">
            Get Upto <span className="fw-bold">{bannerData.discount}%</span> Off
          </p>
          <a href="#!" className="btn btn-dark">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
