import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ForgottenPassword } from "../../features/authSlice/authSlice";
import forgot from "../../assets/forgot.png";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const ForgetPassword = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log("hhhh", values);
      dispatch(ForgottenPassword(values))
        .unwrap()
        .then((res) => {
          console.log("unwarpppppppppppres", res);
          if (res.success === true) {
            return resetForm();
          }
        });
    },
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="forget-image">
              <img src={forgot} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="forget-form mt-5">
              <h2 className=" mb-5">Reset your password</h2>
              <p>
                Enter your email address and we will send you instructions to
                reset your password.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <br></br>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="form-control"
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <br></br>

                <button type="submit" className="btn btn-success form-control">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
