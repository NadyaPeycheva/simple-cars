import classes from "./Backgound.module.css";
import Container from "@mui/material/Container";

const Background = (props) => {
  return (
    <div className={classes.background}>
      <Container className={classes.mainContainer}
        components="main"
        maxWidth="xs"
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          background: "white",
        //   padding:10
        }}
      >
        {props.children}
      </Container>
    </div>
  );
};
export default Background;
