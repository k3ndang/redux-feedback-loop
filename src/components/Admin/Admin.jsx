import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App/App.css";
import AdminItem from "./AdminItem";

function Admin() {
  let [resultList, setResultList] = useState([]);
  let [markReviewed, setMarkReviewed] = useState("Mark for Review?");

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
            <th>Flag for Review</th>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>

          {resultList.map((result) => (
            <tr className= {result.flagged.toString()}  key={result.id}>
              <AdminItem
                key={result.id}
                result={result}
                getResults={getResults}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
