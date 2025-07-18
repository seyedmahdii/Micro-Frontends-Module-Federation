import React from "react";
import { useLocation } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Product from "./Product";

export const catalogueData = [
  {
    id: 123,
    productName: "Black no.1 T-Shirt",
    image: "http://localhost:3002/imgs/black1.jpeg",
    cost: "$3.99",
    description:
      "A comfortable and stylish black t-shirt made from premium cotton. Perfect for everyday wear with a modern fit and soft texture.",
  },
  {
    id: 234,
    productName: "Black no.2 T-Shirt",
    image: "http://localhost:3002/imgs/black2.jpeg",
    cost: "$4.99",
    description:
      "Classic black t-shirt with enhanced durability and breathability. Features a relaxed fit and is perfect for casual outings.",
  },
  {
    id: 456,
    productName: "White T-Shirt",
    image: "http://localhost:3002/imgs/white.jpeg",
    cost: "$5.99",
    description:
      "Crisp white t-shirt with a clean, minimalist design. Made from high-quality cotton for maximum comfort and style.",
  },
];

const generateClassName = createGenerateClassName({
  seed: "catalogue",
});

const Home = () => {
  let location = useLocation();
  let path = location.pathname;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        {catalogueData.map((item) => {
          return (
            <Product
              key={item.id}
              data={item}
              url={`${path}/product/${item.id}`}
            />
          );
        })}
      </div>
    </StylesProvider>
  );
};

export default Home;
