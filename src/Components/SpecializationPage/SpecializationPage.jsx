import { Button, Typography } from "@material-tailwind/react";
import { SpecializationsData } from "../../Config";

export const SpecializationPage = () => {
  return (
    <div className="px-32 py-16 bg-secondary w-full h-auto">
      <Typography
        variant="h2"
        className="text-[#1B3C74] font-display font-semibold text-5xl flex items-center justify-center"
      >
        Find by specialisation
      </Typography>
      <div className="flex flex-wrap gap-4 items-center justify-center mt-10">
        {SpecializationsData.map((item, i) => (
          <div
            key={i}
            className="h-[180px] w-[270px] rounded-lg border-collapse bg-[#FAFBFE] flex flex-col items-center justify-center"
          >
            <img src={item.image} alt="doctor" />
            <Typography
              variant="paragraph"
              className="text-[#ABB6C7] font-display font-normal my-2"
            >
              {item.name}
            </Typography>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-primary font-display font-light text-base mt-10 flex items-center justify-center">
          View All
        </Button>
      </div>
    </div>
  );
};

export default SpecializationPage;
