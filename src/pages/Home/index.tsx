import React, { useState, useCallback } from "react";

import {
  Container,
  Section,
  ContainerContent,
  PersonalInformation,
  Insta,
  GitHub,
  Youtube,
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
        <h1>heelo</h1>
      </Section>

      <Section></Section>
    </Container>
  );
};

export default Home;
