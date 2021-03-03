import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useNavigate } from "react-router-dom";
import { CounterContext, CounterProvider } from "../../Contexts/Contexts";
import { useStyles } from "./style/LoginForm.style";
export default function Loginform() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CounterContext);
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: "login" });
    navigate("/Display");
  }
  return (
    <CounterProvider>
      <form style={{ textAlign: "center" }}>
        <AssignmentIndIcon className={classes.icon} />
        <div>
          <TextField
            className={classes.textField}
            label="帳號"
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={classes.textField}
            label="密碼"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.center}>
          <Button
            className={classes.button}
            //type="submit"
            onClick={handleClick}
            variant="contained"
            size="large"
            color="inherit"
            fullWidth={500}
          >
            登入
          </Button>
        </div>
      </form>
    </CounterProvider>
  );
}
