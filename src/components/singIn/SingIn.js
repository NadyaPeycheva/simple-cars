import Background from "../../pages/Background";

import { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./SingIn.module.css";

const SingIn = () => {
  let userNameInput = useRef();
  let passwordInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const username=userNameInput.current.value;
    const password=passwordInput.current.value;

    if(!username||!password) {
        return;
    }

    fetch('http://161.35.202.170:8080/users/login',{
        method: 'POST',
        body:JSON.stringify({username,password}),
        headers: {'Content-Type': 'application/json'}
    }).then((response) => {
        response.json().then((data) => {
            console.log(data);
            userNameInput='';
            passwordInput='';
        })
    })
  };

  return (
    <Background>
      <div className={classes.formSingInContainer}>
        <h4 className={classes.formSingTitle}>Sing in</h4>

        <form onSubmit={submitHandler}>
          <fieldset>
            <legend>User name *</legend>
            <input ref={userNameInput}  />
          </fieldset>

          <input type="text" placeholder="Password *" ref={passwordInput} />

          <button type="submit">SING IN</button>
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
