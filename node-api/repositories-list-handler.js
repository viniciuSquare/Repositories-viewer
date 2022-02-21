const axios = require('axios');
const { v4: uuid } = require('uuid');

async function getRepositories(){
  let gitUsername = "viniciusquare";
  
  let repositories = await axios.get(`https://api.github.com/users/${gitUsername}/repos`).then(({data}) => data)

  let filteredRepositories = repositories.map( repository => {
    return { 
      id: uuid(),
      locals: ['github'],
      title: repository.name,
      SSH_URL: repository.ssh_url,
      likes: 0,
      url: repository.html_url
      
    }
  });
  return filteredRepositories;
}

module.exports = getRepositories;