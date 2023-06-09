import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const Form_card = ({ setNew, setNum, setMonth, setYear, setCvc, form }) => {
  const styleError = {
    border: "solid 1px red",
  };

  const loginSchema = Yup.object().shape({
    cardholder: Yup.string()
      .max(16, "Name too long")
      .required("Field is required"),
    card_number: Yup.string()
      .required("Field is required")
      .min(16, "Missing numbers")
      .max(16, "Too many characters"),
    month: Yup.string()
      .required("Field is required")
      .max(2, "Too many characters"),
    year: Yup.string()
      .required("Field is required")
      .max(2, "Too many characters"),
    cvc: Yup.string()
      .required("Field is required")
      .max(3, "Too many characters")
      .min(3, "Missing numbers"),
  });

  const initialCredentials = {
    cardholder: "",
    card_number: "",
    month: "",
    year: "",
    cvc: "",
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={form}
      >
        {({ touched, errors }) => (
          <Form className="form-main">
            <label htmlFor="cardholder">CARDHOLDER NAME</label>
            <Field
              onKeyUp={(e) => setNew(e.target.value)}
              id="cardholder"
              type="text"
              name="cardholder"
              placeholder="e.g. Jane Appleseed"
              style={errors.cardholder && styleError}
            />
            {errors.cardholder && (
              <ErrorMessage name="cardholder" component="span"></ErrorMessage>
            )}
            <label htmlFor="card_number">CARD NUMBER</label>
            <Field
              onKeyUp={(e) => setNum(e.target.value)}
              id="card_number"
              type="number"
              name="card_number"
              placeholder="e.g. 1234 5678 9123 0000"
              style={errors.card_number && styleError}
            />
            {errors.card_number && touched.card_number && (
              <ErrorMessage name="card_number" component="span"></ErrorMessage>
            )}
            <div className="container-date">
              <div className="container-labels">
                <label htmlFor="date">EXP. DATE</label>
                <label>(MM/YY)</label>
                <label htmlFor="cvc">CVC</label>
              </div>
              <div className="exp-date">
                <Field
                  className="inputMonth"
                  onKeyUp={(e) => setMonth(e.target.value)}
                  id="date"
                  type="number"
                  name="month"
                  placeholder="MM"
                  style={errors.month && styleError}
                />
                {errors.month && touched.month && (
                  <ErrorMessage
                    name="month"
                    component="span"
                    className="errorMonth"
                  ></ErrorMessage>
                )}
                <Field
                  className="inputYear"
                  onKeyUp={(e) => setYear(e.target.value)}
                  id="year"
                  type="number"
                  name="year"
                  placeholder="YY"
                  style={errors.year && styleError}
                />
                {errors.year && touched.year && (
                  <ErrorMessage
                    name="year"
                    component="span"
                    className="errorYear"
                  ></ErrorMessage>
                )}
                <Field
                  className="inputNumber"
                  onKeyUp={(e) => setCvc(e.target.value)}
                  type="number"
                  id="cvc"
                  name="cvc"
                  placeholder="e.g. 123"
                  style={errors.cvc && styleError}
                />
                {errors.cvc && touched.cvc && (
                  <ErrorMessage
                    name="cvc"
                    component="span"
                    className="errorCvc"
                  ></ErrorMessage>
                )}
              </div>
            </div>
            <button type="submit">Confirm</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Form_card.propTypes = {
  setNew: PropTypes.func,
  setNum: PropTypes.func,
  setMonth: PropTypes.func,
  setYear: PropTypes.func,
  setCvc: PropTypes.func,
  form: PropTypes.func,
};

export default Form_card;
