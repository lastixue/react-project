import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../../Contexts/Contexts";
import { useStyles } from "./style/LoginForm.style";
function Loginform() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CounterContext);
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (account === "user" && password === "pwd") {
      dispatch({ type: "login" });
      navigate("/");
    } else {
      alert("error");
    }
  };
  return (
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      <AssignmentIndIcon className={classes.icon} />
      <div>
        <TextField
          className={classes.textField}
          label="帳號"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          label="密碼"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={classes.center}>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          size="large"
          color="inherit"
          fullWidth
        >
          登入
        </Button>
      </div>
    </form>
  );
}
export default Loginform;
