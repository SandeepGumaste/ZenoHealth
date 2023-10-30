import React from "react";
import FeaturedCategoryCard from "../components/FeaturedCategoryCard";

const featuredCategoriesData = [
  {
    name: "Instant Food",
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
  },
  {
    name: "Instant Food",
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
  },
  {
    name: "Instant Food",
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
  },
  {
    name: "Instant Food",
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
  },
  {
    name: "Instant Food",
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
  },
  {
    name: "Instant Food",
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="container-sm ">
      <header className="text-start fs-3 fw-semibold">
        <span>Featured Categories</span>
        {/*Add buttons*/}
      </header>
      <div>
        <div className="cardsContainer row container-sm m-0 p-0">
          {featuredCategoriesData.map((categoryData) => {
            return <FeaturedCategoryCard categoryData={categoryData} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
