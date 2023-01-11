import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowInput from "./RowInput";

import classes from "./TableOfCatalog.module.css";
import { Box, IconButton, TableFooter, TablePagination } from "@mui/material";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import CarContext from "../../store/context/car-context";
import RowTable from "./TableRow";
import UserContext from "../../store/context/user-contex";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const TableOfCatalog = () => {
  const isVisible = useSelector((state) => state.addCar.visibleRow);

  const { cars } = useContext(CarContext);
  const { addCar } = useContext(CarContext);
  const { user } = useContext(UserContext);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            {user && <TableCell>Action</TableCell>}
            <TableCell component="th" scope="row">
              Make
            </TableCell>
            <TableCell component="th" scope="row">
              Model
            </TableCell>
            <TableCell component="th" scope="row">
              Year
            </TableCell>
            <TableCell component="th" scope="row">
              Engyne Type
            </TableCell>
            <TableCell component="th" scope="row">
              Grear Box
            </TableCell>
            <TableCell component="th" scope="row">
              Condition
            </TableCell>
            <TableCell component="th" scope="row">
              Horse Power
            </TableCell>
            <TableCell component="th" scope="row">
              Color
            </TableCell>
            <TableCell component="th" scope="row">
              Price $
            </TableCell>
            <TableCell component="th" scope="row">
              City
            </TableCell>
            <TableCell component="th" scope="row">
              Mileage
            </TableCell>
            <TableCell component="th" scope="row">
              Extras
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cars.length === 0 && (
            <TableRow>
              <TableCell sx={{ textAlign: "center" }} colSpan="13">
                No reqorsd to deploy
              </TableCell>
            </TableRow>
          )}

          {(rowsPerPage > 0
            ? cars.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : cars
          ).map((car) => (
            <RowTable key={car.id} carUser={car.user} car={car} />
          ))}

          {isVisible && (
            <RowInput
              request={addCar}
              defaultValues={{
                make: "",
                model: "",
                year: "",
                engyneType: "",
                gearBox: "",
                condition: "",
                horsePower: "",
                color: "",
                price: "",
                city: "",
                mileage: "",
                extras: "",
              }}
            />
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={13}
              count={cars.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
export default TableOfCatalog;
