import styled from "styled-components";
import Product from "./Product";
import Banner from "./Banner";
import SingleProduct from "./singleProduct";
import Footer from "./Footer";
const Main = () => {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 gap-5">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
      {/* <Product /> */}
      <Footer />
    </div>
  );
};

export default Main;
