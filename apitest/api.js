import axios from "axios";
import moment from "moment";
export const api = axios.create({
  baseURL: window.location.origin,
});
// + 10 * 3600 * 1000
const start =  moment(new Date()).subtract(24, 'hours').utc().format("YYYY-MM-DD-HH")
const end = moment(new Date()).format("YYYY-MM-DD-HH");
const weekStart = moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD-HH')
export const getHourHistory = async () => {
  const { data } = await api.get("api/status", {
    params: {
      start: start,
      end: end,
    },
  });
  return data;
};
export const getWeekHistory = async () => {
  const { data } = await api.get("api/status", {
    params: {
      start: weekStart,
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
export const getGif = async () => {
  const { data } = await api.get("/api/photos/gif")
  return data;
};

export const getManual = async (module, ison) =>{
  const { data } = await api.get(`/api/${module}?ison=${ison}`)
  return data;
}
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err.response);
//     })
