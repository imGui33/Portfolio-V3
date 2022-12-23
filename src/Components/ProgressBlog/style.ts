import styled from "styled-components";

export const ProgressContainer = styled.div`
  position: fixed;
  z-index: 3;

  width: 100%;
  height: 6px;
  .progress-line {
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    background-color: var(--black-300);
  }
`;
