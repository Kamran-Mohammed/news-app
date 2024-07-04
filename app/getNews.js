import axios from "axios";
const apiKey = "9b031578b54f48b99e68ef3937fbff97";
const getNews = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=${Your_apikey}`);
};
// export default {
//   getNews,
//   searchedNews,
// };
export default getNews;
