import {useState, useEffect} from 'react';
import axios from "axios";

export interface IContributor {
  login?: string;
  avatar_url?: string;
}

const githubAPI = axios.create({
  baseURL: `https://api.github.com/repos/chainsafe/lodestar/`,
  timeout: 1000,
})

const isTimeToReFetch = (lastFetch: number): boolean => {
  const timeNow = Date.now();
  const minutesToAllowReFetch = 5;
  return lastFetch + minutesToAllowReFetch * 60 * 1000 < timeNow;
};

const getContributors = async ():Promise<IContributor[]> => {
  try { const response = await githubAPI.get('/contributors');
    const contributorList = response.data;

    const lastFetch = Date.now();

    const storedData = {
      lastFetchTimeStamp: lastFetch,
      contributors: contributorList,
    }

    localStorage.setItem('Lodestar_Contributors', JSON.stringify(storedData))

    return contributorList;
  } catch {
    return [];
  }
}

export const useContributors = () => {
  const [contributors, setContributors] = useState<IContributor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const storedContributorData = localStorage.getItem('Lodestar_Contributors');

      if (storedContributorData !== null) {
        const cached = JSON.parse(storedContributorData);

        if (isTimeToReFetch(cached.lastFetchTimeStamp)) {
          const contributors = await getContributors();
          setContributors(contributors)
        } else {
          setContributors(cached.contributors)
        }
      } else {
        const contributors = await getContributors();
        setContributors(contributors);
      }
      setLoading(false);
    })();
  }, [])
  
  return {contributors, loading};
}
