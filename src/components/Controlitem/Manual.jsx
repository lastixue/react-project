import React, { useState } from "react";
import Toggle from "./Toggle";
import { Typography } from "@material-ui/core";
//手動操作表單
function Manual({ tname }) {
  const [auto, setAuto] = useState(false);
  return (
    <form style={{justifyContent:"center"}}>
      <Typography variant="h5">{tname}</Typography>
      <Toggle
        value={auto}
        Change={(e) => setAuto(e.target.checked)}
        auto={auto}
      />
    </form>
  );
}
export default Manual;
