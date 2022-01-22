import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

function Comments() {
  const history = useHistory();

  const [comments, setComments] = useState("");

  const saveCommentsInformation = (event) => {
    event.preventDefault();
    console.log("in save Comments");

    const feedback = {
      comments: comments,
    };
    console.log("feedback", feedback.comments);

    // dispatch({
    //         type: 'NEW_CUSTOMER',
    //         payload: feedback
    // })

    // need to use history.push to move on to next screen
    history.push("/Review");

    setComments("");
  };

  return (
    <>
      <Header />
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={saveCommentsInformation}>
        <input
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
