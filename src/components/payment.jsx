import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const Payment = () => {
 
  const cartData = useSelector((state) => state.homeSlice.buy);
  console.log("cart datttttt",cartData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      pincode:"",
      Flat:"",

    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#ECECEC" }}>
        <div
          className="container"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="row">
            <div className="col-md-8">
              <div className="payment-content">
                <h4 style={{ color: "coral" }}>Select a delivery address</h4>
                <div className="card p-5">
                  <h5>Your addresses</h5>

                  <Button variant="warning" onClick={handleShow}>
                    <FaPlus />
                    <span style={{ color: "black" }}>Add a new address</span>
                  </Button>

                  <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                      <Modal.Title>Delivery Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <br></br>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          className="form-control"
                        />
                        <br></br>

                        <label htmlFor="lastName">Last Name</label>
                        <br></br>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                          className="form-control"
                        />
                        <br></br>

                        <label htmlFor="number">Mobile Number</label>
                        <br></br>
                        <input
                          id="number"
                          name="moblieNumber"
                          type="number"
                          onChange={formik.handleChange}
                          value={formik.values.number}
                          className="form-control"
                        />
                        <br></br>
                        <label htmlFor="number">Pincode</label>
                        <br></br>
                        <input
                          id="number"
                          name="pincode"
                          type="number"
                          onChange={formik.handleChange}
                          value={formik.values.pincode}
                          className="form-control"
                        />
                        <br></br>
                        <label htmlFor="house">Flat, House no., Building, Company, Apartment</label>
                        <br></br>
                        <input
                          id="house"
                          name="Flat"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.Flat}
                          className="form-control"
                        />
                        <br></br>

                        <Button variant="primary" type="submit" className="form-control">
                         Submit
                        </Button>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
                <h4 style={{ color: "coral" }} className="pt-3">
                  Select a payment method
                </h4>
                <div className="card p-5">
                  <h5>payment method</h5>
                  <form action="">
                    <input type="radio" name="netBanking" id="radio" />
                    <label htmlFor="radio">Net Banking</label>
                    <br />

                    <input type="radio" name="creditOrDebit" id="radio" />
                    <label htmlFor="radio">credit or debit card</label>
                    <br />

                    <input type="radio" name="Upi" id="radio" />
                    <label htmlFor="radio">UPI</label>
                  </form>
                  <button className="btn btn-warning btn-sm my-3">
                    Use this payment method
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="order-summ" style={{ marginTop: "37px" }}>
             
                <div className="card p-3">
                  <h5 className="pb-3">Order Summary</h5>
                  <table>
                    <tbody>
                    <tr>
                      <th>
                        Price{" "}
                        <span style={{ color: "coral" }}>
                          ({cartData.quantity} items)
                        </span>
                      </th>
                      <td style={{ color: "green" }}>-${cartData.price}</td>
                    </tr>

                    <tr>
                      <th>Delivery Charges</th>
                      <td style={{ color: "green" }}>-Free</td>
                    </tr>

                    

                    <tr>
                      <th>
                        <h5>Order Total:</h5>
                      </th>
                      <td style={{ color: "red" }}>
                        <h5>-${cartData.price}</h5>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
