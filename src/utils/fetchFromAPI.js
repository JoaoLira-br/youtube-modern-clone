import axios from 'axios';
import { BASE_URL, API_KEY } from '../config';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    // console.log(`env ${API_KEY}`);
    // console.log(`fet ching from api ${BASE_URL}/${url}, options: ${options.headers['x-rapidapi-key']}`);
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}