import Background from "../../assets/Background";

import { Link, useHistory } from "react-router-dom";

import classes from "./SingIn.module.css";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import UserContext from "../../store/context/user-contex";
import Logo from "../../assets/Logo";
import  postRequest  from "../../api/postRequest";

const initialStateErrors = {
  username: false,
  password: false,
};
const initialUserData = { username: "", password: "" };

const SingIn = () => {
  const history = useHistory();
  const { logIn } = useContext(UserContext);

  const [disabledButton, setDisabledButton] = useState(false);
  const [userData, setUserData] = useState(initialUserData);
  const [haveErrors, setHaveErrors] = useState(initialStateErrors);

  const userDataHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    let newProp = {};
    newProp[key] = value;
    let newError = {};

    setUserData((state) => {
      return { ...state, ...newProp };
    });
    if (event.target.value.length === 0) {
      newError[key] = true;
      setHaveErrors((state) => {
        return { ...state, ...newError };
      });
      setDisabledButton(true);
    } else {
      setHaveErrors((state) => {
        newError[key] = false;
        return { ...state, ...newError };
      });
      setDisabledButton(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    postRequest('users/login',userData).then((response) => {
      const token=response.jwtToken;
      const userData = response.user;
      logIn(token,userData);
      history.replace('/catalog')
    });
    
    
  };

  return (
    <Background>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sing In
        </Typography>
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="username"
                label="Username"
                value={userData.username}
                onChange={userDataHandler}
                error={haveErrors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={userData.password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={userDataHandler}
                error={haveErrors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: "#0F238C" }}
            disabled={disabledButton}
          >
            Sing In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/singUp" variant="body2" className={classes.link}>
                <div className={classes.textContent}>
                  <p>Don't have an acount ?</p>
                  <p>Continue to creating</p>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <footer className={classes.footer}>
        <Logo />
        <p>Copyright &copy; Simple Cars2012</p>
      </footer>
    </Background>
  );
};
export default SingIn;
