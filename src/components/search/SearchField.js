import {AddBox, Close, Search } from "@mui/icons-material";
import {
  Input,
  InputAdornment,
} from "@mui/material";

import classes from './SearchField.module.css';
import { useContext } from "react";
import UserContext from "../../store/context/user-contex";
import { useDispatch } from "react-redux";
import { addCarRowActions } from "../../store/index/addCarRow-slice";

const SearchField = () => {
  const dispatch = useDispatch();
const {user}=useContext(UserContext);

const clickHandler=()=>{
  dispatch(addCarRowActions.toggle());
}

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
      {user&&<AddBox onClick={clickHandler} className={classes.icon}/>}
      
      </div>
      
      
    </div>
  );
};
export default SearchField;
