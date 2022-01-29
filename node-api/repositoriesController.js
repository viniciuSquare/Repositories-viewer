const express = require('express');
const cors = require('cors');

let getRepositoriesData = require('./repositories-list-handler');
let repositories;

(async()=>{
  repositories = await getRepositoriesData().catch(err => console.log(err));    
})()

const app = express();

app.use(express.json());
app.use(cors());


// GET ALL
app.get('/repositories', (request, response) => {
  response.json(repositories);
})

// GET FROM ID
app.get('/repositories/:id', (request, response) => {
  const { id } = request.params;
  
  const result = repositories.filter(obj => obj.id == id);
  
  response.json(result);
})

// CREATE NEW
app.post('/repositories/', (request, response) => {
  const repository = {
    ...request.body, 
    likes : 0,
    id : uuid()
  }
  
  repositories.push(repository);

  response.json(repository);
})

// LIKE REPO
app.post('/repositories/:id/like', (request, response) => {
  const {id} = request.params;

  let repository = repositories.filter((repository, idx) => repository.id == id)
  repository.likes+= 1;

  response.json(repository);
})

// DELETE REPO
app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  repositories = repositories.map( repository => {
    if(repository.id != id)
      return repository;
  })

  response.json(repositories);
})


module.exports = app;