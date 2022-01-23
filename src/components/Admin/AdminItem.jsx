import { useEffect, useState } from "react";
import axios from "axios";
import "../App/App.css";
import Swal from "sweetalert2";

function AdminItem({ result, getResults }) {
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
      <td>
        <button onClick={review} className="addToCartBtn">
          Flag for Review
        </button>
      </td>
      <td>{result.feeling}</td>
      <td>{result.understanding}</td>
      <td>{result.support}</td>
      <td>{result.comments}</td>
      <td>
        <button onClick={() => onDelete(result.id)}>Delete</button>
      </td>
    </>
  );
}

export default AdminItem;
