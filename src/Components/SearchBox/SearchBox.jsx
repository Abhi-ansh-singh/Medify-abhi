import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Doctor from "../../assets/doctor_icon.svg";
import Hospital from "../../assets/Hospital.svg";
import Drugstore from "../../assets/Drugstore.svg";
import Capsule from "../../assets/Capsule.svg";
import Ambulance from "../../assets/Ambulance.svg";
import { IoSearch } from "react-icons/io5";
// import { endpoint_url } from "../../Config";
// import axios from "axios";

export default function SearchBox() {


//   const fetchData =async () => {
//     const response = await axios.get(endpoint_url);
// console.log(response);

//   }





  return (
    <div className="absolute w-full px-32 z-50 bottom-[-250px]">
      <Card className="px-3 py-8 w-full">
        <CardBody>
          <div className="flex gap-5 pl-40 items-center justify-center">
            <label className="relative block w-80">
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
            <label className="relative block w-80">
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
            <Button className="bg-primary mx-4 font-display font-medium text-sm flex items-center justify-center gap-1">
              <IoSearch size={20} /> Search
            </Button>
          </div>
          <Typography
            variant="h4"
            className="flex items-center justify-center p-10"
          >
            You may be looking for
          </Typography>
          <div className="flex items-center justify-center gap-5">
            <div className="h-[153px] w-[203px] rounded-lg border-collapse bg-[#FAFBFE] flex flex-col items-center justify-center">
              <img src={Doctor} alt="doctor" />
              <Typography
                variant="paragraph"
                className="text-[#ABB6C7] font-display font-normal my-2"
              >
                Doctor
              </Typography>
            </div>
            <div className="h-[153px] w-[203px] rounded-lg border-collapse bg-[#FAFBFE] flex flex-col items-center justify-center">
              <img src={Drugstore} alt="doctor" />
              <Typography
                variant="paragraph"
                className="text-[#ABB6C7] font-display font-normal my-2"
              >
                Labs
              </Typography>
            </div>
            <div className="h-[153px] w-[203px] rounded-lg border-2 border-primary bg-[#2AA7FF14] flex flex-col items-center justify-center">
              <img src={Hospital} alt="doctor" />
              <Typography
                variant="paragraph"
                className="text-primary font-display font-semibold my-2"
              >
                Hospitals
              </Typography>
            </div>
            <div className="h-[153px] w-[203px] rounded-lg border-collapse bg-[#FAFBFE] flex flex-col items-center justify-center">
              <img src={Capsule} alt="doctor" />
              <Typography
                variant="paragraph"
                className="text-[#ABB6C7] font-display font-normal my-2"
              >
                Medical Store
              </Typography>
            </div>
            <div className="h-[153px] w-[203px] rounded-lg border-collapse bg-[#FAFBFE] flex flex-col items-center justify-center">
              <img src={Ambulance} alt="doctor" />
              <Typography
                variant="paragraph"
                className="text-[#ABB6C7] font-display font-normal my-2"
              >
                Ambulance
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
