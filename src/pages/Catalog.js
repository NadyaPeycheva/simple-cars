import { useHistory } from "react-router-dom";
import { Fragment } from "react";

import TableOfCatalog from "../components/table/TableOfCatalog";

import classes from "./Catalog.module.css";
import SearchField from "../components/search/SearchField";
import { useContext } from "react";
import UserContext from "../store/context/user-contex";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

const Catalog = () => {
const {user} = useContext(UserContext);

  const history = useHistory();

  const clickHandler = () => {
    history.push("/singIn");
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
        <DirectionsCarFilledIcon fontSize="large"/>
        </div>
        {!user&&<button onClick={clickHandler}>LOGIN</button>}
      </header>
      <SearchField/>
      <TableOfCatalog />
    </Fragment>
  );
};
export default Catalog;
