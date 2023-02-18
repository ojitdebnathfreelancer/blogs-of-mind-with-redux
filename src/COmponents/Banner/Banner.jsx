import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative ">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75  sm:to-black/50 "></div>
        <img
          className=" bg-cover bg-center bg-no-repeat w-full md:h-[500px] h-96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtTlL0xpYjeUC9CpBsrm8oUxqOJrLQC7oSQ&usqp=CAU"
          alt=""
        />
        <div className="text-gray-300 font-sans text-center absolute top-[40%] left-[22%]">
          <h4 className="md:text-7xl text-4xl capitalize">Welcome to <span>blogs of mind</span></h4>
          <p className="md:text-5xl text-3xl font-extrabold"> </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
