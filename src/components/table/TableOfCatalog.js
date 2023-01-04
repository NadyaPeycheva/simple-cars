

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowInput from "./RowInput";

import classes from "./TableOfCatalog.module.css";
import { TableFooter, TablePagination } from '@mui/material';
import { useSelector } from "react-redux";
import { useContext } from 'react';
import CarContext from '../../store/context/car-context';
import RowTable from './TableRow';

const TableOfCatalog = () => {
    const isVisible=useSelector((state)=>state.addCar.visibleRow);

    const {cars}=useContext(CarContext);

  return (
 
    <TableContainer component={Paper}>
        <Table sx={{minWidth:650}} aria-label="simple table">
            <TableHead>
                <TableRow className={classes.tableRow}>
                    <TableCell>Action</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Engyne Type</TableCell>
                    <TableCell>Grear Box</TableCell>
                    <TableCell>Condition</TableCell>
                    <TableCell>Horse Power</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Price $</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Mileage</TableCell>
                    <TableCell>Extras</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {cars&&cars.map((car)=>((<RowTable key={car.id} car={car}/>)))}
            {cars.length===0&&<p>No reqorsd to deploy</p>}
            {isVisible&&<RowInput/>}
            </TableBody>
            
            {/* <TableFooter>
                <TableRow>
                    <TablePagination/>
                </TableRow>
            </TableFooter> */}
        </Table>
    </TableContainer>
  );
};
export default TableOfCatalog;
