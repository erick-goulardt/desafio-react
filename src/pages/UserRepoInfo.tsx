import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import "../css/Repo-modules.css";
import { useEffect, useState } from "react";
import { getRepositories } from "../services/users.service";
import RepositoryList, { RepoType } from "../components/ListRepo";

export function UserRepoInfo() {
  const { state } = useLocation();
  const userData = state?.userData;
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (userData) {
      getRepositories(userData.login, currentPage).then((data) => {
        setRepos(data);
      });
    }
  }, [userData, currentPage]);

  const nextPage = () => {
    if(currentPage < repos.length) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="main-section">
          <h1 className="font-bold text-3xl mb-10">Informações</h1>
          <section className={`section-card`}>
            <img src={userData?.avatar_url} alt="" />
            <div className="user-info">
              <p className="user-data">Nome</p>
              <h5 className="">{userData?.name}</h5>
              <p className="user-data">Bio</p>
              <h5 className="">{userData?.bio}</h5>
            </div>
          </section>
          <section className={`section-repos`}>
            <h1 className="font-bold text-3xl mt-8 mb-10">Repositórios</h1>
            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Página Anterior
              </button>
              <button onClick={nextPage} disabled={currentPage === repos.length}>
                Próxima Página
              </button>
            </div>
            <RepositoryList
              repositories={repos}
            />
          </section>
        </div>
      </main>
    </>
  );
}

