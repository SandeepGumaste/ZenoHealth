import React from "react";
import ProductCard from "../components/ProductCard";

const PopularProductsData = [
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
  {
    category: "Snacks & munchies",
    rating: 4,
    name: "Onion Flavour Potato",
    price: {
      current: 32,
      actual: 35,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg",
    id: 4,
  },
  {
    category: "Instant Food",
    rating: 3,
    name: "Salted Instant Popcorn",
    price: {
      current: 3,
      actual: 5,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg",
    id: 5,
  },
  {
    category: "Dairy, Bread & Eggs",
    rating: 4,
    name: "Blueberry Greek Yogurt",
    price: {
      current: 18,
      actual: 24,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg",
    id: 6,
  },
  {
    category: "Dairy, Bread & Eggs",
    rating: 4,
    name: "Britannia Cheese Slices",
    price: {
      current: 24,
      actual: 24,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-7.jpg",
    id: 7,
  },
  {
    category: "Instant Food",
    rating: 4,
    name: "Kellog's Original Cereals",
    price: {
      current: 32,
      actual: 35,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg",
    id: 8,
  },
  {
    category: "Snack & munchies",
    rating: 4,
    name: "Slurrp Millet Chocolate",
    price: {
      current: 3,
      actual: 5,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg",
    id: 9,
  },
  {
    category: "Dairy, Bread & Eggs",
    rating: 4,
    name: "Amul Butter-500g",
    price: {
      current: 32,
      actual: 35,
    },
    imgUrl:
      "https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg",
    id: 10,
  },
];

const PopularProducts = ({ handleAddToCart }) => {
  return (
    <section className="popular-products-container container-sm my-4 ">
      <header className="text-start fw-semibold h3 mb-4">
        <span>Popular Products</span>
      </header>
      <div className="d-flex justify-content-center">
        <div className="product-list d-flex flex-wrap gap-3">
          {PopularProductsData.map((product) => (
            <ProductCard
              key={product.id}
              productData={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
