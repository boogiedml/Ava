import React from "react";
import { PiHeartDuotone } from "react-icons/pi";
import { GoStarFill } from "react-icons/go";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-full flex flex-col cursor-pointer">
      <div className="h-[300px] rounded-2xl relative">
        <div className="absolute top-5 right-5 z-20 text-sub hover:text-main transition-all duration-500 cursor-pointer text-2xl">
          <PiHeartDuotone />
        </div>
        <div className="absolute top-0 left-0  right-0 bottom-0 bg-text bg-opacity-10 rounded-2xl"></div>
        <img
          className="w-full h-full object-cover object-center rounded-2xl"
          src={property.img}
          alt={property.title}
        />
      </div>
      <div className="bg-white rounded-2xl p-3">
        <div className="flex justify-between items-center gap-4 mb-2">
          <h3 className="text-base text-text overflow-hidden overflow-ellipsis whitespace-nowrap">
            {property.title}
          </h3>
          {property.star && (
            <span className="flex items-center gap-2 text-sm">
              <GoStarFill className="text-yellow-500" />
              {property.star}
            </span>
          )}
        </div>
        <small className="block text-sm text-gray-500 mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {property.distance} kilometers away
        </small>
        <small className="block text-sm text-gray-500 mb-2">
          {property.duration}
        </small>
        <small className="block text-xs text-main font-[450]">
          <span className="text-text text-sm font-semibold tracking-widest">
            ${property.price}
          </span>{" "}
          total before taxes
        </small>
      </div>
    </div>
  );
};

export default PropertyCard;
