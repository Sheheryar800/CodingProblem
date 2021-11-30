import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SpeedIcon from '@material-ui/icons/Speed';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory, useLocation } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
      backgroundColor: '#fff',
      color: 'black',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawers: {
        backgroundColor: '#4e73df',
        height: '100vh',
        color: 'hsla(0,0%,100%,.8)',
        '& .MuiListItemIcon-root': {
            color: 'hsla(0,0%,100%,.8)'
        }
  },
  listitem: {
        marginTop: '20px',
        '& span': {
            fontWeight: 'bolder',
        },
        '&:hover': {
            color: '#fff'
        }
    },
    active: {
        color: '#fff',
    },
    icon: {
      minWidth: '40px !important'
    }
}));

function Sidebar(props) {
  const location = useLocation()
  const history = useHistory()
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawers}>
      <div className='text-center pt-3 text-light'>
          <h2>Inventry ERP</h2>
      </div>
      <List>
        <ListItem onClick={function () {
          history.push('/')
        }} button className={location.pathname ==='/' ? clsx(classes.listitem, classes.active):classes.listitem} data-href='dashboard/'>
            <ListItemIcon><SpeedIcon /> </ListItemIcon>
            <ListItemText primary={'Dashboard'} />
        </ListItem>
        <ListItem onClick={function () {
          history.push('/invoice')
        }} button className={location.pathname ==='/invoice' ? clsx(classes.listitem, classes.active):classes.listitem} data-href='dashboard/'>
            <ListItemIcon><InsertDriveFileIcon /> </ListItemIcon>
            <ListItemText primary={'Invoice'} />
        </ListItem>
        <ListItem onClick={function () {
          history.push('/shipment')
        }} button className={location.pathname ==='/shipment' ? clsx(classes.listitem, classes.active):classes.listitem} data-href='dashboard/'>
            <ListItemIcon><LocalShippingIcon /> </ListItemIcon>
            <ListItemText primary={'Shipments'} />
        </ListItem>
        <ListItem onClick={function () {
          history.push('/login')
        }} button className={location.pathname ==='/login' ? clsx(classes.listitem, classes.active):classes.listitem} data-href='dashboard/'>
            <ListItemIcon><AccountCircleIcon /> </ListItemIcon>
            <ListItemText primary={'Login'} />
        </ListItem>
    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [menueOpen, setMenueOpen] = React.useState(null);

  const handleClick = (event) => {
    setMenueOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenueOpen(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <div className='ml-auto'>
            <IconButton color="primary" aria-haspopup="true" onClick={handleClick} component="span">
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={menueOpen}
              keepMounted
              elevation={0}
              getContentAnchorEl={null}
              open={Boolean(menueOpen)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'start',
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon className={classes.icon}>
                  <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
        <Hidden smDown implementation="css">
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

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
