import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconCheckboxes from "../IconCheckboxes/IconCheckboxes";

function Admin() {
  let [resultList, setResultList] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getResults();
  }, []);

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

  const onDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete this Feedback?",
      showDenyButton: true,
      confirmButtonText: "DELETE",
      denyButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
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

  const review = (check) => {
    console.log("Review", check);
  };

  return (
    <>
      <header className="Admin-header">
        <h1 className="Admin-title">Feedback Results!</h1>
      </header>
      <table>
        <tbody>
          <tr>
            <th>Review</th>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>

          {resultList.map((result) => (
            <tr key={result.id}>
              <td onClick={() => review(result.id)}>
                <IconCheckboxes />
              </td>
              <td>{result.feeling}</td>
              <td>{result.understanding}</td>
              <td>{result.support}</td>
              <td>{result.comments}</td>
              <td>
                <button onClick={() => onDelete(result.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
