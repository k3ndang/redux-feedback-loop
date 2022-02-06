// import React, { Component, useState, useEffect } from 'react';
// import Chart from "react-apexcharts";
// import axios from "axios";





// class LineChart extends Component {
//   useEffect(() => {
//     axios.get('/feedback')
//       .then(response => {
//         console.log('response:', response.data);
//       })
//   }, []);

//   constructor(props) {
//     super(props);
//     this.state = {
//       options: {
//         chart: {
//           background: '#f4f4f4',
//           foreColor: '#333'
//         },
//         xaxis: {
//           categories: [
//             "week-1",
//             "week-2",
//             "week-3",
//             "week-4",
//             "week-5",
//             "week-6",
//           ]
//         }, // end of xaxis
//         plotOptions: {
//           bar: {
//             horizontal: false
//           }
//         }, // end od plotOptions
//         fill: {
//           colors: ['#f44336']
//         }, // end of fill
//         dataLabels: {
//           enabled: false
//         }, // end of dataLabels
//         title: {
//           text: 'Woodall Survey',
//           align: 'center',
//           margin: 20,
//           offsetY: 20,
//           style: {
//             fontSize: '20px'
//           }
//         } // end of title
//       }, // end of option
//       // how to put axios data
//       series: [{
//         name: 'Survey Data',
//         data: [
//           1,
//           5,
//           6,
//           2,
//           4,
//           4,
//         ]
//       }] // end of series

//     }// end this.state
//   } // end of constructor



//     render() {
//       return (
//         <>
//         <Chart
//           options={this.state.options}
//           series={this.state.series}
//           type='line'
//           height="450"
//           width="60%"
//         />
//         </>
//       )
//     } // end of render
// } // end of LineChart
