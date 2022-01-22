import { useHistory } from "react-router-dom";

function ThankYou(){
    const history = useHistory();
    
    const reset =() => {
        console.log('submitted');
        history.push("/")
    }


    return(
        <>
        <header>Feedback</header>
        <h2>Thank You!</h2>
        <button onClick={reset} >Leave New Feedback</button>
        </>
    );
}

export default  ThankYou