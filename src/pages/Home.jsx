import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import Products from "./../components/Products";
import Services from "../components/Services";
import Gallery from "../components/Gallery";


const Home = () => {
  const [cartCount, setCartCount] = useState([]);

  function HandlerAddCart(itemdata) {
    setCartCount([...cartCount, itemdata]);

    const existingItem = cartCount.find((i) => i.id === itemdata.id);

    console.log("extring item is equal to " + existingItem);

    if (existingItem) {
      setCartCount([...cartCount, (cartCount.quantity = 1)]);

      console.log(cartCount);

      const specificitem = existingItem.quantity++;
      setCartCount([...cartCount, (cartCount.quantity = specificitem)]);
      console.log(existingItem + " is : " + specificitem);
    } else {
      console.log();
    }
  }
  return (
    <Layout>
      <div>
        <Products HandlerAddCart={HandlerAddCart} />
        <Services/>
        <Gallery/>
      </div>
    </Layout>
  );
};

export default Home;
