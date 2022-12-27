import Background from "../../assets/Background";

import { Link, useHistory } from "react-router-dom";

import classes from "./SingIn.module.css";
import { Box, Button, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
const initialStateErrors = {
  username: false,
  password: false,
};

const SingIn = () => {
const history=useHistory();

const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const [haveErrors, setHaveErrors] = useState(initialStateErrors);


const usernameHandler = (event) => {
  setUsername(event.target.value);
  if (event.target.value.length === 0) {
    setHaveErrors((state) => {
      return { ...state, username: true };
    });
  } else {
    setHaveErrors((state) => {
      return { ...state, username: false };
    });
  }
};

const passwordHandler = (event) => {
  setPassword(event.target.value);
  if (event.target.value.length === 0) {
    setHaveErrors((state) => {
      return { ...state, password: true };
    });
  } else {
    setHaveErrors((state) => {
      return { ...state, password: false };
    });
  }
};

  const submitHandler = (event) => {
    event.preventDefault();

    fetch("http://161.35.202.170:8080/users/login", {
      method: "POST",
      body: JSON.stringify({username,password}),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      const response = res.status;
      if (response === 500) {
        setHaveErrors((state) => {
          return { ...state, username: true };
        });
        return;
      } else if (response === 200) {
        res.json().then((data) => {
        console.log(data);
        });
        setUsername("");
        setPassword("");
        setHaveErrors(initialStateErrors);
        history.push("/catalog");
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
          Sing In
        </Typography>
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                name="userName"
                label="Username"
                value={username}
                onChange={usernameHandler}
                error={haveErrors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={passwordHandler}
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
        <p>Copyright &copy; Simple Cars2012</p>
      </footer>
    </Background>
  );
};
export default SingIn;
