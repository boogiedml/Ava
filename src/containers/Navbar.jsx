import React from "react";
import { Button } from "../components";

const Navbar = () => {
  return (
    <section className="py-8 mx-6 md:mx-9 lg:mx-11 xl:mx-16 flex justify-between items-center">
      <div className="text-main font-semibold text-lg md:text-xl lg:text-2xl">
        A<span className="text-white">v</span>a
      </div>
      <div className="flex items-center gap-5">
        <Button
          name="Become a member"
          backgroundColor="hidden lg:block bg-main text-sub"
        />
        <Button name="Log In" backgroundColor="bg-sub text-text" />
      </div>
    </section>
  );
};

export default Navbar;
