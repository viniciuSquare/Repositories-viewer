import styled from "styled-components";

export const CreationModalStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.208);

  z-index: 5;

  display: flex;

  .modal-content {
    background-color: white;

    width: 25vw;
    height: 30vh;
    
    margin-top: 20vh;

    padding: 1.2rem 2.5rem;
    /* margin: auto; */

    border-radius: 0 12px 12px 0;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    #modal-title {
      margin-bottom: 1.5rem;
    }

    form {
      display: flex;
      flex-direction: column;

      justify-content: space-between;

      height: 50%;

      div.input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        
        input {
          height: 1.25rem;

        }

        label {
          font-size: 20px;
          color: #5e5b5b;

          margin-bottom: 8px;
        }
      }

      button {
        height: 4rem; 
        background-color: #5e5b5b;
        color: white;
      }
    }
    
  }
`
  
