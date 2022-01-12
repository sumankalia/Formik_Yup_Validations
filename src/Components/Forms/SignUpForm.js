import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.number().required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(6, "must be of 6 characters long."),
  confirmPassword: Yup.string()
    .required("This field is required")
    .min(6, "must be of 6 characters long")
    .oneOf([Yup.ref("password")], "Password must match"),
  termsAndCondtions: Yup.boolean().oneOf(
    [true],
    "Please accept terms and conditons"
  ),
});

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "male",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          subscription: "",
          termsAndCondtions: false,
          additionalInfoFlag: false,
          additionalInfo: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <span className="field_error">{formik.errors.firstName}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <span className="field_error">{formik.errors.lastName}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "male"}
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "female"}
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "other"}
                  />
                  <label className="form-check-label" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="field_error">{formik.errors.email}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="phone">Phone Number</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <span className="field_error">{formik.errors.phone}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="field_error">{formik.errors.password}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <span className="field_error">
                    {formik.errors.confirmPassword}
                  </span>
                )}
            </div>

            <div className="form-group mt-2">
              <label for="confirmPassword">Subscription</label>
              <select
                className="form-control"
                name="subscription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subscription}
              >
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="additionalInfoFlag"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfoFlag}
                />
                <label
                  className="form-check-label"
                  htmlFor="additionalInfoFlag"
                >
                  Additional Information
                </label>
              </div>
            </div>

            {formik.values.additionalInfoFlag && (
              <div className="form-group mt-2">
                <label htmlFor="additionalInfo">
                  Enter Additional Information
                </label>
                <textarea
                  className="form-control"
                  name="additionalInfo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfo}
                ></textarea>
                {formik.touched.additionalInfo &&
                  formik.errors.additionalInfo && (
                    <span className="field_error">
                      {formik.errors.additionalInfo}
                    </span>
                  )}
              </div>
            )}

            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndCondtions"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.termsAndCondtions}
                />
                <label className="form-check-label" htmlFor="termsAndCondtions">
                  Accept terms and conditions.
                </label>
              </div>
              {formik.touched.termsAndCondtions &&
                formik.errors.termsAndCondtions && (
                  <span className="field_error">
                    {formik.errors.termsAndCondtions}
                  </span>
                )}
            </div>

            <div className="d-grid mt-2">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
