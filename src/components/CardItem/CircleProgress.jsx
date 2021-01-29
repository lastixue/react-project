import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleProgress({ title, value }) {
  return (
    <>
      <div>
        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={15}
          styles={buildStyles({
            pathColor: "#81b29a",
            trailColor: "#DFECE1",
          })} //"#B3C6AC"
        >
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <Typography variant="h5">{title}</Typography>
          <div style={{ fontSize: 12, marginTop: 5 }}>
            <Typography component="span" variant="h6">
              {value}
            </Typography>
            %
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}
export default CircleProgress;
