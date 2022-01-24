import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((store) => store.feedback);
  const [comments, setComments] = useState("");

  //saves data to object on submit/dispatch and push to next page
  const saveCommentsInformation = (event) => {
    event.preventDefault();

    dispatch({
      type: "NEW_COMMENTS",
      payload: comments,
    });

    // need to use history.push to move on to next screen
    history.push("/Review");

    setComments("");
  };
  // use history.push to move back to last screen
  const goBack = () => {
    history.push("/Supported");
  };

  return (
    <>
      <Header />
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={saveCommentsInformation}>
        <button onClick={goBack} className="backBtn" type="button">
          Back
        </button>
        <input className="comInput"
          type="text"
          value={comments}
          onChange={(evt) => setComments(evt.target.value)}
          placeholder="Comments?"
        />

        <button className="nextBtn" type="submit">
          Next
        </button>
      </form>
    </>
  );
}

export default Comments;
