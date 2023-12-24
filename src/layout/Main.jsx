import styled from "styled-components";
import Product from "./Product";
import Banner from "./Banner";

import Footer from "./Footer";
import SingleProduct from "./SingleProduct";
const Main = () => {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 gap-5 container mx-auto">
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
        <SingleProduct></SingleProduct>
      </div>
      <Product />
      <Footer />
    </div>
  );
};

export default Main;
