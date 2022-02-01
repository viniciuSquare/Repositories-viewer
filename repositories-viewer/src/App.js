import { useEffect, useState } from 'react';

import { AppStyled } from './styled'

import { GoMarkGithub } from 'react-icons/go'

import { RepositoriesList } from './components/RepositoriesList';
import { FloatingButton } from './components/FloatingButton';
import { CreationModal } from './components/CreationModal';
import { api } from './services/api';
import { useRepositories } from './hooks/useRepositories';


function App() {
  const [ isCreationModalVisible, setIsCreationModalVisible ] = useState(false);

  const toggleModalVisibility = ()=>setIsCreationModalVisible(!isCreationModalVisible);
  const {setRepositories} = useRepositories()
  
  useEffect(()=>{
    api.get('/').then(({data})=>setRepositories(data))

  }, [])

  return (
      <AppStyled>
        <header className="App-header">
          <div className="page-title">
            <GoMarkGithub size="32" title="GitHub"/>
            <h1>Repositories</h1>
          </div>
          <h2>ViniciusQuare</h2>
        </header>
        <RepositoriesList  />
        {
          isCreationModalVisible &&
            <CreationModal toggleVisibility={toggleModalVisibility} />
        }
        <FloatingButton onClick={toggleModalVisibility} />
      </AppStyled>
  );
}

export default App;
