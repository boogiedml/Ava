import React from "react";
import { Button } from "../components";

const Navbar = () => {
  return (
    <section className="py-6 px-16 flex justify-between items-center">
      <div>Ava</div>
      <div className="flex items-center gap-5">
        <Button
          name="Become a member"
          backgroundColor="bg-main text-sub"
        />
        <Button name="Log In" backgroundColor="bg-sub text-text" />
      </div>
    </section>
  );
};

export default Navbar;
