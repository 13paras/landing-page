import React from "react";
import data from "../constants/data";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="mx-10 max-w-[1400px] lg:mx-auto">
      <nav className="mt-7 justify-between lg:flex">
        <div className="flex items-center justify-between space-x-6 ">

          <img src={data.logo} alt="" className="pr-10" />
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          {/* Nav Menu */}
          <div className="hidden items-center space-x-6 lg:flex">
            <div className="dropdown dropdown-hover relative flex cursor-pointer">
              <button className="dropdown-btn text-mediumGray hover:text-almostBlack">
                Features
              </button>
              <img
                className="object-contain px-1 pt-1 text-mediumGray duration-300 ease-in-out hover:text-almostBlack group-hover:rotate-180 "
                src={data.arrowDown}
                alt=""
              />
              <div
                tabIndex={0}
                className="dropdown-menu dropdown-content menu  rounded-box absolute -right-4 mx-auto mt-5 w-44 list-none space-y-2 bg-base-200 py-4 pl-7 shadow-xl"
              >
                <li className="inline items-center text-mediumGray hover:text-almostBlack">
                  <img src={data.todoIcon} alt="" className="inline pr-3" />{" "}
                  Todo
                </li>
                <li className="inline items-center text-mediumGray hover:text-almostBlack ">
                  <img
                    src={data.remindersIcon}
                    alt=""
                    className="inline pr-3"
                  />
                  Reminder
                </li>
                <li className="inline items-center text-mediumGray hover:text-almostBlack ">
                  <img src={data.planningIcon} alt="" className="inline pr-3" />
                  Planning
                </li>
                <li className="inline items-center text-mediumGray hover:text-almostBlack ">
                  <img src={data.calender} alt="" className="inline pr-3" />
                  Calender
                </li>
              </div>
            </div>
            <div className="dropdown-hover dropdown relative ">
              <label
                htmlFor="company"
                className="flex cursor-pointer text-mediumGray hover:text-almostBlack"
              >
                Company{" "}
                <img
                  src={data.arrowDown}
                  alt=""
                  className="object-contain px-1 pt-1"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box absolute -left-10 top-5 w-40 bg-base-200 p-2 shadow"
              >
                <li>
                  <a>History</a>
                </li>
                <li>
                  <a>Our Team</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
            <div className="cursor-pointer text-mediumGray hover:text-almostBlack">
              Careers
            </div>
            <div className="cursor-pointer text-mediumGray hover:text-almostBlack">
              About
            </div>
          </div>

        </div>
        {/* Buttons */}
        <div className="hidden lg:block">
          <button className="mr-3 py-2 px-6  text-mediumGray hover:text-almostBlack">
            Login
          </button>
          <button className="rounded-xl border border-almostBlack py-2 px-6  text-mediumGray hover:text-almostBlack">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
