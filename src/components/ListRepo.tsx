import { Link } from "react-router-dom";
import "../css/Main-modules.css";

export interface RepoType {
  id: number;
  language: string;
  private: "Privado" | "Publico";
  description: string;
  html_url: string;
  name: string;
  fullname: string;
  owner: {
    login: string;
    id: number
  };
  visibility: string;
}

interface RepositoryListProps {
  repositories: RepoType[];
}

function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="repository-list">
      {repositories.map((repo) => (
        <div key={repo.id} className="repository-card">
          <div>
            <h3 className="repo-title">{repo.name}</h3>
          </div>
          <div className="repo-flex">
            <div className="repo-bg">
              <div className="title-label">Link</div>
              <p>{repo.html_url}</p>
            </div>
            <div className="repo-bg">
              <div className="title-label">Descrição</div>
              <p>{repo.description}</p>
            </div>
            <div className="detail-button">

              <Link to={`/repositories/${repo.owner.login}/${repo.name}`}>
                Detalhes
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



export default RepositoryList;
