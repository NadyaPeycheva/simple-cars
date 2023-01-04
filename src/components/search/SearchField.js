import {AddBox, Close, Search } from "@mui/icons-material";
import {
  Input,
  InputAdornment,
} from "@mui/material";

import classes from './SearchField.module.css';
import { useContext } from "react";
import UserContext from "../../store/context/user-contex";

const SearchField = () => {
const {user}=useContext(UserContext);
console.log(user);

  return (
    <div className={classes.searchContainer}>
      <h4>SIMPLE CARS</h4>
      <div className={classes.searchBox}>
      <Input
      placeholder='Search'
        startAdornment={
          <InputAdornment position="start">
            <Search/>
          </InputAdornment>
        }
        endAdornment={
            <InputAdornment position="end" sx={{mr:2}}>
              <Close/>
            </InputAdornment>
          }
      />
      {user&&<AddBox className={classes.icon}/>}
      
      </div>
      
      
    </div>
  );
};
export default SearchField;
