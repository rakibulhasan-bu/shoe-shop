import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Banner from "./Banner";
import SingleProduct from "./SingleProduct";

const Main = () => {
  const products = useFetch("/products");

  console.log(products);
  return (
    <div>
      <Banner />
      <div
        id="collections"
        className="grid grid-cols-4 gap-5 container mx-auto"
      >
        {products?.data?.data?.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
