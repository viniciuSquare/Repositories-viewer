const axios = require('axios');
const { v4: uuid } = require('uuid');

async function getRepositories(){
  
  let repositories = await axios.get("https://api.github.com/users/viniciusquare/repos").then(({data}) => data)

  let filteredRepositories = repositories.map( repository => {
    return { 
      id: uuid(),
      title: repository.name,
      SSH_URL: repository.ssh_url,
      url: repository.html_url
      
    }
  });
  return filteredRepositories;
}

module.exports = getRepositories;