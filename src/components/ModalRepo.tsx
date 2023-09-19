import { RepoType } from "./ListRepo";

interface RepoModalProps {
  repo: RepoType;
  onClose: () => void;
}

const RepoModal = ({ repo, onClose }: RepoModalProps) => {
  return (
    <div className="main-content">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}></span>
          <h2>{repo.name}</h2>
          <p>Linguagem: {repo.language}</p>
          <p>Privacidade: {repo.private}</p>
          <p>Descrição: {repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            Link: {repo.html_url}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoModal;
