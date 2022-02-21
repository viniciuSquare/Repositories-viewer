# 💡 Desafio - listagem de repositórios

API Node traz lista de repositórios onde será renderizada pelo front-end em React.

## 🧪 Techs usadas
- React JS
  - Axios
  - React-icons
  - Styled-components
  
- Node - API
  - API do GitHub
  - Axios
  - Cors
  - Express
  - UUID

No projeto é utilizado conceitos como:
- JS:
  - Async / Await
  - Destructuring
  - IIF - Immediately Invoked Function
  - Map
  - Filter

- React:
  - Context API e criação de hook
  - useEffect
  - useState

### Como rodar o projeto
Abra dois terminais e, pela pasta raiz rode:
- Para rodar o backend: ``cd node-api && npm start``
- Para rodar o frontend: ``cd node-api && npm start``

Front Será iniciado na porta 3000.

---

## Deixando com a sua cara
O projeto está feito para listar meus projetos usando a API do GitHub, porém é possível que altere para visualizar seus próprios projetos assim como possibilitar acesso de outras máquinas em sua rede.

##### Alterando URL da API GitHub para seu repositório:
- No arquivo ``./node-api/repositories-list-handler.js`` altere o código da linha 5:
```javascript
async function getRepositories(){
  let gitUsername = "viniciusquare"; //Substitua aqui seu username

  let repositories = await axios.get(`https://api.github.com/users/${gitUsername}/repos`).then(...)
  ...
}
```
##### Alterando para acesso em rede (substituindo `localhost`):
- No arquivo `./repositories-viewer/src/services/api.js` defina o IP que irá rodar o backend node para acesso do front, exemplo: 
```js
let hostIP = "192.168.0.100"
export const api = axios.create({
  baseURL:`http://${hostIP}:3001/repositories`,
  ...
})
```

---