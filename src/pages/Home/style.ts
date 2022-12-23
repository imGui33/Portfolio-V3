import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  section:nth-child(odd) {
    background-color: var(--white-100);
  }
`;
export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color:red; */
    overflow: hidden;
    /* z-index: -1; */
  }
`;
export const ContainerContent = styled.div`
  color: var(--black-300);
  min-width: 500px;
  height: 500px;
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  flex-direction: column;
  z-index: 2;
  li {
    list-style: none;
  }
  /* .text {
    text-align: center;
  } */
  .text h1 {
    font-size: 75px;
  }
  .personal-information {
    width: 100%;
    li h2 {
      /* opacity: 0.8; */
      color: var(--black-200);
    }
    li span {
      font-weight: 500;
    }
    li {
      font-size: 15px;
      display: grid;
      grid-template-columns: 150px 250px;
      align-items: center;
      /* justify-content:space-around; */
    }
  }
`;
