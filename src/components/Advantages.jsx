import React from "react";
import { ArrowClockwise, BoxSeam, Clock, Gift } from "react-bootstrap-icons";

const advantagesData = [
  {
    icon: <Clock color="#0AAD0A" width={40} height={40} />,
    heading: "10 minute grocery now",
    content:
      "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
  },
  {
    icon: <Gift color="#0AAD0A" width={40} height={40} />,
    heading: "Best Prices & Offers",
    content:
      "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
  },
  {
    icon: <BoxSeam color="#0AAD0A" width={40} height={40} />,
    heading: "Wide Assortment",
    content:
      "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg &amp; other categories.",
  },
  {
    icon: <ArrowClockwise color="#0AAD0A" width={40} height={40} />,
    heading: "Easy Returns",
    content:
      "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy",
  },
];

const Advantages = () => {
  return (
    <section class="my-lg-5 my-3 advantages">
      <div class="container-sm">
        <div class="row">
          {advantagesData.map((advantage) => {
            return (
              <div key={advantage.heading} class="col-md-6 col-lg-3">
                <div class="mb-5 mb-xl-0">
                  <div class="mb-3">{advantage.icon}</div>
                  <h3 class="h5 mb-3">{advantage.heading}</h3>
                  <p className="text-muted">{advantage.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
