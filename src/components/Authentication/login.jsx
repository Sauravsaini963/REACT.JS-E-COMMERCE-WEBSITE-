import React from "react";
import { useFormik } from "formik";
import login from "../../assets/login.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/authSlice/authSlice";
import {motion}  from "framer-motion";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

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
      console.log("login valuee", values);
      dispatch(signIn(values))
        .unwrap()
        .then((res) => {
          console.log("login res", res);
          localStorage.setItem("userToken", JSON.stringify(res.token));
          res.success === true ? navigate("/") : null;
        });
    },
  });
  const handleForgot = () => {
    navigate("/forget");
  };
  return (
    <>
    
    <div className="container-fluid" >
      <motion.div  initial={{opacity:0, x:-600}}
              animate={{opacity:1,x:0,  }}
              transition={{delay:0,duration:2}} className="container   form-signUP">
        <div className="row">
        <div className="col-md-6">
            <div className="side-image ">
              <img src={login} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-form">
              <form onSubmit={formik.handleSubmit}>
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

                <label htmlFor="email">Password</label>
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

                <button type="submit" className="btn btn-primary form-control ">
                  Log in
                </button>
                <p className="mt-2 d-flex justify-content-center">
                  <span className="login-color" onClick={handleForgot}>
                    Forgotten password?
                  </span>
                </p>
                <hr />

                <NavLink to="/signup">
                  <button
                    type="submit"
                    className="btn btn-success form-control "
                  >
                    Create new account
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        
        </div>
      </motion.div>
      </div>
    </>
  );
};
export default Login;
