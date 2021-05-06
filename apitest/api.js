import axios from "axios";
import moment from "moment";
const api = axios.create({
  baseURL: "http://127.0.0.1:8080",
});

const start = moment(new Date()).format("YYYY-MM-DD-HH");
const end = moment(+new Date() + 10 * 3600 * 1000).format("YYYY-MM-DD-HH");
export const getHistory = async () => {
  const { data } = await api.get("api/status", {
    params: {
      start: start,
      end: end,
    },
  });
  return data;
};
export const getStatus = async () => {
  const { data } = await api.get("api/status");
  return data;
};
export const getSetting = async () => {
  const { data } = await api.get("api/setting");
  return data;
};
export const getPhoto = async () => {
  const { data } = await api.get("api/photos/list", {
    params: {
      limit: 50,
    },
  });
  return data;
};
export const updateSetting = async (datas) => {
  const { data } = await api.post("api/setting", datas, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err.response);
//     })
