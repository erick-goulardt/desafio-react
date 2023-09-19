import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { UserRepoInfo } from "../pages/UserRepoInfo";
import RepositoryDetail from "../pages/RepoDetail";

export function TreeRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:id" element={<UserRepoInfo />} />
          <Route path="/repositories/:username/:name" element={<RepositoryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
