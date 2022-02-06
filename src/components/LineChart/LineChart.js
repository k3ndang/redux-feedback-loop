import React, { Component, useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from "axios";

const LineChart = () => {
  // set all the 
  const [date, setDate] = useState([]);
  const [feelingData, setFeelingData] = useState([]);
  const [understandData, setUnderstandData] = useState([]);
  const [supportData, setSupportData] = useState([]);

  useEffect(() => {
    const feeling = [];
    const understand = [];
    const support = [];
    const date = []

    axios.get('/feedback')
      .then(response => {
        console.log('response data:', response.data)

        response.data.map(data => {
          console.log('data is', data.feeling);
          feeling.push(data.feeling);
          understand.push(data.understanding);
          support.push(data.support);
          date.push(data.date)
          
        })
        setDate(date)
        setFeelingData(feeling);
        setUnderstandData(understand);
        setSupportData(support)
      })
  }, []);

  return (
    <>
    <Chart 
      options = {{
        chart: {
          id: 'Woodall Survey'
        },
        xaxis: {
          categories: date
        }
      }}

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

      type='line'
      width= '80%'
      height={300}
    />
    </>
  )
}

export default LineChart;