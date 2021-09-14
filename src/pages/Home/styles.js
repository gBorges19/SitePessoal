import styled from 'styled-components';
import  '../../assets/styles/fonts.css';


export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;


`

export const RowContainer = styled.div`

  width: 100%;
  max-width: 1220px;
  display: flex;
  justify-content: center;
  align-items: center;


`

export const ContainerInsideRow = styled.div`

  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;


`

export const ImagemPessoal = styled.img`

  width: 10%;
  height: 10%;
  border-radius: 100px 100px 100px 100px;
  border: 7px outset #00df5e;
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

  color: #00df5e;
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


export const Texts = styled.p`

  font-family: 'Montserrat', sans-serif;
  font-size: 18px;


`

export const TitleTech = styled.h4`

  color: #92e3a9;
  font-size: 25px;
  margin: 70px 10px 70px 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;


`

export const Button = styled.a`

    z-index: 1;
    transform: skewx(-15deg);
    width: 225px;
    height: 45px;
    font-family: 'Roboto';
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 16px;
    color: #F9F9F9;
    cursor: pointer;
    background-color: #628E75;
    border: 3px solid #628E75;
    transition: .6s;
    margin-top: 60px;
    :hover{
        background: linear-gradient(130.02deg, #628E75 0.66%, #92e3a9 83.32%);
        border: 0;
    }


`

export const ContainerGitCv = styled.div`

  width: 100%;
  max-width: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;


`

export const ButtonContainer = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 150px 75px 150px 75px;


`


export const Imagemteste = styled.img`

  :hover{
    opacity: 95%;
  }


`

export const ContainerCertificado = styled.article`

    width: 70%;
    max-width: 1200px;
    height: auto;
    padding-top: 1rem;
    margin-bottom: 1.56rem;
    background-color: #628E75;
    border-radius: 5px;


`

export const HeaderCertificado = styled.div`

    width: 100%;
    height: 1.37rem;
    margin: auto auto 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`

export const ContainerContent = styled.div`

    display: none;
    height: auto;
    margin-top: 1.68rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: left;
    background: #628E75;

`
export const TitleC = styled.h2`

    height: auto;
    margin-top: 1.68rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: left;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.40rem;
    color: black;


`

export const TextContent = styled.p`

    height: auto;
    margin-top: 1.68rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: left;
    font-weight: 400;
    font-size: .87rem;
    line-height: 1.40rem;
    color: #FFFFFF;
    padding-top: .56rem;
    padding-bottom: .97rem;
    font-family: 'Montserrat', sans-serif;
    
    


`

export const SvgMinimize = styled.svg`

    width: 28px;
    height: 28px;
    top: 75px;
    left: 7px;



`
export const ButtonMinimize = styled.button`

  width: 30px;
  height: 30px;
  margin: 5px 30px 5px 30px;
  border: none;
  background: none;

  :hover{
    cursor: pointer;
  }

`;

export const ContainerStyle = styled.div`

  margin-top: 30px;
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 20px;
  background: #628E75;


`