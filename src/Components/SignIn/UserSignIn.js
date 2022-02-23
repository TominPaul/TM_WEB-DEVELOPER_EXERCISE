import styles from "./UserSignIn.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "@fontsource/roboto";

const UserSignIn = () => {
  return (
    <Card className={`${styles["form-control"]}`}>
      <form>
        <h1>Sign in</h1>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <span>
          <input id="password" type="checkbox" />
          Remeber me?
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
