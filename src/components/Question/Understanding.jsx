import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

function Understanding() {
  const history = useHistory();

  const [understanding, setUnderstanding] = useState("");

  //saves data to object on submit/dispatch and push to next page
  const saveUnderstandingInformation = (event) => {
    event.preventDefault();
    console.log("in save understanding");

    
    const feedback = {
      understanding: understanding,
    };
    console.log("feedback", feedback.understanding);

    // dispatch({
    //         type: 'NEW_CUSTOMER',
    //         payload: feedback
    // })

    // need to use history.push to move on to next screen
    history.push("/Supported");

    setUnderstanding("");
  };

  return (
    <>
      <Header />
      <h2>How well are you understanding the content?</h2>
      <h4>pick 1-5</h4>
      <h6>1 being not good and 5 being Great</h6>
      <form onSubmit={saveUnderstandingInformation}>
        <input
        //limit the client to only numbers between 1 and 5 and only one character long
        onKeyPress={(event) => {
            if (!/[0-5]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          type="text"
          maxLength="1"
          value={understanding}
          onChange={(evt) => setUnderstanding(evt.target.value)}
          placeholder="Understanding?"
        />

        <button className="nextBtn" type="submit">
          Next
        </button>
      </form>
    </>
  );
}

export default Understanding;
