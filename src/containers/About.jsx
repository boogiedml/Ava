import React from "react";
import { Button } from "../components";
import dummy from "../assets/dummy.jpg";
import discount from "../assets/discount.svg";
import hotel from "../assets/hotel.svg";
import location from "../assets/location.svg";

const About = () => {
  const how = [
    {
      img: discount,
      text: "Stay in more than 500 hotels with 30-50% discount",
    },
    {
      img: hotel,
      text: "From simple Bed & Breakfast to 5* luxury hotel",
    },
    {
      img: location,
      text: "From A for Ascona to Z for Zermatt",
    },
  ];
  return (
    <section className="my-8 mx-6 md:mx-9 lg:mx-11 xl:mx-16 pt-28 flex flex-col xl:flex-row">
      <div className="basis-1/3 mb-8 xl:mb-0">
        <h2 className="text-2xl md:text-3xl xl:text-4xl text-text font-semibold mb-8">
          How Avacard works
        </h2>
        <Button
          name="Learn More"
          backgroundColor="bg-main text-sub rounded-full px-10"
        />
      </div>
      <div className="basis-2/3">
        <div className="max-w-lg">
          <p className="text-sm text-text leading-6">
            For partner hotels, participation in Hotelcard programme is free of
            charge. In return they grant Avacard holders up to 50% discount if
            they have available rooms.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {how.map((h, i) => (
            <div key={h.img + i} className="flex flex-col gap-7 text-center sm:text-left">
              <div className="w-52 h-52 bg-text bg-opacity-20 rounded-full">
                <img
                  className="w-full h-full object-contain rounded-full"
                  src={h.img}
                  alt={h.img + i}
                />
              </div>
              <p className="text-base font-semibold text-text">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
