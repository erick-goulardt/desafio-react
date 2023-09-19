import { useParams, useNavigate } from "react-router-dom";
import { getRepositoryByName } from "../services/users.service";
import { RepoType } from "../components/ListRepo";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";

import "../css/Repo-modules.css";

function RepositoryDetail() {
  const { username, name } = useParams<{ username: string; name: string }>();
  const [loading, setLoading] = useState(true);
  const [repository, setRepository] = useState<RepoType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadRepository() {
      try {
        const repo = await getRepositoryByName(username, name);
        setRepository(repo);
        setTimeout(() => {
          setLoading(false);
        }, 2250);
      } catch (error) {
        console.error(error);
      }
    }

    loadRepository();
  }, [username, name]);

  function isPublic() {
    if (repository.visibility === "public") {
      return true;
    } else {
      return false;
    }
  }

  function redirectPage() {
    navigate(-1)
  }

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center items-center bg-backgroundrepository overflow-hidden">
        <div className="main-section w-4/5">
          <h1 className="font-bold text-3xl mb-10">Especificações</h1>
          <div className="w-auto h-4/5 flex items-center justify-center">
            {loading ? (
              <div className="">
                <div className="flex items-center flex-col justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-mainprimary"></div>
                  <h6 className="font-bold text-black text-3xl mt-14">
                    Procurando...
                  </h6>
                </div>
              </div>
            ) : (
              <div className="main-section h-fit">
                <h5 className="font-bold text-xl mb-7 border-b-2 pb-4">
                  {repository.name}
                  <button onClick={redirectPage} className="relative float-right mt-3">
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/fluency-systems-regular/48/x.png"
                      alt="x"
                    />
                  </button>
                </h5>
                <div className="w-auto info-card p-2 mb-3">
                  <p className="title-repo">Linguagem</p>
                  <p>Language: {repository.language}</p>
                </div>
                <div className="w-auto info-card p-2 mb-3">
                  <p className="title-repo">Visibilidade</p>
                  {isPublic ? <p>Privacy: Público</p> : <p>Privacy: Privado</p>}
                </div>
                <div className="w-auto info-card p-2 mb-3">
                  <p className="title-repo">Descrição</p>
                  <p>Description: {repository.description}</p>
                </div>
                <div className="w-auto info-card p-2 mb-3">
                  <p className="title-repo">Endereço</p>
                  <p>HTML URL: {repository.html_url}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RepositoryDetail;
