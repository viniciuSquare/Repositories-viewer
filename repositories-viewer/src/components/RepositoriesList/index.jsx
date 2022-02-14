import { RepositoriesListStyled } from './styled';

import { GoFileCode, GoLink, GoThumbsup } from "react-icons/go";
import CopyToClipboard from "react-copy-to-clipboard";

import { useRepositories } from "../../hooks/useRepositories";
import { api } from '../../services/api';

export function RepositoriesList() {
  const { repositories, setRepositories } = useRepositories()

  function likeRepository(repoId) {
    const filterRepositoryById = ( repository ) => repository.id == repoId
    
    let likedRepository = repositories.filter(filterRepositoryById)[0];
    console.log("Liked repo ID: ", likedRepository);
    
    let likes = likedRepository.likes + 1;
    
    const updatedRepositories = repositories
    .map( repository => repository.id == repoId ? {...repository, likes } : repository);
    
    console.log("Updated repo: ", );
    api.post(`/${repoId}/like`);
    
    likedRepository = updatedRepositories.filter(filterRepositoryById);

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
              repositories?.length > 0 ?
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
              : <h1 id="empty-list-msg">Add a new repository to the list <br/>Click the + button</h1>
            }
          </tbody>
        </table>

      </div>
    </RepositoriesListStyled>
  )
}