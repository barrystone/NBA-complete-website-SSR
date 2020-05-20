import React from "react";
import styled, { keyframes } from "styled-components";
// import CircleRecord from "./TeamPage-Components";

const TeamPage = ({ data }) => {
  const stats = data;
  const CircleRecordDrawing = keyframes`
    0% {
      stroke-dashoffset: 100;     
    }
    `;
  let CircleRecord = styled.div`
    .CircleRecordWin {
      height: 100px;
      width: 100px;
      background-color: #81daf5;
      svg {
        background-color: red;
        border: 1px black solid;
        circle {
          fill: none;
          stroke: #212121;
          stroke-miterlimit: 10;
          stroke-width: 4px;
          stroke-dasharray: 100;

          animation: ${CircleRecordDrawing} 2s;
          :nth-child(1) {
            stroke-dashoffset: ${100 - (stats.Wins * 100) / 82};
          }
          :nth-child(2) {
            stroke-dashoffset: ${100 - (stats.Losses * 100) / 82};
          }
        }
      }
      .winAndLoseText {
        font-size: 50px;
      }
    }
  `;
  return (
    <div className="TeamPage-wrap">
      <CircleRecord>
        <div className="CircleRecordWin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="150"
            width="150"
            viewBox="25 25 100 100"
          >
            <circle cx="75" cy="75" r="15.84" />
          </svg>
        </div>
        <div className="winAndLoseText">{stats.Wins}</div>
        {/* <div className="CircleRecordLose">
          <svg
            id=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 171.81 35.69"
          >
            <circle cx="17.84" cy="17.84" r="15.84" />
          </svg>
        </div>
        <div className="winAndLoseText">{stats.Losses}</div> */}
      </CircleRecord>
      <div>{stats.Wins}</div>
      <div>{stats.Losses}</div>
    </div>
  );
};

export default TeamPage;
