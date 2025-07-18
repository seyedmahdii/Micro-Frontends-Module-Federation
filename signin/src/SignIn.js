import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {
  StylesProvider,
  createGenerateClassName,
  makeStyles,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  seed: "signin",
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    backgroundColor: "#fafafa",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    color: "#333333",
    fontSize: "1.75rem",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
    color: "#666666",
    fontSize: "0.95rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  label: {
    fontWeight: 500,
    color: "#333333",
    fontSize: "0.9rem",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      backgroundColor: "#fafafa",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
      "&.Mui-focused": {
        backgroundColor: "#ffffff",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e0e0e0",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d0d0d0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#666666",
    },
  },
  signInButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5),
    borderRadius: 8,
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    backgroundColor: "#333333",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#555555",
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const onSignIn = () => {
    window.sessionStorage.setItem("token", "dummy-token");
    navigate("/shop");
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="h4" className={classes.title}>
              Welcome Back
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Sign in to your account to continue
            </Typography>

            <form className={classes.form}>
              <div className={classes.fieldContainer}>
                <Typography className={classes.label}>Username</Typography>
                <TextField
                  id="username"
                  variant="outlined"
                  fullWidth
                  size="medium"
                  className={classes.textField}
                  value={formData.username}
                  onChange={handleInputChange("username")}
                  placeholder="Enter your username"
                />
              </div>

              <div className={classes.fieldContainer}>
                <Typography className={classes.label}>Password</Typography>
                <TextField
                  id="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  size="medium"
                  className={classes.textField}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  placeholder="Enter your password"
                />
              </div>

              <Button
                variant="contained"
                onClick={onSignIn}
                className={classes.signInButton}
                fullWidth
              >
                Sign In
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    </StylesProvider>
  );
};

export default SignIn;
