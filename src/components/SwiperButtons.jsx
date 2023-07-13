import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachEnd", function () {
      setIsEnd(true);
    });
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);
  return (
    <div className="w-full absolute top-[50%] translate-y-[-50%] flex item-center justify-between z-10">
      <button
        className={`${
          isBeginning ? "opacity-0" : "opacity-100"
        } ml-2 absolute -left-0 -top-[1.9rem] text-6xl text-gray-300 hover:text-white transition-all duration-500`}
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack />
      </button>
      <button
        className={`${
          isEnd ? "opacity-0" : "opacity-100"
        } mr-2 absolute right-0 -top-[1.9rem] text-6xl text-gray-300 hover:text-white transition-all duration-500`}
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SwiperButtons;
