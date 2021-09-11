import './App.css';
import React, { useState, useEffect } from "react"
import {  BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import GlobalStyle from './assets/styles/global';
import FooterComponent from './assets/footer';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import styled from "styled-components";


function App() {

  const [theme, setTheme] = useState("light");
  const [x1, setX1] = useState("3");
  const [y1, setY1] = useState("3");
  const [x2, setX2] = useState("21");
  const [y2, setY2] = useState("21");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
      setX1("0");
      setY1("0");
      setX2("0");
      setY2("0");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
      setX1("3");
      setY1("3");
      setX2("21");
      setY2("21");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>

      <Header>
        <Contato href="mailto:gustavoborgesdv@gmail.com">CONTATO</Contato>
        <ButtonChange onClick={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-off" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1={x1} y1={y1} x2={x2} y2={y2}/>
          <path d="M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        </ButtonChange>
      </Header>

      <Routes />
      <FooterComponent />
      <GlobalStyle />

      </ThemeProvider>
    </BrowserRouter>

  );
}


const ButtonChange = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px 30px 5px 30px;
  border: none;
  background: none;
  :hover{
    cursor: pointer;
  }
`;

export const Header = styled.header`

  z-index: 2;
  background: #92e3a9;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 10px;

`

export const Contato = styled.a`

    color: white;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;

    ::before{
      transform: scaleX(0);
      transform-origin: bottom right;
    }

    :hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
}

::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: #5c8f6a;
  z-index: -1;
  transition: transform .3s ease;
}


`

export default App;
