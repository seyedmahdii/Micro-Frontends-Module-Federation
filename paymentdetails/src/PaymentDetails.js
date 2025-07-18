import React from "react";
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
import PaymentIcon from "@material-ui/icons/Payment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import HistoryIcon from "@material-ui/icons/History";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const generateClassName = createGenerateClassName({
  seed: "paymentdetails",
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
    marginTop: theme.spacing(1),
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
  primaryButton: {
    marginTop: theme.spacing(1),
    textTransform: "none",
    fontWeight: 500,
    borderRadius: 8,
    padding: theme.spacing(1, 2),
    backgroundColor: "#333333",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#555555",
    },
  },
}));

const PaymentDetails = (props) => {
  const classes = useStyles();

  const onPaymentChanged = () => {
    props.emitter.emit("paymentChanged", new Date().toString());
  };

  const paymentInfo = [
    {
      icon: <CreditCardIcon />,
      label: "Payment Method",
      value: "Credit Card",
    },
  ];

  const paymentActions = [
    {
      icon: <SwapHorizIcon />,
      label: "Change Payment Method",
      description: "Switch to PayPal",
      onClick: onPaymentChanged,
      variant: "primary",
    },
    {
      icon: <HistoryIcon />,
      label: "View Payment History",
      description: "See all your past payments",
      onClick: () => {},
      variant: "secondary",
    },
  ];

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h5" className={classes.title}>
            <PaymentIcon />
            Payment Details
          </Typography>

          <List className={classes.list}>
            {paymentInfo.map((item, index) => (
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
                <Divider className={classes.divider} />
              </React.Fragment>
            ))}

            {paymentActions.map((action, index) => (
              <React.Fragment key={index}>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    {action.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={action.label}
                    secondary={action.description}
                    className={classes.listItemText}
                  />
                  <Button
                    variant={
                      action.variant === "primary" ? "contained" : "outlined"
                    }
                    onClick={action.onClick}
                    className={
                      action.variant === "primary"
                        ? classes.primaryButton
                        : classes.actionButton
                    }
                    size="small"
                  >
                    {action.label}
                  </Button>
                </ListItem>
                {index < paymentActions.length - 1 && (
                  <Divider className={classes.divider} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </div>
    </StylesProvider>
  );
};

export default PaymentDetails;
