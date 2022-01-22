import Header from "../Header/Header";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Feeling() {
  const history = useHistory();

  const [feeling, setFeeling] = useState("");

  const saveFeelingInformation = (event) => {
    event.preventDefault();
    console.log("in save customer info");

    const feedback = {
      feeling: feeling,
    };
    console.log("feedback", feedback.feeling);

    // dispatch({
    //         type: 'NEW_CUSTOMER',
    //         payload: feedback
    // })

    // need to use history.push to move on to next screen
    history.push("/Understanding");

    setFeeling("");
  };

  return (
    <>
      <Header />
      <h2>How are you feeling today?</h2>
      <h4>pick 1-5</h4>
      <h6>1 being not good and 5 being Great</h6>
      <form onSubmit={saveFeelingInformation}>
        <input
        //limit the client to only numbers between 1 and 5 and only one character long
        onKeyPress={(event) => {
            if (!/[0-5]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          type="text"
          maxLength="1"
          value={feeling}
          onChange={(evt) => setFeeling(evt.target.value)}
          placeholder="Feeling"
        />

        <button className="nextBtn" type="submit">
          Next
        </button>
      </form>
    </>
  );
}

export default Feeling;
