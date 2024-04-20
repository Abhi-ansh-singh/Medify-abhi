import { Button, Card, CardBody } from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";

const SearchForDetailPage = () => {
  return (
    <div className=" relative px-32 pt-4 w-full h-20 flex justify-center items-center bg-primary rounded-b-xl">
      <Card className="p-1  w-[83%] absolute top-1/2 z-50">
        <CardBody>
          <div className="flex gap-5 items-center justify-around">
            <label className="relative block w-2/4">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <IoSearch size={20} />
                </svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="State"
                type="text"
                name="search"
              />
            </label>
            <label className="relative block w-full">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <IoSearch size={20} />
                </svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="City"
                type="text"
                name="search"
              />
            </label>
            <Button className="bg-primary mx-4 font-display font-medium text-sm flex items-center justify-center gap-1 w-2/5">
              <IoSearch size={20} /> Search
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchForDetailPage;
