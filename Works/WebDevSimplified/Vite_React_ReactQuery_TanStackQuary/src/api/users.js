import axios from "axios";

export async function getUser(id) {
  const res = await axios.get(`http://localhost:5173/users/${id}`);
  return res.data;
}
