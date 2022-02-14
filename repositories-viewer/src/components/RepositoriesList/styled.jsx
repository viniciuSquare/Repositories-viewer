import styled from "styled-components";

export const RepositoriesListStyled = styled.div`

  #empty-list-msg {
    font-size: 18px;
    line-height: 3rem;

    margin-top: 1rem;

    color: #636262;

  }

  .container {
    width: 100%;
    max-height: calc(100vh - 90px);

    margin-top: 90px;
    
    display: flex;
    justify-content: center;

    table {

      overflow-y: hidden;
      width: 900px;
      max-width: 80%;

      thead tr {
        height: 50px;

        border-bottom: 1px solid rgba(221, 221, 221,0.6);

      }

      tr {
        display: grid;
        grid-template-columns: 50% 15% 22%  ;
        padding: 0 0.5rem;

        align-items: center;
        justify-content: space-between;

        text-align: left;
        
        th {
          font-weight: 500;
          
          font-size: 1.3rem;
        }

        &:first-child {
          padding-left: 1rem;
        }

        .repo-title {
          font-weight: 500;

          color: #002a69;
        }
        
        button {
          line-height: normal;
          display: flex;

          align-items: center;

          background: transparent;
          border: none;

          cursor: pointer;

          span {
            font-size: 1.2rem;
            padding-left: .4rem;
          }
        }

        .buttons {
          display: flex;
          flex-direction: column;
          
          row-gap: 8px;

          .btn {
            display: flex;
  
            align-items: center;

            cursor: pointer;
            
            &:hover {
              background-color: gray;
              
              color: whitesmoke;
            }

            svg {
              margin: 0 0.5rem ;
            }
            
            p {
              font-size: 14px;
            }
  
          }
        }

        
      }

      tbody tr{
        background-color: #e0e0e0;

        height: 70px;

        padding-left: 1.5rem;
        border-radius: 8px;

        margin-bottom: 0.5rem;
      }
      
      
    }

  }

`