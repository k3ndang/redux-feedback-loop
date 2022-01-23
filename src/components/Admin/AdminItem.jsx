import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../App/App.css";
import Swal from "sweetalert2";

function AdminItem({ result, getResults }) {
  let [flagged, setFlagged] = useState("");

  const review = () => {
    console.log("Review ID", result.id);

    axios({
      method: "PUT",
      url: `/feedback/${result.id}`,
    })
      .then((result) => {
        what();
        getResults();
      })
      .catch((err) => {
        console.error("PUT failed", err);
      });
  };
  const what = () => {
    console.log("inside what");
    if (result.flagged === true) {
      setFlagged("true");
    } else {
      setFlagged("false");
    }
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
