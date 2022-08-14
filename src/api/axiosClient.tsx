import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "https://adm.dgtt.ospgroup.vn/dgtt-admin"
});

export const get = async (path: string): Promise<any> => {
  const res = await request.get(path);
  // console.log(typeof res.data)
  return res.data;
};

export const post = async (path: string, data: object, headers: object): Promise<any> => {
  const res = await request.post(path, data, headers);
  // console.log(typeof res.data)
  return res.data;
};


export default request;
