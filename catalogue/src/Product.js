import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 10,
    float: "left",
    padding: 8,
    textAlign: "center",
    width: 330,
    height: 350,
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: theme.shadows[8],
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
}));

const Product = (props) => {
  const classes = useStyles();

  return (
    <Link to={props.url} className={classes.link}>
      <Paper elevation={3} className={classes.paper}>
        <img src={props.data.image} width="300" />
        <div>
          <h2>{props.data.productName}</h2>
          <span>{props.data.cost}</span>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </div>
      </Paper>
    </Link>
  );
};

export default Product;
