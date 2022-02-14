const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');

let getRepositoriesData = require('./repositories-list-handler');
let repositories;

(async()=>{
  repositories = await getRepositoriesData().catch(err => console.log(err.code));    
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

// CREATE NEW REPOSITORY AND RETURN THE LIST
app.post('/repositories/', (request, response) => {
  
  const repository = {
    title: request.body.title, 
    likes : 0,
    id : uuid(),
    locals: ['local', request.body.isGitRepo =='on' && 'github']
  }
  
  repositories.push(repository);

  response.json(repository);
})

// LIKE REPO
app.post('/repositories/:id/like', (request, response) => {
  const {id} = request.params;
  
  let repository = repositories.filter((repository) => repository.id == id)
  console.log("Liked repo:", repository);
  
  let likes = repository[0].likes +1;
  console.log("Total likes:", likes);

  repositories = repositories
    .map( repository => repository.id == id ? {...repository, likes } : repository);


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