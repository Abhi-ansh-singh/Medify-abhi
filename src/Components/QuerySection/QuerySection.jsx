import { Avatar, Tooltip, Typography } from "@material-tailwind/react";
import QuerySectionImg from "../../assets/QuerySection_img.svg";
import { QueryQuestionsData } from "../../Config";
import CareSign from "../../assets/careSign.svg";

const QuerySection = () => {
  return (
    <div className="px-32 py-16 w-full h-auto">
      <div className="flex flex-col items-center justify-center">
        <Typography
          className="text-base font-display text-primary mb-5"
          variant="h5"
        >
          Get Your Answer
        </Typography>
        <Typography
          className="text-5xl font-display font-semibold text-[#1B3C74] mb-10"
          variant="h2"
        >
          Frequently Asked Questions
        </Typography>
      </div>
      <div className="flex items-center justify-center">
        <div className="basis-[49%] relative">
          <img src={QuerySectionImg} alt="Query Section img" />
          <Tooltip content="Your Love">
            <Avatar
              size="xxl"
              variant="circular"
              alt="care sign"
              src={CareSign}
              className=" mr-5 top-40 left-[85%] hover:z-10 absolute "
            />
          </Tooltip>
        </div>

        <div className="basis-[49%] flex py-12 px-6">
          <ul className="flex flex-col">
            {QueryQuestionsData.map((item, i) => (
              <li
                key={i}
                className=" list-none font-display font-semibold text-xl text-[#1B3C74] flex py-8"
              >
                {item.question}{" "}
                <span className="text-primary text-2xl font-semibold ml-10">
                  +
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuerySection;
