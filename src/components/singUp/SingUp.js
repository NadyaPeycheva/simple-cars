import classes from "./SingUp.module.css";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Background from "../../assets/Background";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const initialStateErrors = {
  firstName: false,
  lastName: false,
  username: false,
  password: false,
};
const initialUserData={
  firstName:'',lastName:'',username:'',password:'',
}

const SingUp = () => {
  const history = useHistory();

  const [userData,setUserData]=useState(initialUserData)

  const [haveErrors, setHaveErrors] = useState(initialStateErrors);

  const userDataHandler = (event) => {
    const key=event.target.name;
    const value=event.target.value;
    let newProp={}
    newProp[key]=value;
    let newError={};
    setUserData((state)=>{return {...state,...newProp}})
   
    if (event.target.value.length === 0) {
      newError[key]=true;
      setHaveErrors((state) => {
        return { ...state,...newError  };
      });
    } else {
      setHaveErrors((state) => {
        newError[key]=false;
        return { ...state, ...newError };
      });
    }
  };


  const submitHandler = (event) => {
    event.preventDefault();

    
    fetch("http://161.35.202.170:8080/users/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const response = res.status;
      if (response === 500) {
        setHaveErrors((state) => {
          return { ...state, username: true };
        });
        return;
      } else if (response === 200) {
   setUserData(initialUserData);
        setHaveErrors(initialStateErrors);
        history.push("/singIn");
      }
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
          Sing up
        </Typography>
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                value={userData.firstName}
                type="text"
                name="firstName"
                required
                fullWidth
                label="First Name"
                autoFocus
                error={haveErrors.firstName}
                onChange={userDataHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userData.lastName}
                id="lastName"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={userDataHandler}
                error={haveErrors.lastName}
              />
            </Grid>
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
          >
            Sing Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/singIn" variant="body2" className={classes.link}>
                Already have an account? Sing in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <footer className={classes.footer}>
        <p>Copyright &copy; Simple Cars2012</p>
      </footer>
    </Background>
  );
};
export default SingUp;
