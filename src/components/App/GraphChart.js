import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';


function GraphChart() {

  const dispatch = useDispatch();
  let [resultList, setResultList] = useState([]);
  console.log('resultList is:', resultList);

  useEffect (() => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        setResultList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

  
  const series = [
    {
      name: "feeling", //will be displayed on the y-axis
      data: {resultList.map((feeling) => (
        
      ))}
    }
  ];
  const options = {
    chart: {
      id: "simple-bar"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
  };
  return (
    <div>
      <Chart options={options} type="line" series={series} width="60%" />
    </div>
  );
}
  
  export default GraphChart;