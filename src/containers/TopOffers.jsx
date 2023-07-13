import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PropertyCard, SwiperButtons } from "../components";

// Import Swiper styles
import "swiper/css";
import useMediaQuery from "../utils/useMediaQuery";

const TopOffers = () => {
  const topOffers = [
    {
      img: "https://a0.muscache.com/im/pictures/fdd37f6c-1c68-497d-8071-0265617f35a5.jpg?im_w=720",
      title: "El Pajar, Spain",
      distance: "3,108",
      duration: "5 nights, · Aug 28 – Sep 2",
      price: "2,847",
      star: "4.89",
    },
    {
      img: "https://a0.muscache.com/im/pictures/e17c7207-25e4-4824-a03b-d2b66847ebed.jpg?im_w=720",
      title: "Lekki, Nigeria",
      distance: "7",
      duration: "7 nights, · Jul 10 – 17",
      price: "2,396",
    },
    {
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-53064539/original/e56c9c04-dc46-4f92-9018-c09ca519494d.jpeg?im_w=720",
      title: "San Bartolomé de Tirajana, Spain",
      distance: "3,108",
      duration: "5 nights, · Aug 28 – Sep 2",
      price: "466",
      star: "4.87",
    },
    {
      img: "https://a0.muscache.com/im/pictures/ea432e2b-c3ef-44c1-873d-b01967c54263.jpg?im_w=720",
      title: "Ngaparou, Senegal",
      distance: "2,403",
      duration: "7 nights, · Sep 4 – 11",
      price: "948",
      star: "4.86",
    },
    {
      img: "https://a0.muscache.com/im/pictures/71c7620d-9f65-46ff-a07e-5146e6dfcfe0.jpg?im_w=720",
      title: "Kwabenya/Accra, Ghana",
      distance: "410",
      duration: "Aug 15 – 20",
      price: "50 night",
      star: "4.91",
    },
    {
      img: "https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720",
      title: "Balian Beach, Indonesia",
      distance: "2,403",
      duration: "Sep 15 – 21",
      price: "119 night",
      star: "4.85",
    },
  ];

const isLargeScreen = useMediaQuery("(min-width: 1200px)");
const isMediumScreen = useMediaQuery(
  "(max-width: 1199px) and (min-width: 920px)"
);
const isSmallScreen = useMediaQuery("(max-width: 639px)");

const slidesPerView = isLargeScreen
  ? 4
  : isMediumScreen
  ? 3
  : isSmallScreen
  ? 1
  : 2;



  return (
    <section className="my-8 mx-6 md:mx-9 lg:mx-11 xl:mx-16">
      <h2 className="text-4xl text-text font-semibold">Top offers</h2>
      <div className="mt-7">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          className="grid grid-cols-4 gap-8"
        >
          {topOffers.map((p, i) => (
            <SwiperSlide key={p.title + i}>
              <PropertyCard property={p} />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default TopOffers;
