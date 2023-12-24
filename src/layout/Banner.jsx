import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-slate-100 w-full min-h-[90dvh] flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 px-5">
        <div className="flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" flex flex-col text-left"
          >
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-left text-slate-800">
              A pair of trousers and a t-shirt that you need
            </h1>
            <p className="mb-5 text-base lg:text-xl text-slate-800 text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              similique aperiam aspernatur reprehenderit natus omnis nostrum
              dolores. Eos cumque eaque repudiandae corpo
            </p>
            <div>
              <button className=" bg-black px-8 border-2 border-black hover:bg-white duration-500 hover:text-black py-2 rounded-sm font-medium text-lg text-white">
                Shop now
              </button>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.img
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={
              "https://res.cloudinary.com/dsb7txoad/image/upload/v1703430613/website%20assets/domino-164_6wVEHfI-unsplash-removebg-preview_ylhgbc.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
