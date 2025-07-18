import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PaymentIcon from "@material-ui/icons/Payment";
import EditIcon from "@material-ui/icons/Edit";

const generateClassName = createGenerateClassName({
  seed: "accountdetails",
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    backgroundColor: "#fafafa",
    minHeight: "calc(100vh - 64px)",
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    maxWidth: 600,
    margin: "0 auto",
  },
  title: {
    fontWeight: 600,
    color: "#333333",
    fontSize: "1.5rem",
    marginBottom: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  list: {
    padding: 0,
  },
  listItem: {
    padding: theme.spacing(2, 0),
    borderBottom: "1px solid #f5f5f5",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  listItemIcon: {
    minWidth: 40,
    color: "#666666",
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontWeight: 500,
      color: "#333333",
      fontSize: "0.95rem",
    },
    "& .MuiListItemText-secondary": {
      color: "#666666",
      fontSize: "0.9rem",
      marginTop: theme.spacing(0.5),
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: "#f0f0f0",
  },
  actionButton: {
    marginTop: theme.spacing(2),
    textTransform: "none",
    fontWeight: 500,
    borderRadius: 8,
    padding: theme.spacing(1, 2),
    backgroundColor: "#f8f9fa",
    color: "#333333",
    border: "1px solid #e9ecef",
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  },
}));

const AccountDetails = (props) => {
  const classes = useStyles();
  const [lastPaymentDate, setPaymentChanged] = useState("Jan 2021");

  props.emitter.on("paymentChanged", (date) => setPaymentChanged(date));

  const accountInfo = [
    {
      icon: <PersonIcon />,
      label: "Name",
      value: "Mahdi",
    },
    {
      icon: <PersonIcon />,
      label: "Username",
      value: "seyedmahdi",
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "seyedmahdijalali2020@gmail.com",
    },
    {
      icon: <CalendarTodayIcon />,
      label: "Member Since",
      value: "Jan 2021",
    },
    {
      icon: <PaymentIcon />,
      label: "Last Payment Changed",
      value: lastPaymentDate,
    },
  ];

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h5" className={classes.title}>
            <PersonIcon />
            Account Details
          </Typography>

          <List className={classes.list}>
            {accountInfo.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    secondary={item.value}
                    className={classes.listItemText}
                  />
                </ListItem>
                {index < accountInfo.length - 1 && (
                  <Divider className={classes.divider} />
                )}
              </React.Fragment>
            ))}
          </List>

          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            className={classes.actionButton}
            fullWidth
          >
            Change Account Details
          </Button>
        </Paper>
      </div>
    </StylesProvider>
  );
};

export default AccountDetails;
