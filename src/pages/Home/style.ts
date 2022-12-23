import styled from "styled-components";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
export const Container = styled.div`
  width: 100%;
  height: 100%;

  section:nth-child(odd) {
    background-color: var(--white-100);
  }
`;
export const Section = styled.section`
  scroll-snap-align: center;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  .bg {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 150px;
    .waveBG {
      width: 100%;
      height: 100%;
    }
  }
  #tsparticles {
    position: absolute;
  }
  .up {
    transform: rotate(180deg);
    top: 0;
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
  @media (max-width: 728px) {
    padding: 10px;
    .text h1 {
      font-size: 60px;
    }
  }
`;
export const PersonalInformation = styled.div`
  width: 100%;
  display: grid;
  align-items: center;

  grid-template-columns: 500px 300px;

  .informations {
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
  .social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      width: 50px;
      height: 30px;
      /* background-color: red; */
      margin: 10px;
    }
    .icon {
      transition: 0.2s;
    }
    .icon:hover {
      color: var(--blue-300);
      transition: 0.2s;
    }
  }
  @media (max-width: 728px) {
    grid-template-columns: 300px;
    gap: 10px;
  }
`;
export const Insta = styled(AiFillInstagram)`
  width: 50px;
  height: 30px;
  color: var(--black-300);
`;
export const GitHub = styled(AiFillGithub)`
  width: 50px;
  height: 30px;
  color: var(--black-300);
`;
export const Youtube = styled(AiFillYoutube)`
  width: 50px;
  height: 30px;
  color: var(--black-300);
`;
