import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <img src={logo} alt="" className="logo-image" />
            <p>A unique shopping experience!</p>
          </div>
          <div className="col-lg-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a herf="/products">Products</a>
              </li>
              <li>
                <a herf="/about">About Us</a>
              </li>
              <li>
                <a herf="/">Home</a>
              </li>
              <li>
                <a herf="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact Info</h5>
            <p>123 Unique Street, City, Country</p>
            <p>Email: info@uniquemart.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="my-2" />
        <div className="row">
          <div className="col-md-4">
            <h5>
              Unique<span style={{ color: "coral" }}>Mart</span>
            </h5>
          </div>
          <div className="col-md-4">
            <div className="icon">
              <FaFacebook className="icon-image" />
              <FaSquareInstagram className="icon-image" />
              <FaWhatsappSquare className="icon-image" />
              <FaPinterestSquare className="icon-image" />
            </div>
          </div>
          <div className="col-md-4">
            <p className="text-center">
              &copy; 2024 UniqueMart. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
