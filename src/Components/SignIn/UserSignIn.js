import React, { useState } from "react";
import axios from "axios";
import styles from "./UserSignIn.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "@fontsource/roboto";

const UserSignIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const emailInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setenteredPassword(event.target.value);
  };

  //** On-Click Sign in Button */
  const userSignInHandler = (event) => {
    event.preventDefault(); //prevent sending default request while clicking Sign in button

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }

    const userObject = {
      email: enteredEmail,
      password: enteredPassword,
    };

    axios
      .post("localhost:8000/api/login", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setEnteredEmail("");
    setenteredPassword("");
  };

  return (
    <Card className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
      <form onSubmit={userSignInHandler}>
        <h1>Sign in</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailInputHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={enteredPassword}
          onChange={passwordInputHandler}
          autoComplete="off"
        />
        <span>
          <input id="remember-me" type="checkbox" />
          Remember me?
        </span>
        <Button type="submit">Sign in</Button>
        <p>
          <a href="url">Forgot your password?</a>
        </p>
        <p>
          Don't have an account?<a href="url">Sign up</a>
        </p>
        <p>
          <a href="url">Resend email confirmation</a>
        </p>
      </form>
    </Card>
  );
};

export default UserSignIn;
