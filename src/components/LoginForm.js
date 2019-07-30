import React from "react";
import { Field, reduxForm } from "redux-form";
import { userLogin } from "../actions/userActions";

let LoginForm = (props) => {
  return (
    <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        props.dispatch(userLogin(e.target.email.value, e.target.password.value));
      }}
    >
      <p className="subtitle is-4">PLEASE LOG IN OR REGISTER</p>
      <Field name="email" component="input" type="text" placeholder="Email" className="input is-rounded" />
        <br />
      <Field name="password" component="input" type="password" placeholder="Password" className="input is-rounded" />
        <br />
      <button className="button is-primary is-rounded" type="submit" label="submit">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({ form: "login" })(LoginForm);

export default LoginForm;
