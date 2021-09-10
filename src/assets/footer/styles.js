import styled from 'styled-components';


export const GlobalContainer = styled.div`

  background: #92e3a9;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 70px;

    @media(max-width: 1150px) {
        flex-direction: column;
        position: relative;
    }
    
`;