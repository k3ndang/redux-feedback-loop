import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Supported() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [supported, setSupported] = useState("");

  //saves data to object on submit/dispatch and push to next page
  const saveSupportedInformation = (event) => {
    event.preventDefault();

    dispatch({
      type: "NEW_SUPPORTED",
      payload: supported,
    });

    // need to use history.push to move on to next screen
    history.push("/Comments");

    setSupported("");
  };

  return (
    <>
      <Header />
      <h2>How well are you being supported?</h2>
      <h4>pick 1-5</h4>
      <h6>1 being not good and 5 being Great</h6>
      <form onSubmit={saveSupportedInformation}>
        <input
          //limit the client to only numbers between 1 and 5 and only one character long
          onKeyPress={(event) => {
            if (!/[0-5]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          type="text"
          maxLength="1"
          value={supported}
          onChange={(evt) => setSupported(evt.target.value)}
          placeholder="Supported?"
        />

        <button className="nextBtn" type="submit">
          Next
        </button>
      </form>
    </>
  );
}

export default Supported;
