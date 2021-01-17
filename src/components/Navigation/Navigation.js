import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/user";

const Navigation = () => {
  const history = useHistory();

  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <section>
      <nav className="navbar is-transparent py-3">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                src="../metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"
                style={{ minHeight: "40px" }}
              />
            </Link>
            <Link
              to="#"
              className="navbar-burger"
              role="button"
              type="button"
              data-toggle="side-menu"
              data-target="#sideMenu05"
              aria-controls="sideMenu05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start ml-auto mr-0">
              <Link className="navbar-item" to="/products">
                Product
              </Link>
              <Link className="navbar-item" to="/company">
                Company
              </Link>
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/features">
                Features
              </Link>
            </div>

            <div className="navbar-end ml-0">
              <div className="navbar-item">
                <div className="buttons">
                  {isAuthenticated ? (
                    <button
                      className="button is-primary is-outlined"
                      onClick={() => {
                        dispatch(logout());
                        history.push("/auth/login");
                      }}
                    >
                      Log Out
                    </button>
                  ) : (
                    <>
                      <Link
                        className="button is-primary is-outlined"
                        to="/auth/login"
                      >
                        Log In
                      </Link>
                      <Link
                        className="button is-primary is-outlined"
                        to="/auth/register"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="is-hidden" id="sideMenu05">
        <div
          className="is-fixed is-top is-right is-fullsize has-background-grey"
          style={{ zIndex: 1 }}
        ></div>
        <nav
          className="is-fixed is-top is-left is-bottom navbar is-flex is-flex-direction-column pt-4 px-4"
          style={{ width: "80%", height: "100%", overflowY: "scroll" }}
        >
          <div className="mb-5 navbar-brand is-flex is-justify-content-space-between">
            <a className="navbar-item" href="#">
              <img
                style={{ minHeight: "35px" }}
                src="../metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"
              />
            </a>
            <a className="navbar-item">
              <svg
                className="image is-24x24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </a>
          </div>
          <div>
            <nav className="navbar mb-5">
              <div className="is-fullwidth">
                <Link className="navbar-item" to="/products">
                  Product
                </Link>
                <a className="navbar-item" href="#">
                  Company
                </a>
                <a className="navbar-item" href="#">
                  About Us
                </a>
                <a className="navbar-item" href="#">
                  Features
                </a>
              </div>
            </nav>
            <div className="mb-6 pt-5 has-border-top">
              <a
                className="button is-block is-primary is-outlined mb-2"
                href="#"
              >
                Log In
              </a>
              <a className="button is-block is-primary" href="#">
                Sign Up
              </a>
            </div>
          </div>
          <div className="pl-4 pb-4 mt-auto">
            <p className="mb-5 is-size-7">
              <span>Get in Touch</span>
              <a href="#">info@example.com</a>
            </p>
            <a href="#">
              <img src="metis-assets/icons/facebook-blue.svg" alt="" />
            </a>
            <a href="#">
              <img src="metis-assets/icons/twitter-blue.svg" alt="" />
            </a>
            <a href="#">
              <img src="metis-assets/icons/instagram-blue.svg" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
