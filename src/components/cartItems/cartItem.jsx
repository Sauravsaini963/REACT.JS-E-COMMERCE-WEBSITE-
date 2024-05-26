import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentData, removeCardData } from "../../features/homeSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => {
    return state.homeSlice.cardArray;
  });
  const [quantity, setQuantity] = useState(Array(cartData.length).fill(1));
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    console.log("itttttttttttttttt ", item);  
    dispatch(removeCardData(item));
  };
  const handleSub = (index) => {
    const newQuantities = [...quantity];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantity(newQuantities);
    }
  };
  const handleAdd = (index) => {
    const newQuantities = [...quantity];
    newQuantities[index]++;
    setQuantity(newQuantities);
  };
  const handleBuy = (data) => {
    dispatch(paymentData(data));
    navigate("/payment");
  };
  return (
    <>
      {cartData.length > 0 ? (
        <div className="container-fluid" style={{ backgroundColor: "#ECECEC" }}>
          <div className="container">
            <div className="row pb-5">
              <div className="col-xl-12">
                {cartData.map((item, index) => {
                  return (
                    <>
                      <div
                        className="row bg-light mt-5 p-3 rounded"
                        key={index}
                      >
                        <div className="col-sm-4">
                          <div
                            className="card  d-flex justify-content-center align-items-center p-3"
                            style={{ width: "18rem" }}
                          >
                            <img
                              src={item.image}
                              alt=""
                              style={{ width: "100px", height: "100px" }}
                            />
                            <div className="card-body">
                              <button
                                className="btn btn-secondary mx-2"
                                onClick={() => handleSub(index)}
                              >
                                -
                              </button>
                              <span>{quantity[index]}</span>
                              <button
                                className="btn btn-secondary mx-2"
                                onClick={() => handleAdd(index)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-start">
                          <h5 className="my-3">{item.title}</h5>
                          <h6 style={{ fontStyle: "italic" }}>
                            Unique<span style={{ color: "coral" }}>Mart</span>{" "}
                            Price
                          </h6>
                          <h3 className="my-2">
                            <span style={{ color: "#FFEE15" }}>$</span>
                            {item.price}
                          </h3>
                          <button
                            className="btn btn-danger mt-2"
                            onClick={() => handleRemove(item)}
                          >
                            remove
                          </button>
                        </div>

                        <div className="col-sm-4 ">
                          <div className="item-cart bg-light w-100 h-auto rounded p-4 ">
                            <h5 className="pb-3">PRICE DETAILS</h5>
                            <table>
                              <tr>
                                <th>
                                  Price{" "}
                                  <span style={{ color: "coral" }}>
                                    ({quantity[index]} items)
                                  </span>
                                </th>
                                <td style={{ color: "green" }}>{item.price}</td>
                              </tr>
                              <tr>
                                <th>Delivery Charges</th>
                                <td style={{ color: "green" }}>-Free</td>
                              </tr>
                              <tr>
                                <th>
                                  <h5>Total Amount</h5>
                                </th>
                                <td style={{ color: "red" }}>
                                  <h5>
                                    -$ {parseFloat(item.price) * quantity[index]}
                                  </h5>
                                </td>
                              </tr>
                            </table>
                            <button
                              className="btn btn-warning mt-2"
                              onClick={()=>handleBuy({quantity:quantity[index], price:parseFloat(item.price) * quantity[index]})}
                            >
                              proceed to buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1
          className="text-center"
          style={{ paddingBottom: "150px", paddingTop: "100px" }}
        >
          "your cart is Empty"
        </h1>
      )}
    </>
  );
};

export default CartItem;
