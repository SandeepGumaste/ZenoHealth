import React from "react";

const Hero = () => {
  return (
    <section className="hero px-3 col-xxl-5 col-md-7 text-xs-center text-start">
      <div
        className="container-sm my-4 px-2 rounded-3 imageContainer d-flex align-items-center"
        style={{
          backgroundImage: "url(/assets/slide-1.jpg)",
        }}
      >
        <div className="ps-4 ps-lg-5">
          <span className="badge text-bg-warning">
            Opening Sale Discount 50%
          </span>

          <h2 className="text-dark display-5 fw-bold mt-4">
            SuperMarket For Fresh Grocery{" "}
          </h2>
          <p className="lead">
            Introduced a new model for online grocery shopping and convenient
            home delivery.
          </p>
          <a href="#!" className="btn btn-dark mt-3" tabIndex="0">
            Shop Now <i className="feather-icon icon-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
