import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import { api, getManual } from "../../../apitest/api";

//手動操作表單
function Manual({ tname, module }) {
  const [auto, setAuto] = useState(false);
  //const [statuss, setStatuss] = useState(false);
  let modules = { module };
  // const { data, status, error } = useQuery(
  //   ["manual", modules, +statuss],
  //   getManual
  // );
  // {
  //   status === "success" && console.log(data);
  // }
  // useEffect(() => {
  //   if (auto) {
  //     setStatuss(true);
  //   } else {
  //     setStatuss(false);
  //   }
  // }, [auto]);

  useEffect(() => {

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  useEffect(() => {
    api.get(`/api/${module}?ison=${+auto}`)
    api.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  },[module, auto])

  const handleUnload = (e) => {
    e.preventDefault();
    module = "module";
    setAuto(false);
  };
  const handleChange = async (e) => {
    setAuto(e.target.checked);
    
  };
  return (
    <form style={{ justifyContent: "center" }} onSubmit={handleChange}>
      <Typography variant="h5">{tname}</Typography>
      <Toggle
        value={auto}
        Change={(e) => {
          setAuto(e.target.checked);
        }} //, handleChange()
        auto={auto}
        checked={auto}
      />
      {/* {console.log(statuss)} */}
      {/* <button type="submit">test</button> */}
    </form>
  );
}
export default Manual;
