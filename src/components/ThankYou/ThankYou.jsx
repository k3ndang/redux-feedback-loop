import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ThankYou() {
  const dispatch = useDispatch();
  const history = useHistory();

  const reset = () => {
    console.log("submitted");
    history.push("/");
  };

  return (
    <>
      <header>Feedback</header>
      <h2>Thank You!</h2>
      <button onClick={reset}>Leave New Feedback</button>
    </>
  );
}

export default ThankYou;
