import React from "react";
import { Link } from "react-router-dom";
import { createNanoEvents } from "nanoevents";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import InputIcon from "@material-ui/icons/Input";

const AccountDetails = React.lazy(() =>
  import("AccountDetails/AccountDetails")
);
const PaymentDetails = React.lazy(() =>
  import("PaymentDetails/PaymentDetails")
);

const generateClassName = createGenerateClassName({
  seed: "myaccount",
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    backgroundColor: "#fafafa",
    minHeight: "calc(100vh - 64px)",
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    maxWidth: 500,
    margin: "0 auto",
    textAlign: "center",
  },
  icon: {
    fontSize: 64,
    color: "#666666",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    color: "#333333",
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  message: {
    color: "#666666",
    fontSize: "1rem",
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
  },
  signInButton: {
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: 8,
    padding: theme.spacing(1.5, 3),
    backgroundColor: "#333333",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#555555",
    },
  },
  authenticatedContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
}));

const AuthenticatedView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.authenticatedContainer}>
      <React.Suspense fallback="Loading...">
        <AccountDetails emitter={props.emitter} />
        <PaymentDetails emitter={props.emitter} />
      </React.Suspense>
    </div>
  );
};

const UnauthenticatedView = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={0}>
        <LockIcon className={classes.icon} />
        <Typography variant="h5" className={classes.title}>
          Access Restricted
        </Typography>
        <Typography variant="body1" className={classes.message}>
          You need to sign in to access your account details and payment
          information.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          startIcon={<InputIcon />}
          className={classes.signInButton}
        >
          Sign In
        </Button>
      </Paper>
    </div>
  );
};

const MyAccount = () => {
  const token = window.sessionStorage.getItem("token");
  let view;

  if (token) {
    const emitter = createNanoEvents();
    view = <AuthenticatedView emitter={emitter} />;
  } else {
    view = <UnauthenticatedView />;
  }

  return (
    <StylesProvider generateClassName={generateClassName}>
      {view}
    </StylesProvider>
  );
};

export default MyAccount;
