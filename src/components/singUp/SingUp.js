import classes from "./SingUp.module.css";

import { Link } from "react-router-dom";
import { useRef } from "react";
import Background from "../../pages/Background";

const SingUp = () => {
  let firstNameInput = useRef();
  let lastNameInput = useRef();
  let userNameInput = useRef();
  let passwordInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const firstName = firstNameInput.current.value;
    const lastName = lastNameInput.current.value;
    const username = userNameInput.current.value;
    const password = passwordInput.current.value;

    if (!firstName || !lastName || !username || !password || password.length <= 4) {
      console.log('doesnt work');
      return;
    }

    fetch("http://161.35.202.170:8080/users/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // console.log(res);

      firstNameInput='';
      lastNameInput='';
      userNameInput='';
      passwordInput='';
    
    });
  };

  return (
    <Background>
    <div className={classes.formContainer}>
      <h4 className={classes.formTitle}>Sing up</h4>

      <form onSubmit={submitHandler}>
        <div className={classes.namesContainer}>
        <input type="text" placeholder="First name *" ref={firstNameInput} />
        <input type="text" placeholder="Last name *" ref={lastNameInput} />
        </div>
        <fieldset>
          <legend>User name *</legend>
          <input ref={userNameInput} />
        </fieldset>

        <input type="text" placeholder="Password *" ref={passwordInput} />

        <button type="submit">SING UP</button>
      </form>
      <Link to="singIn" className={classes.link}>
        Already have an account? Sing in
      </Link>
      <footer>
        <p>Copyright &copy; Simple Cars2012</p>
      </footer>
    </div>
    </Background>
  );
};
export default SingUp;
