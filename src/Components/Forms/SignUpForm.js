import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.string()
    .phone(null, true, "Invalid phone number")
    .required("Invalid Phone Number."),
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
  additionalInfoFlag: Yup.boolean(),
  additionalInfo: Yup.string().when("additionalInfoFlag", {
    is: true,
    then: Yup.string().required("This field is required!"),
  }),
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
          <Form>
            <div className="form-group">
              <label for="firstName">First Name</label>
              <Field type="text" name="firstName" className="form-control" />

              {formik.touched.firstName && formik.errors.firstName && (
                <span className="field_error">{formik.errors.firstName}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="lastName">Last Name</label>
              <Field type="text" name="lastName" className="form-control" />

              {formik.touched.lastName && formik.errors.lastName && (
                <span className="field_error">{formik.errors.lastName}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="male"
                    id="male"
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="female"
                    id="female"
                  />

                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="other"
                    id="other"
                  />

                  <label className="form-check-label" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <label for="email">Email</label>
              <Field type="email" name="email" className="form-control" />

              {formik.touched.email && formik.errors.email && (
                <span className="field_error">{formik.errors.email}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="phone">Phone Number</label>
              <Field type="number" name="phone" className="form-control" />

              {formik.touched.phone && formik.errors.phone && (
                <span className="field_error">{formik.errors.phone}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="password">Password</label>
              <Field type="password" name="password" className="form-control" />

              {formik.touched.password && formik.errors.password && (
                <span className="field_error">{formik.errors.password}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label for="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
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
              <Field as="select" name="subscription" className="form-control">
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </Field>
            </div>

            <div className="form-group mt-2">
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  name="additionalInfoFlag"
                  id="additionalInfoFlag"
                />
                <label
                  className="form-check-label"
                  htmlFor="additionalInfoFlag"
                >
                  Additonal Information
                </label>
              </div>
            </div>

            {formik.values.additionalInfoFlag && (
              <div className="form-group mt-2">
                <label htmlFor="additionalInfo">
                  Enter Addtional Information
                </label>
                <Field
                  as="textarea"
                  className="form-control"
                  name="additionalInfo"
                  value={formik.values.additionalInfo}
                />

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
                <Field
                  name="termsAndCondtions"
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndCondtions"
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
