import { createContext, useState } from "react"

export const RepositoriesContext = createContext({});

export function RepositoriesContextProvider(props) {

  const [repositories, setRepositories] = useState([]);

  return(
    <RepositoriesContext.Provider
      value= {
        {
        repositories,
        setRepositories
        }
      }
    >
      { props.children }
    </RepositoriesContext.Provider>
  )
}