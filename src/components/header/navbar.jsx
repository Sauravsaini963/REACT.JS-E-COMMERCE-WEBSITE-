import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavScrollExample() {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.homeSlice.cardArray);

  const cartItem = () => {
    navigate("/cartitem");
  };

  const token = localStorage.getItem("userToken");
  console.log("locla token", token);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");

    navigate("/Login");
  };

  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="d-flex justify-content-center align-items-center text-light "
        >
          <NavLink to="/" className="brand-link">
            <div className=" d-flex justify-content-center align-items-center">
              <img src={logo} alt="" className="brand-image" />
              <p className="logoName mb-0">
                Unique<span className="mart-color">Mart</span>
              </p>
            </div>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2  my-lg-0">
          <NavLink to="/" className="mx-5 list-name">
              Home
            </NavLink>
            <NavLink to="/about" className="mx-5 list-name">
              About us
            </NavLink>
            <NavLink to="/contact" className="mx-5 list-name">
              Contact us
            </NavLink>
          </Nav>

          {token ? (
            <Button variant="danger mx-3" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="success mx-3" onClick={handleLogin}>
              Login
            </Button>
          )}

          <span className=" position-relative">
            <FaCartPlus
              className="mx-4 p-0 cart-icon"
              style={{ color: "white" }}
              onClick={cartItem}
            />
            <span
              className="position-absolute top-0 start-2 translate-middle badge rounded-pill bg-danger"
              style={{ left: "60px", width: "30px", height: "20px" }}
            >
              {cartData.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
