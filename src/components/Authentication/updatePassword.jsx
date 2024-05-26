import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { upDatePassword } from "../../features/authSlice/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import update from "../../assets/update.jpg"

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const token = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      newpassword: "",
      conformpassword: "",
    },
    validationSchema: Yup.object({
      newpassword: Yup.string()
        .required("Please Enter your password")
        .matches(
        
        ),
      conformpassword: Yup.string()
        .max(12, "Must be 12 characters or less")
        .min(2, "Must be 2 characters or less")
        .required("Password Required")
        .oneOf([Yup.ref("newpassword"), null], "password not match"),
    }),
    onSubmit: (values, {resetForm}) => {
      console.log("valueswwwwwwwwwwwwwwwwwww ", values);
      dispatch(upDatePassword({values:values, token:token})).unwrap().then((res)=>{
        console.log("unwrap res",res);
        if(res.success===true){
          return resetForm();
        }
      })
      navigate("/login");
    },
  });

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-6 rounded pt-5">
            <div className="change-pass pb-3" style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius:'10px'}} >
            <h3 className="text-center pt-4">
              Change Password
            </h3>
            <form onSubmit={formik.handleSubmit} className="p-4">
              
                <label
                  htmlFor="newpassword"
                  className=""
                >
                  New Password
                </label><br></br>
                <input
                  id="newpassword"
                  name="newpassword"
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newpassword}
                />
                {formik.touched.newpassword && formik.errors.newpassword ? (
                  <div className="text-danger">
                    {formik.errors.newpassword}
                  </div>
                ) : null}<br></br>
          
            
                <label
                  htmlFor="conformpassword"
                  className=""
                >
                  Confirm Password
                </label><br></br>
                <input
                  id="conformpassword"
                  name="conformpassword"
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.conformpassword}
                />
                {formik.touched.conformpassword &&
                formik.errors.conformpassword ? (
                  <div className="text-danger">
                    {formik.errors.conformpassword}
                  </div>
                ) : null}
             <br></br>
              
                <button className="btn btn-danger form-control" type="submit">
                  Update
                </button>
            
            </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-image pt-2 " >
              <img src={update} alt="" style={{width:"100%", height:'auto'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
