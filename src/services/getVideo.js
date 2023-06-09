import axios from "axios";

const Base_Url = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "18",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getVideoApi = async (url) => {
  const { data } = await axios.get(`${Base_Url}/${url}`, options);

  return data;
};
