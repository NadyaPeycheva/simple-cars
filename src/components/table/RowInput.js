import {
  MenuItem,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Close } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { useRef } from "react";
import { useContext } from "react";
import UserContext from "../../store/context/user-contex";

const engineTypes = ["DIESEL", "PETROL", "OIL"];
const conditions = ["USED", "NEW"];
const cities = ["Sofia", "Gotce Delchev", "Varna"];
const grearBox = ["AUTOMATIC", "MANUAL"];

const RowInput = () => {
const {user}=useContext(UserContext);

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
    const horsePower =Number(horsePowerRef.current.value) ;
    const color = colorRef.current.value;
    const price =Number(priceRef.current.value) ;
    const city = cityRef.current.value;
    const mileage =Number(mileageRef.current.value) ;
    const extras = extrasRef.current.value;
    
    fetch('http://161.35.202.170:8080/cars',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${user.token}`,
      },
      body:JSON.stringify({
        "id": user.id,
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
          "firstName":user.firstName,
          "lastName": user.lastName,
        },
        "extras": extras
      })
    }).then((res)=>{
      if(res.status===200){
        cleatInputData();
      }
    })
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
  };

  return (
    <TableRow>
      <TableCell>
        <CheckIcon onClick={getInputData} sx={{ fontSize: "19px" }} />
        <Close onClick={cleatInputData} sx={{ fontSize: "19px" }} />
      </TableCell>
      <TableCell>
        <TextField label="Make" variant="standard" inputRef={makeRef} />
      </TableCell>
      <TableCell>
        <TextField label="Model" variant="standard" inputRef={modelRef} />
      </TableCell>
      <TableCell>
        <TextField label="Year" variant="standard" inputRef={yearRef} />
      </TableCell>
      <TableCell>
        <TextField select variant="standard" inputRef={engineTypeRef}>
          {engineTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField select variant="standard" inputRef={gearBoxRef}>
          {grearBox.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField select variant="standard" inputRef={conditionRef}>
          {conditions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField
          label="Horse Power"
          variant="standard"
          inputRef={horsePowerRef}
        />
      </TableCell>
      <TableCell>
        <TextField label="Color" variant="standard" inputRef={colorRef} />
      </TableCell>
      <TableCell>
        <TextField label="Price $" variant="standard" inputRef={priceRef} />
      </TableCell>
      <TableCell>
        <TextField select variant="standard" inputRef={cityRef}>
          {cities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField label="Mileage" variant="standard" inputRef={mileageRef} />
      </TableCell>
      <TableCell>
        <TextField label="Extras" variant="standard" inputRef={extrasRef} />
      </TableCell>
    </TableRow>
  );
};
export default RowInput;
