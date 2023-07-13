import React from "react";
import { AccommodationSearch } from "../components";

const Header = () => {
  return (
    <div className="pt-40 pb-52 px-16">
      <div className="max-w-xl text-center mx-auto mb-10">
        <h1 className=" text-3xl md:text-4xl xl:text-5xl text-sub">
          The best hotel deals in the world{" "}
          <span className="h-2 w-2 xl:h-4 xl:w-4 inline-block bg-[#F64E4D] rounded-full"></span>
        </h1>
      </div>
      <AccommodationSearch />
    </div>
  );
};

export default Header;
