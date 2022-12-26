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

const SingUp = () => {
const history=useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [haveErrors, setHaveErrors] = useState(initialStateErrors);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
    if (event.target.value.length === 0) {
      setHaveErrors((state) => {
        return { ...state, firstName: true };
      });
    } else {
      setHaveErrors((state) => {
        return { ...state, firstName: false };
      });
    }
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
    if (event.target.value.length === 0) {
      setHaveErrors((state) => {
        return { ...state, lastName: true };
      });
    } else {
      setHaveErrors((state) => {
        return { ...state, lastName: false };
      });
    }
  };

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
      const response = res.status;
      if (response === 500) {
        setHaveErrors((state) => {
          return { ...state, username: true };
        });
        return;
      }else if(response === 200){
history.push('/singIn')
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
                value={firstName}
                type="text"
                name="firstName"
                required
                fullWidth
                label="First Name"
                autoFocus
                error={haveErrors.firstName}
                onChange={firstNameHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                id="lastName"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={lastNameHandler}
                error={haveErrors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
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
