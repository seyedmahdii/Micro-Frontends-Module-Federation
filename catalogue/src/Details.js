import React from "react";
import { Link, useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { catalogueData } from "./Home";

const generateClassName = createGenerateClassName({
  seed: "catalogue-details",
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
  },
  productImage: {
    width: "100%",
    maxWidth: 400,
    height: "auto",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  productInfo: {
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingTop: theme.spacing(3),
    },
  },
  productName: {
    fontWeight: 600,
    color: "#333333",
    fontSize: "2rem",
    marginBottom: theme.spacing(2),
  },
  productPrice: {
    fontWeight: 600,
    color: "#666666",
    fontSize: "1.5rem",
    marginBottom: theme.spacing(3),
  },
  productId: {
    color: "#999999",
    fontSize: "0.9rem",
    marginBottom: theme.spacing(3),
  },
  description: {
    color: "#666666",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(2),
    flexWrap: "wrap",
  },
  backButton: {
    textTransform: "none",
    fontWeight: 500,
    borderRadius: 8,
    padding: theme.spacing(1, 2),
    backgroundColor: "#f8f9fa",
    color: "#333333",
    border: "1px solid #e9ecef",
    marginBottom: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  },
  addToCartButton: {
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
}));

const Details = () => {
  const classes = useStyles();
  const { productId } = useParams();

  // Find the product data based on the ID
  const product = catalogueData.find(
    (item) => item.id.toString() === productId
  );

  if (!product) {
    return (
      <StylesProvider generateClassName={generateClassName}>
        <div className={classes.container}>
          <Paper className={classes.paper} elevation={0}>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: "#666666" }}
            >
              Product not found
            </Typography>
            <div style={{ textAlign: "center", marginTop: theme.spacing(2) }}>
              <Button
                component={Link}
                to="/shop"
                startIcon={<ArrowBackIcon />}
                className={classes.backButton}
              >
                Back to Products
              </Button>
            </div>
          </Paper>
        </div>
      </StylesProvider>
    );
  }

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className={classes.container}>
        <Button
          component={Link}
          to="/shop"
          startIcon={<ArrowBackIcon />}
          className={classes.backButton}
        >
          Back to Products
        </Button>

        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={product.image}
                alt={product.productName}
                className={classes.productImage}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.productInfo}>
                <Typography variant="h4" className={classes.productName}>
                  {product.productName}
                </Typography>
                <Typography variant="h5" className={classes.productPrice}>
                  {product.cost}
                </Typography>
                <Typography variant="body2" className={classes.productId}>
                  Product ID: {product.id}
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  {product.description}
                </Typography>
                <div className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    className={classes.addToCartButton}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </StylesProvider>
  );
};

export default Details;
