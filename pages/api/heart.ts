import axios from "axios";
import { Heart } from "../../src/types/heart";
const baseUrl = "https://63f6b97c59c944921f786bcb.mockapi.io/hearts";
const getHearts = async () => {
  try {
    const data: Heart[] = await (await axios.get(baseUrl)).data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
const addHeart = async (hearts: Heart) => {
  const data = await axios.post(baseUrl, hearts);
};
const updateHeart = async (heart: Heart) => {
  await axios.put(`${baseUrl}/${heart.id}`, heart);
};
export { getHearts, addHeart, updateHeart };
