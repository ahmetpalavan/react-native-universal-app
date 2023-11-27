import { MediaType, RootObject } from '@/interfaces/apiresults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<RootObject> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=1`
  );
  const data = await response.json();
  return data;
};

export const getSearchResults = async (query: string, page: number = 1): Promise<RootObject> => {
  console.log('query', query);
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, mediaType: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
