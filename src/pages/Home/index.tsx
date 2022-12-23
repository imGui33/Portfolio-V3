import React, { useState, useCallback } from "react";

import { Container, Section, ContainerContent } from "./style";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Home: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // await console.log(container);
  }, []);
  const personalInformation = [
    {
      Idade: 15,
      Nome: "Guilherme Aguiar",
      "E-mail": "aguiaroguilherme@gmail.com",
    },
  ];

  () => {};
  return (
    <Container>
      <Section>
        <div className="bg">
          <Particles
            className="tsparticles"
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
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
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
                  value: "#65727a",
                },
                links: {
                  color: "#e4e4e4",
                  distance: 150,
                  enable: true,
                  opacity: 1,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 2000,
                  },
                  value: 20,
                },
                width: { max: "100%" },
                height: { max: "100%" },
                opacity: {
                  value: 2,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <ContainerContent>
          <div className="text">
            <h1>Guilherme Aguiar</h1>
            <span>Hi, my name is Guilherme.</span>
          </div>

          <div className="personal-information">
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
          <div className="social-media"></div>
        </ContainerContent>
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </Container>
  );
};

export default Home;
