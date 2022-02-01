import { useState, useEffect } from "react";

import { RepositoriesListStyled } from './styled';

import axios from 'axios';
import { GoFileCode, GoLink, GoMarkGithub, GoThumbsup } from "react-icons/go";
import CopyToClipboard from "react-copy-to-clipboard";
import { api } from "../../services/api";
import { useRepositories } from "../../hooks/useRepositories";

export function RepositoriesList() {
  const { repositories, setRepositories } = useRepositories()

  function likeRepository(repoId) {
    const filterRepositoryById = ( repository ) => repository.id == repoId

    let likedRepository = repositories.filter(filterRepositoryById);
    
    const likes = likedRepository.likes ? likedRepository.likes+1 : 1;
    
    const updatedRepositories = repositories
      .map( repository => repository.id == repoId ? {...repository, likes } : repository);
    
    likedRepository = updatedRepositories.filter(filterRepositoryById);

    console.log("Liked repo ID: ", likedRepository);
    setRepositories(updatedRepositories);
  }
  
  return(
    <RepositoriesListStyled >
      
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Likes</th>
              <th>Acessos</th>
            </tr>
          </thead>
          <tbody>
            {
              repositories?.length >0 &&
                repositories.map( repository =>{
                  return(
                    <tr key={repository.id} >
                      <td>
                        <h3 className='repo-title'>{repository.title}</h3>
                      </td>
                      <td>
                        <button onClick={() => likeRepository(repository.id)}>
                          <GoThumbsup size="24"/>
                          <span> {repository.likes || "0"}</span>
                        </button>
                      </td>
                      <td className='buttons' >
                          <a className="btn" href={repository.url} target="_blank" alt="Abrir o repositório no GitHub">
                            <GoLink size="24"/>
                            <p>Abrir repo</p>
                          </a>
                          <CopyToClipboard onCopy={() => alert('Código para clonagem do repositório copiado com sucesso')} text={`git clone ${repository.SSH_URL}`}>
                            <div className="btn">
                              <GoFileCode size="24"/>
                              <p>Código p/ clonar</p>
                            </div>
                          </CopyToClipboard>
                      </td>
                    </tr>
                  )

              })
            }
          </tbody>
        </table>

      </div>
    </RepositoriesListStyled>
  )
}