"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", 1000);
createBooking("LH123", undefined, 1000);

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24123123098,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Lh999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24123123098) {
    console.log("Check In");
  } else {
    console.log("Wrong Passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);
