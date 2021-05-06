import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  rail: {
    opacity: 1,
    backgroundColor: "#e6e9ea",
    height: "3px",
    borderRadius: 0,
  },

  // "&.MuiSlider-thumb:not(.MuiSlider-active)": {
  //   transition:"left 3s ease-in",
  // },
  // "&.MuiSlider-track": {
  //   transition: "width 3s ease-in",
  // },
  slidertrack: {
    backgroundColor: "#81b29a",
    color: "#81b29a",
    borderRadius: 0,
 
  },
  sliderthumb: {
    "&:not(.MuiSlider-active)": {
      transition: "left 1s ease-in",
    },
    backgroundColor: "#81b29a",
    borderRadius: 0,
    // transition: "left 1s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  datalabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem 0",
    fontWeight: 500,
    lineHeight: 0,
  },
}));
export { useStyles };
