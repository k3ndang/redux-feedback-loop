import { useEffect, useState } from "react";
import axios from "axios";
import "../App/App.css";
import Swal from "sweetalert2";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AdminItem({ result, getResults }) {
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

  let [flagged, setFlagged] = useState("");
  //put request to flag for review to toggle
  const review = () => {
    console.log("Review ID", result.id);

    axios({
      method: "PUT",
      url: `/feedback/${result.id}`,
    })
      .then((result) => {
        getResults();
      })
      .catch((err) => {
        console.error("PUT failed", err);
      });
  };
  //END put request to flag for review to toggle
  //Delete request to delete via admin screen with prompt
  const onDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete this Feedback?",
      showDenyButton: true,
      confirmButtonText: "DELETE",
      denyButtonText: `CANCEL`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!");
        console.log("ID", { id });
        axios({
          method: "DELETE",
          url: `/feedback/${id}`,
        })
          .then((response) => {
            getResults();
          })
          .catch((err) => {
            showAlert("error Deleting feedback");
            console.log(err);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved");
      }
    });
  };
  // END Delete request to delete via admin screen with prompt
  //Returns to admin.jsx that loops and displays
  return (
    <>
      <StyledTableCell align="right">
        <button onClick={review} className="addToCartBtn">
          Flag for Review
        </button>
      </StyledTableCell>
      <StyledTableCell align="right">{result.feeling}</StyledTableCell>
      <StyledTableCell align="right">{result.understanding}</StyledTableCell>
      <StyledTableCell align="right">{result.support}</StyledTableCell>
      <StyledTableCell align="right">{result.comments}</StyledTableCell>
      <StyledTableCell align="right">
        <button onClick={() => onDelete(result.id)}>Delete</button>
      </StyledTableCell>
    </>
  );
}

export default AdminItem;
