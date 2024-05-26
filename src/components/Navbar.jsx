import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navItems = [
    {
      id: 1,
      title: "Desitnations",
    },
    {
      id: 2,
      title: "Hotels",
    },
    {
      id: 3,
      title: "Flights",
    },
    {
      id: 4,
      title: "Bookings",
    },
  ];
  return (
    <>
      <nav className="flex items-center relative md:justify-evenly justify-between py-4 w-full z-50">
        <div className="logo">
          <h1 className="relative font-bold text-2xl flex">
            Jad
            <span className="relative inline-block text-o">o</span>
            <span className="relative inline-block text-o">o</span>
          </h1>
        </div>
        <div className=" flex">
          <ul className=" items-center gap-10 md:flex hidden">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className=" font-normal">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex  gap-5 ml-10">
            <button>Login</button>
            <button className="border border-black px-4">SignUp</button>
            <select className="md:block hidden">
              <option>EN</option>
            </select>
            <CiMenuFries
              className="md:hidden block text-3xl"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>

        <div
          className={`${
            toggle
              ? "absolute top-0 bottom-0 left-[30%] h-screen bg-white w-full flex "
              : "absolute top-0 bottom-0 left-[-100%] h-screen bg-white w-full"
          } `}
        >
          <IoMdClose
            onClick={() => setToggle(false)}
            className="text-4xl  absolute left-56 top-10"
          />
          <ul className=" items-center gap-10 flex flex-col justify-center pl-20">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className=" font-normal text-black">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
