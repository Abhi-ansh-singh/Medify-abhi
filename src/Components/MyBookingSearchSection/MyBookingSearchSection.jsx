import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";

const MyBookingSearchSection = () => {
  return (
    <div className=" relative px-32 pt-4 w-full h-20 flex justify-between items-center bg-primary rounded-b-xl">
      <Typography
        className="font-display font-bold text-white text-[40px]"
        variant="h1"
      >
        My Bookings
      </Typography>
      <Card className="w-[60%] absolute top-1/2 right-0 z-50 mr-36">
        <CardBody>
          <div className="flex gap-5 items-center justify-around">
            <label className="relative block w-full">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search By Hospital"
                type="text"
                name="search"
              />
            </label>
            <Button className="bg-primary mx-4 font-display font-medium text-sm flex items-center justify-center gap-1 w-[20%]">
              <IoSearch size={20} /> Search
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyBookingSearchSection;
