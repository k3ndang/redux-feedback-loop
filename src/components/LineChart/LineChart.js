import React, { Component, useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from "axios";

const LineChart = () => {

  // set all state to empty array
  const [date, setDate] = useState([]);
  const [feelingData, setFeelingData] = useState([]);
  const [understandData, setUnderstandData] = useState([]);
  const [supportData, setSupportData] = useState([]);

  // when page load run this
  useEffect(() => {
    // all variables to empty array
    const feeling = [];
    const understand = [];
    const support = [];
    const date = []

    // this axios get the data from database
    axios.get('/feedback')
      .then(response => {
        console.log('response data:', response.data)
        // got the response data back
        // map it out
        // add the corresponding data to the variable by pushing it
        response.data.map(data => {
          feeling.push(data.feeling);
          understand.push(data.understanding);
          support.push(data.support);
          date.push(data.date)
          
        })
        // add the data to the corresponding state
        setDate(date)
        setFeelingData(feeling);
        setUnderstandData(understand);
        setSupportData(support)
      })
  }, []);

  return (
    <>
    <Chart 

    // this options are how the chart look
    // you also set your x-axis data into here
      options = {{
        chart: {
          id: 'woodallSurey',
          stacked: false,
        },
        xaxis: {
          categories: date
        },
        title: {
          text: 'Woodall Survey',
          align: 'center'
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]}
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          max: 6
        }
      }}
      
      // putting the data into the series
      series = {[{
        name: 'Feeling',
        data: feelingData
      },
      {
        name: 'Understand',
        data: understandData
      },
      {
        name: 'Understand',
        data: supportData
      }
      ]}

      type='bar'
      width= '100%'
      height={300}
    />
    </>
  )
}

export default LineChart;