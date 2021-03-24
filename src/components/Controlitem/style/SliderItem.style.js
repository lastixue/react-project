import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  rail: {
    opacity: 1,
    backgroundColor: "#e6e9ea",
    height: "3px",
    borderRadius: 0,
  },
  track: {
    backgroundColor: theme.palette.grey[500],
    borderRadius: 0,
  },
  slidertrack: {
    backgroundColor: "#81b29a",
    color: "#81b29a",
    borderRadius: 0,
  },
  sliderthumb: {
    backgroundColor: "#81b29a",
    borderRadius: 0,
  },
  checked: {},
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
