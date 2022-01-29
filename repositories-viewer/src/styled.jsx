import styled from 'styled-components'

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;

  header {
    width: 100%;
    height: 80px;

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

  .container {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;

    table {
      font-family: 'Roboto', sans-serif;

      width: 700px;
      max-width: 80%;

      tr {
        display: grid;
        grid-template-columns: 2fr minmax(3rem, 80px) .6fr  ;

        height: 60px;
        align-items: center;

        text-align: left;
        
        &:first-child {
          padding-left: 1rem;
        }

        th {
          font-weight: 500;
          font-size: 1.3rem;

        }
        
        &.repo-title {
          font-weight: 300;

        }
        
        #button-field {
          
          button {
            line-height: normal;
            display: flex;

            align-items: center;

            background: transparent;
            border: none;

            span {
              font-size: 1.2rem;
              padding-left: .4rem;
            }
          }
        }
      }

      tbody tr{
        background-color: lightgray;

        padding-left: 1.5rem;
        border-radius: 8px;

        margin-bottom: 0.5rem;
      }
      
      
    }

  }
`