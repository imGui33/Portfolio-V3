import React, { useState, useCallback } from "react";

import {
  Container,
  Section,
  ContainerContent,
  PersonalInformation,
  Insta,
  GitHub,
  Youtube,
  TitleSec,
} from "./style";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Wave from "react-wavify";

const Home: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <Container>
      <Section>
        <div className="bg">
          <Wave mask="url(#mask)" fill="#5086c1" className="waveBG"></Wave>
        </div>
        <div>
          {" "}
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  // onHover: {
                  //   enable: true,
                  //   mode: "repulse",
                  // },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#5086c1",
                },
                links: {
                  color: "#121214",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "destroy",
                  },
                  random: false,
                  speed: 0.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1800,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <ContainerContent>
          <div className="text">
            <h1>Guilherme Aguiar</h1>
            <span style={{ color: "var(--blue-300)" }}>
              Hi, my name is Guilherme.
            </span>
          </div>
          <PersonalInformation>
            <div className="informations">
              <ul>
                <li>
                  <h2>.Idade:</h2>
                  <span>15</span>
                </li>
                <li>
                  <h2>.E-mail:</h2>
                  <span>aguiaroguilherme@gmail.com</span>
                </li>
                <li>
                  <h2>.Endereço:</h2>
                  <span>Pontes e Lacerda, Mato Grosso</span>
                </li>
              </ul>
            </div>

            <div className="social-media">
              <ul>
                <li>
                  <a href="">
                    <Insta className="icon" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="">
                    <GitHub className="icon" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Youtube className="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </PersonalInformation>
        </ContainerContent>
      </Section>
      <Section>
        <div className="bg up">
          <Wave mask="url(#mask)" fill="#5086c1" className="waveBG"></Wave>
        </div>
        <TitleSec>
          <h1 style={{color:"white"}}>.Sobre-Mim</h1>
        </TitleSec>
        <ContainerContent>
          <div className="text-about-me">
            <h1>Meu nome é Guilherme Aguiar,</h1>
            <p>
              atualmente tenho 15 anos, nascido e criado em Pontes e Lacerda, Mato Grosso. Atualmente cursando Infórmatica, no Instituto Federal do Mato Grosso, uma escola que trabalha com cursos integrados, juntamente com máterias nativas do ensino médio. 
            </p>
          </div>
        </ContainerContent>
      </Section>
      <Section></Section>
      <Section></Section>
    </Container>
  );
};

export default Home;
