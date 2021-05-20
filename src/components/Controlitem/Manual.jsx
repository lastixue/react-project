import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import { getManual } from "../../../apitest/api";
//手動操作表單
function Manual({ tname, module }) {
  const [auto, setAuto] = useState(true);
  const [statuss, setStatuss] = useState(0);
  let modules = { module };
  const { data, status, error } = useQuery(
    ["manual", modules, statuss],
    getManual
  );
  {
    status === "success" && console.log(data);
  }
  useEffect(() => {
    if (auto) {
      setStatuss(1);
    } else {
      setStatuss(0);
    }
  }, [auto]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  const handleUnload = (e) => {
    e.preventDefault();
    module = "module";
    setStatuss(0);
  };
  const handleChange = async (e) => {
    setAuto(e.target.checked);
  };

  console.log(statuss);
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
      {console.log(statuss)}
      {/* <button type="submit">test</button> */}
    </form>
  );
}
export default Manual;
