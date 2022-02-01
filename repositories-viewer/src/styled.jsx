import styled from 'styled-components'

export const AppStyled = styled.div`
  max-width: 100vw;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  
  align-items: center;

  position: relative;

  font-family: 'Roboto', sans-serif;
  
  header {
    width: 100%;
    height: 80px;

    position: fixed;
    top: 0;

    z-index: 5;
    background-color: white;

    border-bottom: 1px solid rgba(221, 221, 221,0.6);

    max-width: 80%;
    display: flex;

    align-items: center;
    justify-content: space-between;

    font-family: 'Montserrat', sans-serif;
    
    .page-title {
      display: flex;
      align-items: center;

      column-gap: 1rem;
    }
  }

  button {
    cursor: pointer;
    
    line-height: normal;
  }
`