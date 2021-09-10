import './App.css';
import React, { useState, useEffect } from "react"
import {  BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import GlobalStyle from './assets/styles/global';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import styled from "styled-components";


function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
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
        <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
      </Header>

      <Routes />
      <GlobalStyle />

      </ThemeProvider>
    </BrowserRouter>

  );
}

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 20px;
  border-radius: 10px;
`;

export const Header = styled.div`

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
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;


`

export default App;
