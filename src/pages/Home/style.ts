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
  scroll-snap-align: start;
  flex-direction:column;
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
    z-index:-1;
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
  width: 100%;
  height: 500px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  flex-direction: column;

  li {
    list-style: none;
  }
  .text {
    z-index: 2;
    text-align: center;
  }
  .text h1 {
    font-size: 75px;
  }
  .text-about-me{
    width: 50%;
    text-align:justify;
    h1{
      font-size: 50px;
    }
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
  z-index: 2;
  justify-content: center;

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
    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
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
    grid-template-columns: 1fr;
    gap: 10px;
    align-items: center;
    justify-content: center;
    .informations li {
      word-wrap: break-word;
      grid-template-columns: 150px 150px;
    }
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
export const TitleSec = styled.div`
  h1{
    font-size: 55px;
  }
`