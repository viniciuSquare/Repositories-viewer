import { useContext } from "react";
import { RepositoriesContext } from '../contexts/RepositoriesContext'

export function useRepositories() {
  const contextData = useContext(RepositoriesContext);

  return contextData;
}