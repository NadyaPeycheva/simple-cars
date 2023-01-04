import { MenuItem, Select, TableCell, TableRow, TextField } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Close } from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';

const engineType = ["Diesel", "Petrol", "Oil"];
const condition = ["USED", "NEW"];
const RowInput = () => {
  return (
    <TableRow>
      <TableCell >
        <CheckIcon sx={{ fontSize: '19px' }} />
      <Close sx={{ fontSize: '19px' }}/>

          {/* <CreateIcon fontSize="medium"/>
          <DeleteOutlineIcon fontSize="medium"/> */}
      </TableCell>
      <TableCell>
        <TextField label="Make" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField label="Model" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField label="Year" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField select variant="standard">
          {engineType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField select variant="standard">
          {engineType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField select variant="standard">
          {condition.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField label="Horse Power" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField label="Color" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField label="Price $" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField select variant="standard">
          {engineType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <TextField label="Milage" variant="standard" />
      </TableCell>
      <TableCell>
        <TextField label="Extras" variant="standard" />
      </TableCell>
    </TableRow>
  );
};
export default RowInput;
