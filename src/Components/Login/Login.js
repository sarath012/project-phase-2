import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { appContext } from "../../Context/AppContext";

export default function Login() {
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(appContext);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regexemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const regexpass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexemail.test(values.email)) {
      errors.email = "This is not a valid email!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password should be more than 8 characters";
    } else if (!regexpass.test(values.password)) {
      errors.password = "Password not in valid format!";
    } else {
      setIsLoggedIn(true);
    }

    return errors;
  };

  return (
    <div className="form-container">
      <div className="headingcontainer">
        <h1 className="heading">Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <input
            className="login-input"
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handlechange}
          />
          <p className="errormsg">{formErrors.email}</p>
        </div>
        <div className="inputcontainer">
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handlechange}
          />
          <p className="errormsg">{formErrors.password}</p>
        </div>
        <div>
          <button className="login-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
