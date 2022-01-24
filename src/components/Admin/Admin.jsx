import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App/App.css";
import AdminItem from "./AdminItem";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../ThankYou/ThankYou.css";

function Admin() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  let [resultList, setResultList] = useState([]);
  let [markReviewed, setMarkReviewed] = useState("Mark for Review?");

  useEffect(() => {
    console.log("in useEffect");
    getResults();
  }, []);

  //Get request that gets  all data from the feedback DB
  // then sets resultList to response
  const getResults = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        setResultList(response.data);
        console.log("result list", { resultList });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //loops through and displays content to admin page
  return (
    <>
      <header className="Admin-header">
        <h1 className="Admin-title">Feedback Results!</h1>
      </header>
      <body>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Flag for Review</StyledTableCell>
                <StyledTableCell align="right">Feeling</StyledTableCell>
                <StyledTableCell align="right">
                  Comprehension&nbsp;
                </StyledTableCell>
                <StyledTableCell align="right">Support&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Comments&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultList.map((result) => (
                //sets id based on if true or false to set background color
                //of false to red
                <StyledTableRow id={result.flagged.toString()} key={result.id}>
                  <AdminItem
                    key={result.id}
                    result={result}
                    getResults={getResults}
                  />
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </body>
    </>
  );
}

export default Admin;
