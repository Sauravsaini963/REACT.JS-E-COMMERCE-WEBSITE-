import React, { Suspense, lazy, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const NavScrollExample = lazy(() => import("./components/header/navbar"));
const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const Login = lazy(() => import("./components/Authentication/login"));
const SignUp = lazy(() => import("./components/Authentication/signUp"));
const ToastifyContainer = lazy(() => import("./service/tostifyContainer"));
const ForgetPassword = lazy(() => import("./components/Authentication/forgetPassword"));
const CartItem = lazy(() => import("./components/cartItems/cartItem"));
const Footer = lazy(() => import("./components/footer/footer"));
const UpdatePassword = lazy(() =>
  import("./components/Authentication/updatePassword")
);
const Payment = lazy(() => import("./components/payment"));

const RouteGaurd = ({ children }) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

function App() {
  const token = localStorage.getItem("userToken");
  // const location = useLocation();
  // console.log("location ", location);

  return (
    <>
      <Suspense
        fallback={
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              placeItems: "center",
            }}
          >
            loading...
          </h1>
        }
      >
        <ToastifyContainer />
        <NavScrollExample />
        {/* {location.pathname === "/login" || location.pathname === "/signup" ? (
          ""
          
        ) : (
          <NavScrollExample />
        )} */}
        <Routes>
          {/* <Route path="/" element={<Home />} />  */}
          <Route
            path="/"
            element={
              <RouteGaurd>
                <Home />
              </RouteGaurd>
             
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={token ? <Navigate to="/" replace={true}/> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/updatePassword/:token" element={<UpdatePassword />} />
          <Route path="/cartitem" element={<CartItem />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
