import { TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import classes from "./TableRow.module.css";

import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useContext, useState } from "react";
import UserContext from "../../store/context/user-contex";
import CarContext from "../../store/context/car-context";
import ChangeRow from "./ChangeRow";

const RowTable = (props) => {
  const [modal, setModal] = useState(false);
  const { user } = useContext(UserContext);
  const { deleteCar } = useContext(CarContext);
  const {
    id,
    make,
    model,
    year,
    engineType,
    gearBox,
    condition,
    horsePower,
    color,
    price,
    city,
    mileage,
    extras,
  } = props.car;
  const { id: carId } = props.car;

  const carUserId=props.carUser.id;

  const deleteCarHandler = () => {
    deleteCar(carId, user.id, user.token);
  };

  const changeModalHandler = () => {
      setModal((state) => !state);
    
  };

  return (
    <>
      <TableRow className={classes.tRow}>
        {user.id===carUserId && (
          <TableCell>
            <CreateIcon
              onClick={changeModalHandler}
              sx={{ fontSize: "19px", color: "black" }}
            />
            <DeleteOutlineIcon
              onClick={deleteCarHandler}
              sx={{ fontSize: "19px", color: "black" }}
            />
          </TableCell>
        )}
        <TableCell>{make}</TableCell>
        <TableCell>{model}</TableCell>
        <TableCell>{year}</TableCell>
        <TableCell>{engineType}</TableCell>
        <TableCell>{gearBox}</TableCell>
        <TableCell>{condition}</TableCell>
        <TableCell>{horsePower}</TableCell>
        <TableCell>{color}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell>{mileage}</TableCell>
        <TableCell>{extras}</TableCell>
      </TableRow>
      {modal && (
        <ChangeRow
          changeModal={changeModalHandler}
          carId={id}
          defaultValues={{
            make,
            model,
            year,
            engineType,
            gearBox,
            condition,
            horsePower,
            color,
            price,
            city,
            mileage,
            extras,
          }}
        />
      )}
    </>
  );
};

export default RowTable;
