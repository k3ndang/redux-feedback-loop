import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = () => {
    console.log("submitted");
    history.push("/ThankYou");
  };

  return (
    <>
      <h2>Review Your Feedback</h2>

      <button onClick={submit}>NEXT</button>
      <br></br>
    </>
  );
}

export default Review;
