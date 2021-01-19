import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';//整合icon 與 listitemcontext 為 data.js
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import {useStyles} from './SideDrawer.style';
import {stockData} from './Data';
//建立path 列表名稱 icon data
//折衷方式不使用map叫資料 最後手段
function ResponsiveDrawer() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //[{ text: '各項數據', url: '/', icon: AssignmentOutlinedIcon},{ text: '自動操作', url: '/inbox', icon: InvertColorsIcon},{ text: '手動操作', url: '/', icon: BuildIcon},{ text: '縮時錄影', url: '/inbox', icon: CameraAltIcon}]
  const drawer = (
    <div className={classes.toolbar}>
    <List className={classes.marginT}>
    {stockData.map((item, index) => (
      // <Link to={item.to}>  //component={Link} to={item.to}
          <ListItem component={Link} to={item.to} className={classes.marginT}button key={item.label}>
            <ListItemIcon className={classes.marginl}>{<item.icon/>}</ListItemIcon>
            <ListItemText className={classes.center} primary={item.label} />
          </ListItem>
    //  </Link>
     ))}
  </List>
  </div>

  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smUp>
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
        
        <Hidden smUp implementation="css">
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
        <Hidden xsDown implementation="css">
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
  );
}

export default ResponsiveDrawer;