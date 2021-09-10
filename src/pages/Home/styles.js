import styled from 'styled-components';
import  '../../assets/styles/fonts.css';


export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

export const RowContainer = styled.div`

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


`

export const ContainerInsideRow = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px;


`

export const ImagemPessoal = styled.img`

  width: 10%;
  height: 10%;
  border-radius: 100px 100px 100px 100px;
  border: 7px outset #92e3a9;
  margin: 50px;


`

export const ContainerTitle = styled.div`

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`
export const SimpleColumn = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`

export const SimpleRow = styled.div`
  
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;


`

export const TitleDeveloper = styled.h2`

  color: #92e3a9;
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;

`

export const TitleName = styled.h3`

  color: #696969;
  font-size: 45px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;


`

export const AboutMeSvg = styled.svg`

  margin-bottom: 15px;
  stroke-width: 2px;
  align-items: center;

`

export const Tech = styled.img`

  width: 5%;
  height: 5%;
  margin: 7px 70px 7px 70px;


`

export const Tech2 = styled.img`

  width: 6.5%;
  height: 6.5%;
  margin: 7px 70px 7px 70px;


`

export const Tech3 = styled.img`

  width: 4%;
  height: 4%;
  margin: 7px 70px 7px 70px;


`

export const Texts = styled.p`

  font-family: 'Glory', sans-serif;
  font-size: 18px;


`

export const TitleTech = styled.h4`

  color: #92e3a9;
  font-size: 25px;
  margin: 70px 5px 70px 0;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;


`

export const Button = styled.button`

    transform: skew(-15deg);
    width: 225px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    color: #F9F9F9;
    cursor: pointer;
    outline: none;
    background-color: #628E75;
    border: 3px solid #628E75;
    transition: .6s;
    margin-bottom: 25px;
    margin-top: 55px;
    :hover{
        background: linear-gradient(130.02deg, #628E75 0.66%, #92e3a9 83.32%);
        border: 0;
    }


`

export const ButtonContainer = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 150px 75px 150px 75px;


`