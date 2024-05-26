import React from "react";
import { useFormik } from "formik";
import signup from "../../assets/signup.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../features/authSlice/authSlice";
import { motion } from "framer-motion";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 15) {
      errors.password = "Must be 15 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(signUp(values));
      navigate("/login");
    },
  });
  return (
    <>
      <div className="container   form-signUP">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 2 }}
              className="side-image "
            >
              <img src={signup} alt="" />
            </motion.div>
          </div>

          <div
           
            className="col-md-6"
          >
            <motion.div
             initial={{ opacity: 0, x:100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0, duration: 2 }}
             className="signup-form">
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}

                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}

                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label htmlFor="email">New Password</label>
                <br />
                <input
                  
                  id="password"
                  name="password"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
                <br />

                <button type="submit" className="btn btn-success form-control ">
                  Sign Up
                </button>
                <p className="mt-2">
                  Have an account?{" "}
                  <NavLink to="/login">
                    <span className="login-color">Log in</span>
                  </NavLink>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
