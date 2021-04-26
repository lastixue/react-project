import React, { useState, useContext } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Toolbar,
} from "@material-ui/core";
// import Alert from '@material-ui/lab/Alert';
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "./style/SideDrawer.style";
import { NavData } from "./NavData";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { CounterContext } from "../../Contexts/Contexts";
function ResponsiveDrawer() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CounterContext);
  // function askPermission(evt) {
  //   Notification.requestPermission().then(function (permission) {
  //     //notificationButtonUpdate();
  //   });
  // }
  // function notificationButtonUpdate(){
  //   if (Notification.permission='granted'){
  //       document.getElementsByTagName('Button').disabled=true;
  //   }else{
  //     document.getElementsByTagName('Button').disabled=false;
  //   }
  // }
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useSessionStorage("test","/");
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [alert,setAlert]=useState(true);
  //設置 selected 位置
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedIndex("/");
    dispatch({ type: "logout" });
    navigate("/");
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //導航欄資訊
  const drawer = (
    <div className={classes.toolbar}>
      {/* <Button onClick={askPermission}>通知</Button> */}
      {/* <Collapse in={alert}>
      <Alert severity="error" onClose={()=>{setAlert(false)}}>This is an error alert — check it out!</Alert>
      </Collapse> */}
      <aside className={state.loged ? classes.aside : classes.none}>
        <div>
          <AssignmentIndIcon className={classes.icon} />
        </div>
        <span style={{ justifyContent: "center" }}>
          <p>
            使用者名稱:<span>guest</span>
          </p>
          <p>
            使用狀態:<span>online</span>
          </p>
          </span>
          <div className={classes.marginRL}>
            <Button variant="outlined" className={classes.button}>修改密碼</Button>
            <Button variant="outlined" className={classes.button} onClick={handleClick}>
              登出
            </Button>
          </div>

      </aside>
      <List className={classes.marginT}>
        {Array.isArray(NavData) &&
          NavData.map((item, index) => (
            <ListItem
              className={classes.marginT}
              classes={{ selected: classes.selected }}
              selected={selectedIndex === item.to}
              component={Link}
              to={item.to}
              key={item.label}
              onClick={(event) => handleListItemClick(event, item.to)}
              button
            >
              <ListItemIcon className={classes.marginl}>
                {<item.icon />}
              </ListItemIcon>
              <ListItemText className={classes.center} primary={item.label} />
            </ListItem>
          ))}
      </List>
    </div>
  );
  return (
    <>
      {state.loged ? (
        <div>
          <CssBaseline />
          <Hidden mdUp>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Hidden>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown>
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export default ResponsiveDrawer;
