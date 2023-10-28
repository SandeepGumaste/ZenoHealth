import "./App.css";
import BannerCards from "./components/BannerCards";
import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/PopularProducts";

function App() {
  return (
    <div className="App ">
      <div className="bg-light py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 text-center text-md-start">
              <span> Super Value Deals - Save more with coupons</span>
            </div>
            <div className="col-6 text-end d-none d-md-block">
              <div className="dropdown selectBox">
                <a
                  className="dropdown-toggle selectValue text-reset"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#selectedlang)">
                        <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169"></path>
                        <path
                          d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
                          fill="white"
                        ></path>
                        <path
                          d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
                          fill="#C8102E"
                        ></path>
                        <path
                          d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
                          fill="white"
                        ></path>
                        <path
                          d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
                          fill="#C8102E"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="selectedlang">
                          <rect
                            width="16"
                            height="12"
                            fill="white"
                            transform="translate(0 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  English
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navbar />
        <div className="">
          <Hero />
          <FeaturedCategories />
          <BannerCards />
          <PopularProducts />
        </div>
      </div>
    </div>
  );
}

export default App;
