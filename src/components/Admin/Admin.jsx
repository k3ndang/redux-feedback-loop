import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  let [resultList, setResultList] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getResults();
  }, []);

  const getResults = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        setResultList(response.data);
        console.log("result list", { resultList });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header className="Admin-header">
        <h1 className="Admin-title">Feedback Results!</h1>
      </header>
      <table>
        <tbody>
          <tr>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>

          {resultList.map((result) => (
            <tr key={result.id}>
              <td>{result.feeling}</td>
              <td>{result.understanding}</td>
              <td>{result.support}</td>
              <td>{result.comments}</td>
              <td>
                <button>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
