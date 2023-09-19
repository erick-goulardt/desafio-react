import { RepoType } from "../components/ListRepo";
import { API, APIRepo } from "./api";

export async function getUsername(username : string) {
  try {
    const { data } = await API.get(`/${username}`);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRepositories(username: string, page: number) {
  try {
    const perPage = 3; 
    const { data } = await API.get(`/${username}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRepositoryByName(login: string, name: string): Promise<RepoType | null> {
  try {
    const { data } = await APIRepo.get(`/${login}/${name}`);
    console.log('Data from API:', data)
    return data;
  } catch (error) {
    console.log(error);
  }
}