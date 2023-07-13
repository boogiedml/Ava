import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { IoIosSearch } from "react-icons/io";

const AccommodationSearch = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(1);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleSearch = () => {
    // Perform search or other actions with selected values
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Location:", location);
    console.log("Guests:", guests);
  };

  const formatDate = (date) => {
    return format(date, "MMM d");
  };

  return (
    <div className="max-w-3xl mx-auto bg-sub rounded-lg md:rounded-full">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:basis-2/6 text-text">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
            className="w-full px-3 ps-8 py-4 rounded-lg md:rounded-full outline-none bg-transparent hover:bg-white active:bg-white focus-within:bg-white transition-all duration-500"
          />
        </div>
        <div className="w-full md:basis-1/6">
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInChange}
            dateFormat="MMM d"
            className="w-full block px-3 py-4 rounded-lg md:rounded-full outline-none bg-transparent hover:bg-white active:bg-white focus-within:bg-white transition-all duration-500"
            placeholderText="Check in"
          />
        </div>
        <div className="w-full md:basis-1/6">
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            dateFormat="MMM d"
            className="w-full px-3 py-4 rounded-lg md:rounded-full outline-none bg-transparent hover:bg-white active:bg-white focus-within:bg-white transition-all duration-500"
            placeholderText="Check out"
          />
        </div>
        <div className="bg-transparent flex w-full md:basis-2/6 rounded-lg md:rounded-full pe-2.5 hover:bg-white active:bg-white focus-within:bg-white">
          <div className="w-full basis-1/2">
            <input
              type="number"
              min={1}
              max={10}
              value={guests}
              onChange={handleGuestsChange}
              className="w-full px-3 py-4 rounded-lg md:rounded-full outline-none bg-transparent"
              placeholder="Guests"
            />
          </div>
          <button
            onClick={handleSearch}
            className="basis-1/2 bg-main text-sub text-sm font-semibold py-2 px-3 lg:px-4 my-2 rounded-full"
          >
            <IoIosSearch className="hidden md:block lg:hidden text-xl" />
            <span className="block md:hidden lg:block">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSearch;
