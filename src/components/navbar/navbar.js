// import React from "react";
import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { BsChevronDown } from "react-icons/bs";
import "./navbar.css";
import Logo from "./../../img/logo.png";
import Button from './button';
import Ul from './left_ul';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  const bottomarr = [
    {
      title: "Home",
      id: "home",
      class: "home_page",
      link: "/",
      drop: "fa-sharp fa-solid fa-angle-down",
      submenue: [
        { title: "Home One" },
        { title: "Home Two" },
      ],
    },
    {
      title: "Tours",
      class: "tours_page",
      id: "tours",
      // link: "/tours",
      drop: "fa-sharp fa-solid fa-angle-down",
      submenue: [
        { title: "Tour" },
        { title: "Tour Details" },
        { title: "Tour Booking" },
        { title: "Tour Destination" },
      ],
    },
    {
      title: "Flights",
      class: "flights_page",
      id: "flight",
      // link: "/flight",
      drop: "fa-sharp fa-solid fa-angle-down",
      submenue: [
        { title: "Flight" },
        { title: "Flight Booking" },
      ],
    },
    {
      title: "Hotel",
      class: "hotel_page",
      id: "hotel",
      drop: "fa-sharp fa-solid fa-angle-down",
      submenue: [
        { title: "Hotel" },
        { title: "Hootel Booking" },
        { title: "Room Details" },
        { title: "Room Booking" },
      ],
    },
    {
      title: "Pages",
      class: "page_page",
      id: "page",
      drop: "fa-sharp fa-solid fa-angle-down",
      submenue: [
        { title: "About" },
        { title: "Team" },
        { title: "Testimonials" },
        { title: "FAQ" },
        { title: "Booking Confirmastion" },
        { title: "News",
          sub_meune: [
            { title: "News" },
            { title: "News V2" },
            { title: "News Details" },
          ]
        },
        { title: "User Pages" },
        { title: "Customer Dashboard",
          sub_meune: [
            { title: "Dashboard" }, 
            { title: "Hotel booking" }, 
            { title: "Flight booking" }, 
            { title: "Tour booking" }, 
            { title: "Booking history" }, 
            { title: "My profile" }, 
            { title: "Wallet" }, 
            { title: "Notifications" }, 
          ]
        },
        { title: "Privacy Policy" },
        { title: "404 Error" },
      ],
    },
    {
      title: "Contact",
      class: "contact_page",
      id: "cont",
      link: "/contact",
    },
  ];

  // function navbar() {
  return (
    <>
      <div className="container-fluid main_header_arae">
        <div className="header-first">
          <div className="container header-first-area">
            <div className="top-header d-flex flex-wrap justify-content-between">
              <div className="left-header d-flex flex-wrap justify-content-between">
                <div className="react-icons">
                  <ul className="icon-list d-flex flex-wrap justify-content-between">
                    <li className="icon-detials">
                      <a href="https://www.facebook.com/" className="icon-link">
                        <FaFacebook />
                      </a>
                    </li>

                    <li className="icon-detials">
                      <a href="https://twitter.com/" className="icon-link">
                        <FaTwitterSquare />
                      </a>
                    </li>

                    <li className="icon-detials">
                      <a
                        href="https://www.instagram.com/"
                        className="icon-link"
                      >
                        <FaInstagram />
                      </a>
                    </li>

                    <li className="icon-detials">
                      <a href="https://www.linkedin.com/" className="icon-link">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="left-head-details">
                  <ul className="contact_details d-flex flex-wrap justify-content-between">
                    <li className="cont-detl">
                      <a href="#!" className="phone_no">
                        <span>+011 234 567 89</span>
                      </a>
                    </li>

                    <li className="cont-detl">
                      <a href="#!" className="email">
                        <span>contact@domain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right-header d-flex flex-warp justify-content-end">
                {/* <ul className="topbar-other-options d-flex flex-wrap justify-content-between">
                  <li className="option-details">
                    <a href="/login" className="login-btn">
                      Login
                    </a>
                  </li>

                  <li className="option-details btn-line">
                    <a href="/signup" className="signup-btn">
                      Sign Up
                    </a>
                  </li>

                  <li className="option-details btn-line dropdown">
                    <a href="/language" className="language dropbtn">
                      English{" "}
                      <span>
                        <BsChevronDown />
                      </span>
                    </a>
                    <ul class="dropdown-content">
                      <li className="content-details">
                        <a href="#!" className="content-link">
                          English
                        </a>
                      </li>
                      <li className="content-details">
                        <a href="#!" className="content-link">
                          Arabic
                        </a>
                      </li>
                      <li className="content-details">
                        <a href="#!" className="content-link">
                          French
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="option-details btn-line dropdown">
                    <a href="/price" className="price dropbtn">
                      USD{" "}
                      <span>
                        <BsChevronDown />
                      </span>
                    </a>
                    <ul class="dropdown-content">
                      <li className="content-details">
                        <a href="#!" className="content-link">
                          BD
                        </a>
                      </li>
                      <li className="content-details">
                        <a href="#!" className="content-link">
                          USD
                        </a>
                      </li>
                      <li className="content-details">
                        <a href="#!" className="content-link">
                          URO
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul> */}
                <div className="right_ul"> <Ul /> </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-navbar">
          <div className="container">
            <header className={x.join(" ")}>
              <div className="logo">
                <img src={Logo} alt="Logo" title="Logo" />
              </div>
              
              <div className="bottom-nav">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      {bottomarr.map((item) => (
                        <div className="dropdown">
                          <ul className="dropbtn" id={item.id}>
                            <li>
                              <a href={`${item?.link}`}>
                                {item.title} <i class={item.drop}></i>{" "}
                              </a>
                            </li>{" "}
                          </ul>
                          {item.submenue ? (
                            <ul className="dropdown-content">
                              {item.submenue.map((inner) => (
                                <li className="drop-item">
                                  <a href={`${item?.link}`}>{inner.title}</a>
                                </li>
                              ))}{" "}
                            </ul>
                          ) : (
                            ""
                          )}
                          
                        </div>
                      ))}
                      <div className='topbtn'><Button empty="Start a project" /></div>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
