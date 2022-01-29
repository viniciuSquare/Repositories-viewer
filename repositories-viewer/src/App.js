import { useState } from 'react';
import axios from 'axios'

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

  api.get('/').then(({data})=>setRepositories(data))

  return (
    <AppStyled className="App">
      <header className="App-header">
        <div className="page-title">
          <GoMarkGithub size="28" title="GitHub"/>
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
                      <td id="button-field">
                        <button>
                          <GoThumbsup size="24"/>
                          <span> {repository.likes || "0"}</span>
                        </button>
                      </td>
                      <td>
                          <a href={repository.url} target="_blank" alt="Abrir o repositório no GitHub">
                            <GoLink size="24"/>
                          </a>
                          <a href={repository}>
                            <GoFileCode size="24"/>
                          </a>
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
