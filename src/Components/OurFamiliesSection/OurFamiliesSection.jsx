import { Typography } from "@material-tailwind/react";
import OurFamiliesSectionImg from "../../assets/ourfamilySection_img.svg";

const OurFamiliesSection = () => {
  return (
    <div className="px-16 py-8 bg-secondary w-full h-auto flex justify-center items-center gap-16">
      <div className="basis-[49%] flex flex-col py-12 px-6">
        <Typography
          variant="h5"
          className="font-display font-semibold text-base items-start text-primary"
        >
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </Typography>
        <Typography
          variant="h2"
          className="font-display font-semibold text-5xl py-3 text-[#1B3C74]"
        >
          {" "}
          Our Families
        </Typography>
        <Typography
          variant="paragraph"
          className="font-sans text-[#77829D] font-medium text-lg pr-20"
        >
          We will work with you to develop individualized care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
      </div>
      <div className="basis-[49%] pl-5">
        <img src={OurFamiliesSectionImg} alt="img" />
      </div>
    </div>
  );
};

export default OurFamiliesSection;
