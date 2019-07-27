import React from "react";
import { Field, reduxForm } from "redux-form";
import { userLogin } from "../actions/userActions";

let LoginForm = (props) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        props.dispatch(userLogin(e.target.email.value, e.target.password.value));
      }}
    >
        <br />
      <Field name="email" component="input" type="text" placeholder="Email" className="login-text-input" />
        <br />
      <Field name="password" component="input" type="password" placeholder="Password" className="login-text-input" />
        <br /> <br />
      <button type="submit" label="submit" className="button">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({ form: "login" })(LoginForm);

export default LoginForm;
