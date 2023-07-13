import React, { useState } from "react";
import { PiPlusBold } from "react-icons/pi";

const Faq = () => {
  const [openedIndex, setOpenedIndex] = useState(null);
  const qAndA = [
    {
      q: "Is Hotelcard a subscription?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atquev omnis provident soluta debitis ipsam dicta nam, ducimus velit. tempore veniam!",
    },
    {
      q: "Can the membership be cancelled at any time?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atquev omnis provident soluta debitis ipsam dicta nam, ducimus velit. tempore veniam!",
    },
    {
      q: "When can I start using Hotelcard?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atquev omnis provident soluta debitis ipsam dicta nam, ducimus velit. tempore veniam!",
    },
    {
      q: "Can I book as often as I like at member-rates?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atquev omnis provident soluta debitis ipsam dicta nam, ducimus velit. tempore veniam!",
    },
  ];

  const toggleAnswer = (index) => {
    if (index === openedIndex) {
      setOpenedIndex(null);
    } else {
      setOpenedIndex(index);
    }
  };

  return (
    <section className="mx-6 md:mx-9 lg:mx-11 xl:mx-16 my-28 flex flex-col lg:flex-row">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl xl:text-4xl text-text font-semibold mb-8 max-w-md">
          Frequently asked questions
        </h2>
      </div>
      <div className="flex-1">
        {qAndA.map((f, i) => (
          <div className="mb-10" key={"key" + i}>
            <div
              onClick={() => toggleAnswer(i)}
              className="text-lg font-semibold text-text flex items-center gap-3 cursor-pointer w-fit"
            >
              <PiPlusBold
                className={`text-main ${
                  openedIndex === i ? "transform rotate-45" : ""
                }`}
              />
              {f.q}
            </div>
            {openedIndex === i && (
              <div className="mt-3">
                <p className="text-base px-8">{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
