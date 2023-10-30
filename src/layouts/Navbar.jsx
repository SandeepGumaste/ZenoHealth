import React from "react";
import {
  Bag,
  BorderAll,
  GeoAlt,
  Heart,
  List,
  Person,
} from "react-bootstrap-icons";
const Navbar = ({ cartCount }) => {
  return (
    <div className="border-bottom pb-2">
      <div className="bg-light py-1">
        <div className="container-sm">
          <div className="row">
            <div className="col-md-6 col-12 text-center text-md-start">
              <span> Super Value Deals - Save more with coupons</span>
            </div>
            <div className="col-6 text-end d-none d-md-block">
              <div className="dropdown selectBox">
                <a
                  className="dropdown-toggle selectValue text-reset"
                  href="#!"
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
      <div className="d-flex justify-content-between align-items-center py-4 container-sm">
        <div className="d-flex">
          <img src="/assets/logo.svg" alt="logo" className="me-5" />
          <form className="d-none d-lg-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success d-flex justify-content-between align-items-center disabled"
              type="submit"
            >
              <GeoAlt className="me-2" />
              Location
            </button>
          </form>
        </div>
        <div className="d-flex align-items-center lh-1">
          <div className="list-inline-item d-none d-lg-flex pe-1">
            <a
              className="text-muted position-relative"
              href="#offcanvasExample"
            >
              <Heart width={20} height={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                1
              </span>
            </a>
          </div>
          <div className="list-inline me-4 px-2">
            <div className="list-inline-item">
              <a href="#!" className="text-muted" data-bs-target="#userModal">
                <Person width={22} height={22} />
              </a>
            </div>
            <div className="list-inline-item ps-2">
              <a
                className="text-muted position-relative"
                href="#offcanvasExample"
              >
                <Bag width={20} height={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cartCount}
                </span>
              </a>
            </div>
          </div>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none ps-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbar-default"
            aria-controls="navbar-default"
          >
            <List width={25} height={25} />
          </button>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg container-sm d-none d-lg-flex">
        <div className="container-fluid">
          <button className="btn btn-success border-0 px-4 py-2">
            <BorderAll width={15} height={15} className="me-2" />
            All Departments
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stores
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mega menu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
