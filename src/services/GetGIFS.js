import { useFetch } from "../util/useFetch";
import { API_KEY } from "../util/constants";

export const GetGIFS = searchParam => {
  const giphyURL = `http://api.giphy.com/v1/gifs/search?q=${searchParam}&api_key=${API_KEY}&limit=10`;
  const [data, loading] = useFetch(giphyURL);

  return [data.data, loading];
};
