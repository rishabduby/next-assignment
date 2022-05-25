import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Slider,
  TableRow,
  CssBaseline,
  Container,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
// import { TextField } from "@mui/material/TextField";

function createData(id, name, amount, date) {
  return { id, name, amount, date };
}

// All records.
const rows = [
  createData(1, "Cupcake", 305, "2020-10-12"),
  createData(2, "Donut", 452, "2020-10-13"),
  createData(3, "Eclair", 262, "2020-10-14"),
  createData(4, "Frozen yoghurt", 159, "2020-10-15"),
  createData(5, "Gingerbread", 356, "2020-10-16"),
  createData(6, "Honeycomb", 408, "2020-10-17"),
  createData(7, "Ice cream sandwich", 237, "2020-10-18"),
  createData(8, "Jelly Bean", 375, "2020-10-19"),
  createData(9, "KitKat", 518, "2020-10-20"),
  createData(10, "Lollipop", 392, "2020-10-21"),
  createData(11, "Marshmallow", 318, "2020-10-22"),
  createData(12, "Nougat", 360, "2020-10-23"),
  createData(13, "Oreo", 437, "2020-10-24"),
];

function valuetext(value) {
  return `${value}`;
}

const TableFilter = () => {
  // const { rows } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState(rows);
  // const [sortdata, setSortdata] = useState(rows);
  // const [sliderValue, setSliderValue] = useState(10);
  const [value, setValue] = useState([100, 300]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  // Filter the text box  by latter and name
  const filterNameData = (event, i) => {
    let array = rows;
    let string = event?.target?.value;
    let newArray = array?.filter((o) =>
      Object?.keys(o)?.some((k) =>
        o[k]?.toString()?.toLowerCase()?.includes(string?.toLowerCase())
      )
    );
    setData(newArray);
  };

  // getting 10 rows per page
  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event?.target?.value, 10));
  };

  // filter range by amount
  const RangeSlider = () => {
    const handleChange = (event, newValue) => {
      setValue(newValue);
      let filterData = [];
      rows?.map((row, index) => {
        if (row?.amount > newValue[0] && row?.amount < newValue[1]) {
          filterData?.push(row);
        }
      });
      setData(filterData);
    };

    return (
      <div>
        <Typography id="range-slider" gutterBottom>
          <span>
            Amount Filter<span>(&#8377;)</span>
          </span>
        </Typography>
        <Slider
          value={value}
          min={100}
          max={1000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          color="secondary"
        />
      </div>
    );
  };

  // when want to set default value of from date and to date open this block of code
  // useEffect(() => {
  //   filterDateFrom("2020-10-20");
  //   filterDateTo("2020-10-24");
  // }, ["1"]);

  //filter from
  const filterDateFrom = (value) => {
    var myDate = value;
    myDate = myDate?.split("-");
    var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
    setFrom(newDate?.getTime());
  };

  // filter to
  const filterDateTo = (value) => {
    var myDate = value;
    myDate = myDate?.split("-");
    var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
    setTo(newDate?.getTime());
  };

  // convert into timestamp and checking between condtion of date
  const getDiff = (from, to) => {
    let filterData = [];
    rows?.map((row, index) => {
      var myDate = row?.date;
      myDate = myDate?.split("-");
      var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
      if (newDate?.getTime() >= from && newDate?.getTime() <= to) {
        filterData?.push(row);
      }
    });
    setData(filterData);
  };

  const emptyRows =
    rowsPerPage - Math?.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ marginTop: "20px" }}>
        <div>
          <Paper>
            <TableContainer>
              <Table
                aria-labelledby="tableTitle"
                size={"small"}
                aria-label="enhanced table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <TextField
                        type="search"
                        size="small"
                        // variant="outlined"
                        onChange={(event) => filterNameData(event)}
                        placeholder="search"
                      />
                    </TableCell>
                    <TableCell>{RangeSlider()}</TableCell>
                    <TableCell>
                      <form noValidate>
                        <TextField
                          id="date"
                          label="From"
                          type="date"
                          // defaultValue="2020-10-20"
                          onChange={(event) =>
                            filterDateFrom(event.target.value)
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        <span></span>
                        <TextField
                          id="date"
                          label="To"
                          type="date"
                          // defaultValue="2020-10-24"
                          onChange={(event) => filterDateTo(event.target.value)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* {console.log("from, to", from, to)} */}
                        <Button
                          style={{ marginTop: "15px", marginLeft: "10px" }}
                          onClick={(event) => getDiff(from, to)}
                          variant="contained"
                          color="secondary"
                          size="small"
                          disabled={from !== 0 && to !== 0 ? false : true}
                        >
                          Filter Date
                        </Button>
                      </form>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{row?.id}</TableCell>
                          <TableCell>{row?.name}</TableCell>
                          <TableCell>{row?.amount}</TableCell>
                          <TableCell>{row?.date}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 33 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
            />
          </Paper>
        </div>
      </Container>
    </React.Fragment>
  );
};

// export async function getInitialProps() {
//   // Fetch data from external API
//   // const res = await fetch(`https://.../data`)
//   // const data = await res.json()

//   const rows = [
//     createData(1, "Cupcake", 305, "2020-10-12"),
//     createData(2, "Donut", 452, "2020-10-13"),
//     createData(3, "Eclair", 262, "2020-10-14"),
//     createData(4, "Frozen yoghurt", 159, "2020-10-15"),
//     createData(5, "Gingerbread", 356, "2020-10-16"),
//     createData(6, "Honeycomb", 408, "2020-10-17"),
//     createData(7, "Ice cream sandwich", 237, "2020-10-18"),
//     createData(8, "Jelly Bean", 375, "2020-10-19"),
//     createData(9, "KitKat", 518, "2020-10-20"),
//     createData(10, "Lollipop", 392, "2020-10-21"),
//     createData(11, "Marshmallow", 318, "2020-10-22"),
//     createData(12, "Nougat", 360, "2020-10-23"),
//     createData(13, "Oreo", 437, "2020-10-24"),
//   ];

//   // Pass data to the page via props
//   return { props: { rows } };
// }

export default TableFilter;
