import { useEffect, useState } from 'react';
import axios from 'axios'

import CopyToClipboard from 'react-copy-to-clipboard'

import { AppStyled } from './styled'
import { GoMarkGithub, GoLink, GoThumbsup, GoFileCode } from 'react-icons/go'

function App() {

  const [repositories, setRepositories] = useState({})

  const api = axios.create({
    baseURL:'http://172.168.1.88:3001/repositories',
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })

  useEffect(()=>{
    api.get('/').then(({data})=>setRepositories(data))

  }, [])

  function likeRepository(repoId) {
    const filterRepositoryById = ( repository )=> repository.id == repoId

    const likedRepository = repositories.filter(filterRepositoryById);
    likedRepository.likes += 1;
  }

  return (
    <AppStyled className="App">
      <header className="App-header">
        <div className="page-title">
          <GoMarkGithub size="32" title="GitHub"/>
          <h1>Repositories</h1>
        </div>
        <h2>ViniciusQuare</h2>
      </header>
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
              repositories.length >0 &&
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
    </AppStyled>
  );
}

export default App;
