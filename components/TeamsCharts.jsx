import React, { Component } from "react";
import Chart from "chart.js";

class TeamsCharts extends Component {
  chartRef = React.createRef();
  componentDidMount() {
    console.log("chars-DidMount");
    this.fff();
  }
  // componentWillMount  () {
  //   console.log("chars-WillMount");
  // };
  componentDidUpdate() {
    // window.addEventListener("resize", this.fff());
    console.log("chars-DidUpdate");
    this.fff();
  }
  fff = () => {
    console.log("chars-fetching");
    const myChartRef = this.chartRef.current.getContext("2d");
    const teams = this.props.data.map((c) => {
      return c.Name;
    });
    const wins = this.props.data.map((c) => {
      return c.Wins;
    });
    const losses = this.props.data.map((c) => {
      return c.Losses;
    });
    new Chart(myChartRef, {
      // The type of chart we want to create
      type: "bar",
      data: {
        labels: [...teams],
        datasets: [
          {
            label: "Wins",
            data: [...wins],
            backgroundColor: "#C56767",
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 0.5,
          },
          {
            label: "Loses",
            data: [...losses],
            backgroundColor: "#CED8F6",
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  };
  render() {
    console.log("charts-Render");
    // console.log(this.props.data);
    return (
      <div className="TeamsCharts-wrap">
        {/* {this.props.data} */}
        {/* onresize={this.fff()} */}
        {/* <button onClick={this.fff}>see wins/loses</button> */}
        {/* mycharts */}
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
export default TeamsCharts;
