import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData, addCardData } from "../features/homeSlice";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const myData = useSelector((state) => {
    return state.homeSlice.data;
  });
  const cartData = useSelector((state) => {
    return state.homeSlice.cardArray;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createData());
  }, []);

  const addToCardData = (item) => {
    dispatch(addCardData(item));
  };

  const handleBuy = () => {
    navigate("/payment");
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#ECECEC" }}>
        <div className="row pt-3 text-center pb-5">
          {myData.map((item, index) => {
            return (
              <motion.div
                className="col-md-3 mt-3 card-item"
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, y: -10, scale: 1 }}
                transition={{ delay: 0, duration: 1.5 }}
              >
                <div className="card p-2" style={{ width: "18rem" }}>
                  <img
                    src={item.image}
                    className="card-img-top  objet-fit-cover"
                    alt="..."
                    style={{ width: "100%", height: 300 }}
                  />
                  <div className="card-body">
                    <h5>{item.title.slice(0, 15)}...</h5>
                    <h4 style={{ color: "red" }}>
                      <span style={{ color: "black" }}>$</span>
                      {item.price}
                    </h4>
                    <button
                      className="btn btn-success mx-1"
                      onClick={() => addToCardData(item)}
                    >
                      {cartData.find((cartitem) => cartitem.id === item.id) ? (
                        <NavLink
                          className="brand-link text-light"
                          to="/cartitem"
                        >
                          View cart
                        </NavLink>
                      ) : (
                        <span>add to cart</span>
                      )}
                    </button>{" "}
                    <button
                      className="btn mx-1"
                      style={{ backgroundColor: "#E8552B", color: "white" }}
                      onClick={handleBuy}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
