import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path) => {
  const res = await request.get(path);
  return res.data;
};

export const post = async (path, data, headers) => {
  const res = await request.post(path, data, headers);
  return res.data;
};

export default request;
