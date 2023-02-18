import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogsDetails = () => {
  const blogDetails = useLoaderData();
  const { title, img, description } = blogDetails;
  return (
    <header>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0">
            <img
              className="w-full h-full lg:max-w-lg"
              src={img}
              alt="Catalogue-pana.svg"
            />
          </div>
          <div className="w-full">
            <div>
              <h1 className="text-2xl font-semibold text-black lg:text-3xl lg:mt-0 mt-3">
                {title}
              </h1>
              <p className="mt-1 text-black">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogsDetails;
