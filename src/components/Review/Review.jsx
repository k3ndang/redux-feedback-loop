import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();
  const review = useSelector((store) => store.feedback);

  const submit = () => {
    console.log("submitted");
    history.push("/ThankYou");
  };

  return (
    <>
      <h2>Review Your Feedback</h2>
      <div>
          <h3>Feelings: {review.feeling}</h3>
          <h3>Understanding: {review.understanding}</h3>
          <h3>Support: {review.supported}</h3>
          <h3>Comments: {review.comments}</h3>
      </div>

      <button onClick={submit}>SUBMIT</button>
      <br></br>
    </>
  );
}

export default Review;
