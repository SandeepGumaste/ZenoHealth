import React from "react";
import BannerCard from "./BannerCard";

const bannerCardsData = [
  {
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/banner/grocery-banner.png",
    discount: 30,
    title: "Fruits & Vegetables",
  },
  {
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/banner/grocery-banner-2.jpg",
    discount: 25,
    title: "Freshly Baked Buns",
  },
];

const BannerCards = () => {
  return (
    <section className="mb-5">
      <div className="container-sm my-3">
        <div className="row">
          {bannerCardsData.map((cardData) => (
            <div className="col-12 col-md-6 mb-3 mb-lg-0">
              <BannerCard bannerData={cardData} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCards;
