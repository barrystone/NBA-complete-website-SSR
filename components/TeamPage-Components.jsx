import styled, { keyframes } from "styled-components";

const drawingSvg = keyframes`
100% {
  stroke-dashoffset: 50;
  transform: scale(1);
}
`;

export const CircleRecord = styled.div`
  fill: none;
  stroke: #212121;
  stroke-miterlimit: 10;
  stroke-width: 4px;

  stroke-dasharray: 100;
  stroke-dashoffset: 100;

  animation: ${drawingSvg} 2s infinite;
`;

export default CircleRecord;
