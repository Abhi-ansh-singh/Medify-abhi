import { Button } from "@material-tailwind/react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { App_url } from "../../Config";

export default function Header() {
  const location = useLocation();

  const getHeaderBackgroundColor = () => {
    if (location.pathname === App_url.HomePage) {
      return "#ebf3ff";
    } else {
      return "#fff";
    }
  };

  return (
    <header
      className="px-32 pt-4 w-full h-20 flex justify-between items-center"
      style={{ backgroundColor: getHeaderBackgroundColor() }}
    >
      <Link to={App_url.HomePage}>
        <div className="flex items-center cursor-pointer">
          <IoShieldCheckmarkSharp
            size={25}
            color={"#fff"}
            className="bg-primary p-1 rounded"
          />{" "}
          <span className="text-primary font-bold text-lg m-1">Medify</span>{" "}
        </div>
      </Link>
      <nav className="flex justify-end ">
        <ul className="flex justify-evenly items-center">
          <li>
            <NavLink
              to={App_url.BookingPage}
              className={({ isActive }) =>
                `items-center p-4 gap-4 cursor-pointer font-display hover:text-primary ${
                  isActive
                    ? "text-primary border-b-4 border-primary font-semibold"
                    : "text-[#102851] font-normal"
                }`
              }
            >
              Find Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to={App_url.medicine}
              className="items-center p-4 gap-4 cursor-pointer font-display hover:text-primary "
            >
              Medicines
            </NavLink>
          </li>
          <li>
            <NavLink
              to={App_url.surgeries}
              className="items-center p-4 gap-4 cursor-pointer font-display hover:text-primary "
            >
              Surgeries
            </NavLink>
          </li>
          <li>
            <NavLink
              to={App_url.software}
              className="items-center p-4 gap-4 cursor-pointer font-display hover:text-primary "
            >
              Software for Provider
            </NavLink>
          </li>
          <li>
            <NavLink
              to={App_url.facilities}
              className="items-center p-4 gap-4 cursor-pointer font-display hover:text-primary "
            >
              Facilities
            </NavLink>
          </li>
        </ul>
        <Link to={App_url.MyBookings}>
          <Button className="bg-primary mx-4">My Bookings</Button>
        </Link>
      </nav>
    </header>
  );
}
