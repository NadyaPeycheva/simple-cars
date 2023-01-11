import image from "../resorces/images/depositphotos_124010534-stock-illustration-car-logo-auto-symbol-and.jpg";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logoContainer}>
      <div className={classes.imageContainer}>
        <img src={image} alt="car" />
      </div>
      <div className={classes.logoContent}>
      <span className={classes.leftSpan}></span>
      <p className={classes.logoText}>simple cars</p>
      <span className={classes.rightSpan}></span>

      </div>
      
    </div>
  );
};
export default Logo;
