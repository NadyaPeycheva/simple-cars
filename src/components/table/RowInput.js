import { MenuItem, TableCell, TableRow, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { useRef } from "react";
import { useContext } from "react";
import UserContext from "../../store/context/user-contex";

const engineTypes = ["DIESEL", "PETROL", "OIL"];
const conditions = ["USED", "NEW"];
const cities = ["Sofia", "Gotce Delchev", "Varna"];
const gearBox = ["AUTOMATIC", "MANUAL"];

const RowInput = ({ request, defaultValues,carId,changeModel }) => {
  const { user } = useContext(UserContext);

  let makeRef = useRef();
  let modelRef = useRef();
  let yearRef = useRef();
  let engineTypeRef = useRef();
  let gearBoxRef = useRef();
  let conditionRef = useRef();
  let horsePowerRef = useRef();
  let colorRef = useRef();
  let priceRef = useRef();
  let cityRef = useRef();
  let mileageRef = useRef();
  let extrasRef = useRef();

  const getInputData = () => {
    const make = makeRef.current.value;
    const model = modelRef.current.value;
    const year = Number(yearRef.current.value);
    const engineType = engineTypeRef.current.value;
    const gearBox = gearBoxRef.current.value;
    const condition = conditionRef.current.value;
    const horsePower = Number(horsePowerRef.current.value);
    const color = colorRef.current.value;
    const price = Number(priceRef.current.value);
    const city = cityRef.current.value;
    const mileage = Number(mileageRef.current.value);
    const extras = extrasRef.current.value;

    const car = {
      "id": carId||user.id,
      "make": make,
      "model": model,
      "year": year,
      "engineType": engineType,
      "gearBox": gearBox,
      "condition": condition,
      "horsePower": horsePower,
      "color": color,
      "price": price,
      "city": city,
      "mileage": mileage,
      "user": {
        "id": user.id,
        "username": user.username,
        "password": user.password,
        "firstName": user.firstName,
        "lastName": user.lastName,
      },
      "extras": extras
    };
    const userData = { token: user.token, id: user.id };

    request(car, userData);
    cleatInputData();
  };

  const cleatInputData = () => {
    makeRef.current.value = "";
    modelRef.current.value = "";
    yearRef.current.value = "";
    engineTypeRef.current.value = "";
    gearBoxRef.current.value = "";
    conditionRef.current.value = "";
    horsePowerRef.current.value = "";
    colorRef.current.value = "";
    priceRef.current.value = "";
    cityRef.current.value = "";
    mileageRef.current.value = "";
    extrasRef.current.value = "";
    changeModel();
  };

  return (
    <TableRow>
      <TableCell>
        <CheckIcon onClick={getInputData} sx={{ fontSize: "19px" }} />
        <Close onClick={cleatInputData} sx={{ fontSize: "19px" }} />
      </TableCell>
      <TableCell>
        <TextField
          label="Make"
          defaultValue={defaultValues.make}
          variant="standard"
          inputRef={makeRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Model"
          defaultValue={defaultValues.model}
          variant="standard"
          inputRef={modelRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Year"
          defaultValue={defaultValues.year}
          variant="standard"
          inputRef={yearRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          defaultValue={defaultValues.engineType}
          inputRef={engineTypeRef}
        >
          {engineTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          defaultValue={defaultValues.gearBox}
          inputRef={gearBoxRef}
        >
          {gearBox.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          select
          defaultValue={defaultValues.condition}
          variant="standard"
          inputRef={conditionRef}
        >
          {conditions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          defaultValue={defaultValues.horsePower}
          label="Horse Power"
          variant="standard"
          inputRef={horsePowerRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Color"
          defaultValue={defaultValues.color}
          variant="standard"
          inputRef={colorRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Price $"
          variant="standard"
          defaultValue={defaultValues.price}
          inputRef={priceRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="standard"
          defaultValue={defaultValues.city}
          inputRef={cityRef}
        >
          {cities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          label="Mileage"
          defaultValue={defaultValues.mileage}
          variant="standard"
          inputRef={mileageRef}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="Extras"
          variant="standard"
          defaultValue={defaultValues.extras}
          inputRef={extrasRef}
        />
      </TableCell>
    </TableRow>
  );
};
export default RowInput;
