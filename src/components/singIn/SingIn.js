import Background from "../../pages/Background";

import { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./SingIn.module.css";

const SingIn = () => {
  let userNameInput = useRef();
  let passwordInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Background>
      <div className={classes.formSingInContainer}>
        <h4 className={classes.formSingTitle}>Sing ip</h4>

        <form onSubmit={submitHandler}>
          <fieldset>
            <legend>User name *</legend>
            <input ref={userNameInput} placeholder='password' />
          </fieldset>

          <input type="text" placeholder="Password *" ref={passwordInput} />

          <button type="submit">SING UP</button>
        </form>
        <Link to="catalog" className={classes.link}>
          <p>Don't have an account ?</p> <p>Continue to catalog</p>
        </Link>
        <footer>
          <p>Copyright &copy; Simple Cars2012</p>
        </footer>
      </div>
    </Background>
  );
};
export default SingIn;
