import { Typography } from "@material-tailwind/react";
import CaringImage from "../../assets/caring_img.svg";
import { PiSealCheckFill } from "react-icons/pi";

const CaringPage = () => {
  return (
    <div className="px-32 py-16 bg-secondary w-full h-auto flex gap-10">
      <div className="basis-[49%]">
        <img src={CaringImage} alt="img" />
      </div>
      <div className="basis-[49%] flex flex-col py-12 px-6">
        <Typography
          variant="h5"
          className="font-display font-semibold text-base items-start text-primary"
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Typography
          variant="h2"
          className="font-display font-semibold text-5xl py-3"
        >
          <span className="text-[#1B3C74]">Patient</span>
          <span className="text-primary ml-2">Caring</span>
        </Typography>
        <Typography
          variant="paragraph"
          className="font-display font-medium text-base text-[#77829D] my-5 "
        >
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        <ul>
          <li className="list-none flex items-center gap-3 mb-5">
            <PiSealCheckFill className="text-primary" size={20} />
            <span className="text-[#1B3C74] text-lg font-sans font-semibold">
              Stay Updated About Your Health
            </span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <PiSealCheckFill className="text-primary" size={20} />
            <span className="text-[#1B3C74] text-lg font-sans font-semibold">
              Check Your Result Online
            </span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <PiSealCheckFill className="text-primary" size={20} />
            <span className="text-[#1B3C74] text-lg font-sans font-semibold">
              Manage Your Appointments
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaringPage;
