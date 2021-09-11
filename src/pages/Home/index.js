import React, {useState} from 'react';

import ImageRight from '../../assets/images/ImageRight.png';
import Me from '../../assets/images/Me.png';
import PtiLogo from '../../assets/images/logopti.png';
import UniosteLogo from '../../assets/images/Unioeste.png';

import C from '../../assets/tecnologias/C.png';
import Csharp from '../../assets/tecnologias/Csharp.png';
import Css from '../../assets/tecnologias/Css.png';
import Git from '../../assets/tecnologias/Git.png';
import Google from '../../assets/tecnologias/Google.png';
import Html from '../../assets/tecnologias/Html.png';
import JavaScript from '../../assets/tecnologias/Javascript.png';
import Mat from '../../assets/tecnologias/Mat.png';
import Nodejs from '../../assets/tecnologias/Nodejs.png';
import Numpy from '../../assets/tecnologias/Numpy.png';
import Pandas from '../../assets/tecnologias/Pandas.png';
import Python from '../../assets/tecnologias/Python.png';
import Qgis from '../../assets/tecnologias/Qgis.png';
import Reactjs from '../../assets/tecnologias/Reactjs.png';
import Rest from '../../assets/tecnologias/Rest.png';
import Slearn from '../../assets/tecnologias/Slearn.png';
import Styled from '../../assets/tecnologias/Styled.png';
import Tensorflow from '../../assets/tecnologias/Tensorflow.png';
import TypeScript from '../../assets/tecnologias/Typescript.png';
import Unity from '../../assets/tecnologias/Unity.png';


import { 
    
    AboutMeSvg, ContainerInsideRow, SimpleColumn, ContainerTitle, 
     RowContainer, GlobalContainer, ImagemPessoal, 
    TitleDeveloper, TitleName, SimpleRow, Tech, Tech2, Tech3, Texts, TitleTech, Button, ButtonContainer,
    Imagemteste, ContainerCertificado, HeaderCertificado, ContainerContent, TitleC, TextContent, SvgMinimize, ButtonMinimize

}  from './styles';

function Home(){

    const[front, setFront] = useState(false);
    const[data, setData] = useState(false);
    const[games, setGames] = useState(false);
    const[neutro, setNeutro] = useState(false);
  
    const hideFront = () => {

        if(front === true){
          document.getElementById('front').style.display = 'none';
          setFront(false);
        }
        if(front === false){
          document.getElementById('front').style.display = 'block';
          setFront(true);
        }
        

    }

    const hideData = () => {
      
      if(data === true){
        document.getElementById('data').style.display = 'none';
        setData(false);
      }
      if(data === false){
        document.getElementById('data').style.display = 'block';
        setData(true);
      }
    }

    
    const hideGames = () => {
      
      if(games === true){
        document.getElementById('games').style.display = 'none';
        setGames(false);
      }
      if(games === false){
        document.getElementById('games').style.display = 'block';
        setGames(true);
      }
    }


    const hideNeutro = () => {
      
        if(neutro === true){
          document.getElementById('neutro').style.display = 'none';
          setNeutro(false);
        }
        if(neutro === false){
          document.getElementById('neutro').style.display = 'block';
          setNeutro(true);
        }
    }

    return(
        
        <GlobalContainer>

            <ContainerTitle>

                <ImagemPessoal src={Me} alt="Gustavo" width="50%" height="50%"></ImagemPessoal>

                <SimpleColumn>
                    <TitleDeveloper>Desenvolvedor FullStack</TitleDeveloper>
                    <TitleName>Gustavo Borges</TitleName>
                </SimpleColumn>

            </ContainerTitle>


            <RowContainer>

                <ContainerInsideRow>
                    <AboutMeSvg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#5c8f6a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </AboutMeSvg>
                    <Texts>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Texts>
                </ContainerInsideRow>

                <ContainerInsideRow>
                    <Imagemteste src={ImageRight} alt="UIUX" width="100%" height="100%"></Imagemteste>
                </ContainerInsideRow>

            </RowContainer>

            <RowContainer>

                <ContainerInsideRow>

                    <SimpleRow>

                        <img src={PtiLogo} alt="Logo empresa PTI" width="15%" height="15%" ></img>

                        <SimpleColumn>

                            <AboutMeSvg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#5c8f6a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="7" width="18" height="13" rx="2" />
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                            <line x1="12" y1="12" x2="12" y2="12.01" />
                            <path d="M3 13a20 20 0 0 0 18 0" />
                            </AboutMeSvg>
                            <Texts>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Texts>

                        </SimpleColumn>

                    </SimpleRow>

                </ContainerInsideRow>

                <ContainerInsideRow>

                    <SimpleRow>

                        <img src={UniosteLogo} alt="Logo Universidade UNIOESTE" width="15%" height="15%"></img>

                        <SimpleColumn>

                            <AboutMeSvg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#5c8f6a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                            <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                            </AboutMeSvg>
                            <Texts>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Texts>

                        </SimpleColumn>

                    </SimpleRow>

                </ContainerInsideRow>

            </RowContainer>

            <SimpleRow>

                <AboutMeSvg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#5c8f6a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                <circle cx="15" cy="9" r="1" />
                </AboutMeSvg>
                <TitleTech>Tecnologias</TitleTech>

            </SimpleRow>

            <SimpleRow>
                <Tech3 src={Html} alt="Logo Tecnologia"></Tech3>
                <Tech src={Css} alt="Logo Tecnologia"></Tech>
                <Tech3 src={JavaScript} alt="Logo Tecnologia"></Tech3>
                <Tech2 src={TypeScript} alt="Logo Tecnologia"></Tech2>
                <Tech src={Reactjs} alt="Logo Tecnologia"></Tech>
            </SimpleRow>

            <SimpleRow>
                <Tech src={Nodejs} alt="Logo Tecnologia"></Tech>
                <Tech src={Rest} alt="Logo Tecnologia"></Tech>
                <Tech src={Styled} alt="Logo Tecnologia"></Tech>
                <Tech src={C} alt="Logo Tecnologia"></Tech>
                <Tech2 src={Qgis} alt="Logo Tecnologia"></Tech2>
            </SimpleRow>

            <SimpleRow>
                <Tech3 src={Python} alt="Logo Tecnologia"></Tech3>
                <Tech src={Git} alt="Logo Tecnologia"></Tech>
                <Tech2 src={Google} alt="Logo Tecnologia"></Tech2>
                <Tech3 src={Tensorflow} alt="Logo Tecnologia"></Tech3>
                <Tech2 src={Slearn} alt="Logo Tecnologia"></Tech2>
            </SimpleRow>
            

            <SimpleRow>
                <Tech2 src={Pandas} alt="Logo Tecnologia"></Tech2>
                <Tech2 src={Numpy} alt="Logo Tecnologia"></Tech2>
                <Tech src={Mat} alt="Logo Tecnologia"></Tech>
                <Tech src={Csharp} alt="Logo Tecnologia"></Tech>
                <Tech2 src={Unity} alt="Logo Tecnologia"></Tech2>
            </SimpleRow>

            <RowContainer>
        <ContainerInsideRow>
          <ButtonContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-id"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5c8f6a"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="4" width="18" height="16" rx="3" />
              <circle cx="9" cy="10" r="2" />
              <line x1="15" y1="8" x2="17" y2="8" />
              <line x1="15" y1="12" x2="17" y2="12" />
              <line x1="7" y1="16" x2="17" y2="16" />
            </svg>

            <Button>Baixar CV</Button>
          </ButtonContainer>
        </ContainerInsideRow>

        <ContainerInsideRow>
          <ButtonContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#5c8f6a"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>

            <Button
              href="https://github.com/gBorges19"
              target="_blank"
              rel="noreferrer"
            >
              Acessar Portfólio
            </Button>
          </ButtonContainer>
        </ContainerInsideRow>
      </RowContainer>


        <SimpleRow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-certificate"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#5c8f6a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="15" cy="15" r="3" />
            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
            <line x1="6" y1="9" x2="18" y2="9" />
            <line x1="6" y1="12" x2="9" y2="12" />
            <line x1="6" y1="15" x2="8" y2="15" />
          </svg>
          <TitleTech>Certificações</TitleTech>
        </SimpleRow>

        <ContainerCertificado>
          <HeaderCertificado>
            <TextContent>Front end e Design</TextContent>
            <ButtonMinimize onClick={() => hideFront()}>
              <SvgMinimize xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minimize" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
              <path d="M15 5v2a2 2 0 0 0 2 2h2" />
              <path d="M5 15h2a2 2 0 0 1 2 2v2" />
              <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
              </SvgMinimize>
            </ButtonMinimize>
          </HeaderCertificado>
          <ContainerContent id='front'>
          <TitleC>Em progresso</TitleC>
          <TextContent>em progresso</TextContent>
          </ContainerContent>
        </ContainerCertificado>

        <ContainerCertificado>
          <HeaderCertificado>
            <TextContent>Data Science e IA</TextContent>
            <ButtonMinimize onClick={() => hideData()}>
              <SvgMinimize xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minimize" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
              <path d="M15 5v2a2 2 0 0 0 2 2h2" />
              <path d="M5 15h2a2 2 0 0 1 2 2v2" />
              <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
              </SvgMinimize>
            </ButtonMinimize>
          </HeaderCertificado>
          <ContainerContent id="data">
          <TitleC>University of London</TitleC>
          <TextContent>Foundations of Data Science: K-Means Clustering in Python | Machine Learning For All</TextContent>
          <TitleC>Google Cloud</TitleC>
          <TextContent>How Google Does Machine Learning</TextContent>
          <TitleC>IA Expert Academy</TitleC>
          <TextContent>Tensorflow: Machine Learning e Deep Learning com Python</TextContent>
          </ContainerContent>
        </ContainerCertificado>

        <ContainerCertificado>
          <HeaderCertificado>
            <TextContent>Game Design</TextContent>
            <ButtonMinimize onClick={() => hideGames()}>
              <SvgMinimize xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minimize" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
              <path d="M15 5v2a2 2 0 0 0 2 2h2" />
              <path d="M5 15h2a2 2 0 0 1 2 2v2" />
              <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
              </SvgMinimize>
            </ButtonMinimize>
          </HeaderCertificado>
          <ContainerContent id="games">
          <TitleC>University of Colorado</TitleC>
          <TextContent>Introduction to C# Programming and Unity</TextContent>
          <TitleC>Universidade Estadual de Campinas</TitleC>
          <TextContent>A complexidade sensível: Um paralelo entre videogames e arte</TextContent>
          </ContainerContent>
        </ContainerCertificado>

        <ContainerCertificado>
          <HeaderCertificado>
            <TextContent>Complementares</TextContent>
            <ButtonMinimize onClick={() => hideNeutro()}>
              <SvgMinimize xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minimize" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
              <path d="M15 5v2a2 2 0 0 0 2 2h2" />
              <path d="M5 15h2a2 2 0 0 1 2 2v2" />
              <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
              </SvgMinimize>
            </ButtonMinimize>
          </HeaderCertificado>
          <ContainerContent id="neutro">
          <TitleC>University of Michigan</TitleC>
          <TextContent>Programming for Everybody (Getting Started with Python)</TextContent>
          <TitleC>Universidade de São Paulo</TitleC>
          <TextContent>Introdução à Ciência da Computação com Python I</TextContent>
          <TitleC>Parque Tecnológico Itaipu</TitleC>
          <TextContent>Gestão para Sustentabilidade Territorial | Robótica básica com Arduíno</TextContent>
          </ContainerContent>
        </ContainerCertificado>

  </GlobalContainer>

    )



}

export default Home;