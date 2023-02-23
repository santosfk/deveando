import axios from "axios";
const baseUrl = "https://63f6b97c59c944921f786bcb.mockapi.io/hearts";
const getHearts = async () => {
  try {
    const data: number = await axios.get(baseUrl);
    return data;
  } catch (e) {
    console.log(e);
  }
};
const addHeart = async (hearts: number) => {
  const data = await axios.post(baseUrl, hearts);
};
export { getHearts, addHeart };
