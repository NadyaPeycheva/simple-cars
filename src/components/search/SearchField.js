import {AddBox, Close, Search } from "@mui/icons-material";
import {
  Input,
  InputAdornment,
} from "@mui/material";

import classes from './SearchField.module.css';
import { useContext, useRef } from "react";
import UserContext from "../../store/context/user-contex";
import { useDispatch } from "react-redux";
import { addCarRowActions } from "../../store/index/addCarRow-slice";
import CarContext from "../../store/context/car-context";

const SearchField = () => {
  const dispatch = useDispatch();

const {user}=useContext(UserContext);
const {filterCars}=useContext(CarContext);
const refInput=useRef();

const clickHandler=()=>{
  dispatch(addCarRowActions.toggle());
}

const onChangeHandler=(event)=>{
  filterCars(event.target.value);
}

const clearInput=()=>{
  refInput.current.value='';
  filterCars('');
}

  return (
    <div className={classes.searchContainer}>
      <h4>SIMPLE CARS</h4>
      <div className={classes.searchBox}>
      <Input onChange={onChangeHandler}
      inputRef={refInput}
      placeholder='Search'
        startAdornment={
          <InputAdornment position="start">
            <Search/>
          </InputAdornment>
        }
        endAdornment={
            <InputAdornment position="end" sx={{mr:2}}>
              <Close onClick={clearInput}/>
            </InputAdornment>
          }
      />
      {user&&<AddBox onClick={clickHandler} className={classes.icon}/>}
      
      </div>
      
      
    </div>
  );
};
export default SearchField;
