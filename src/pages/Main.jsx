import React from "react";
import { Navbar, Header, TopOffers, About, Faq } from "../containers";

const Main = () => {
  const backgroundStyles = {
    position: "relative",
    backgroundImage:
      "url(https://assets.website-files.com/616d317372b9aa82983a918f/63dce0cd217c671f51c31e6c_HC19-min.webp)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <main>
      <div style={backgroundStyles} className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-text bg-opacity-50"></div>
        <div className="relative z-10 min-h-[90vh]">
          <Navbar />
          <Header />
        </div>
      </div>
      <TopOffers />
      <About />
      <Faq />
    </main>
  );
};

export default Main;
