import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ThankYou.css";

function ThankYou() {
  const dispatch = useDispatch();
  const history = useHistory();
  //dispalys thank you and brings you back to home page
  const reset = () => {
    console.log("submitted");
    history.push("/");
  };

  return (
    <>
      <header className="thank">Feedback</header>
      <body>
        <h2>Thank You!</h2>
        <button className="thankBtn" onClick={reset}>
          Leave New Feedback
        </button>
      </body>
    </>
  );
}

export default ThankYou;
