import { useRepositories } from "../../hooks/useRepositories";
import { api } from "../../services/api";
import { CreationModalStyled } from "./styled";

export function CreationModal({toggleVisibility}) {

  const {setRepositories} = useRepositories();

  const handleModalVisibility = (event) => {
    if(event.target && (event.target == event.currentTarget)) 
        toggleVisibility()
    else {
      return
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)

    let {data:creationResult, status} = await api.post("/", data);
    if(status == 200 || status == 201) {
      setRepositories(creationResult);

      toggleVisibility();
    }

  }  
  return(
    <CreationModalStyled onClick={handleModalVisibility}>

      <div className="modal-content">
        <h1 id="modal-title">Create new repository</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-group">
              <label htmlFor="title">Repository title</label>
              <input name="title" type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="isGitRepo">Is a GitHub repository?</label>
              <input name="isGitRepo"type="checkbox" />
            </div>
          </div>

          <button type="submit">Create</button>
        </form>
      </div>

    </CreationModalStyled>
  )
}