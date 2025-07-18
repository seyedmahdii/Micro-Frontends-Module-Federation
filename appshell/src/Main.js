import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ViewListIcon from "@material-ui/icons/ViewList";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Catalogue = React.lazy(() => import("Catalogue/Catalogue"));
const SignIn = React.lazy(() => import("SignIn/SignIn"));
const MyAccount = React.lazy(() => import("MyAccount/MyAccount"));

const drawerWidth = 280;

const generateClassName = createGenerateClassName({
  seed: "appshell",
});

const renderMFE = (MFE) => {
  return (
    <React.Suspense fallback="Loading...">
      <MFE />
    </React.Suspense>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ffffff",
    color: "#333333",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    borderBottom: "1px solid #f0f0f0",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#666666",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.04)",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#fafafa",
    borderRight: "1px solid #f0f0f0",
    boxShadow: "2px 0 8px rgba(0,0,0,0.06)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 3),
    minHeight: 64,
    justifyContent: "flex-end",
    borderBottom: "1px solid #f0f0f0",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor: "#ffffff",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navItem: {
    margin: theme.spacing(0.5, 2),
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.04)",
    },
  },
  navLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    width: "100%",
  },
  navIcon: {
    color: "#666666",
    minWidth: 40,
  },
  navText: {
    color: "#333333",
    fontWeight: 500,
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: "#f0f0f0",
  },
  tokenSection: {
    padding: theme.spacing(2, 3),
    borderTop: "1px solid #f0f0f0",
  },
  tokenButton: {
    backgroundColor: "#f8f9fa",
    color: "#333333",
    border: "1px solid #e9ecef",
    borderRadius: 6,
    textTransform: "none",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  },
  tokenField: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      borderRadius: 6,
    },
  },
  appTitle: {
    fontWeight: 600,
    color: "#333333",
    fontSize: "1.1rem",
  },
}));

const Main = () => {
  const [theToken, setToken] = useState("");

  const onRetrieveToken = () => {
    setToken(window.sessionStorage.getItem("token"));
  };

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.appTitle}>
              Gadgets Shop
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <List>
            <ListItem button key="SignIn" className={classes.navItem}>
              <Link to="/" className={classes.navLink}>
                <ListItemIcon className={classes.navIcon}>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Sign In" className={classes.navText} />
              </Link>
            </ListItem>
            <ListItem button key="Catalogue" className={classes.navItem}>
              <Link to="/shop" className={classes.navLink}>
                <ListItemIcon className={classes.navIcon}>
                  <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Catalogue" className={classes.navText} />
              </Link>
            </ListItem>
            <ListItem button key="My Account" className={classes.navItem}>
              <Link to="/myaccount" className={classes.navLink}>
                <ListItemIcon className={classes.navIcon}>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="My Account"
                  className={classes.navText}
                />
              </Link>
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <div className={classes.tokenSection}>
            <Button
              variant="outlined"
              onClick={onRetrieveToken}
              className={classes.tokenButton}
              fullWidth
            >
              Get Token
            </Button>
            <TextField
              id="standard-read-only-input"
              label="Token"
              value={theToken}
              variant="outlined"
              size="small"
              fullWidth
              className={classes.tokenField}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes>
            <Route exact path="/myaccount" element={renderMFE(MyAccount)} />
            <Route path="/shop" element={renderMFE(Catalogue)} />
            <Route path="/" element={renderMFE(SignIn)} />
          </Routes>
        </main>
      </div>
    </StylesProvider>
  );
};

export default Main;
