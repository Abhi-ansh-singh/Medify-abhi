import { Button, Typography } from "@material-tailwind/react";
import hero_image from "../../assets/hero_image.svg";


export default function HeroPage() {
  return (
    <div className="px-32 bg-secondary w-full h-full flex">
      <div className="basis-1/2 pr-16 mt-24">
        <Typography
          variant="h3"
          className="pr-3 font-display text-[#102851] font-[31px] leading-16 tracking-wide"
        >
          Skip the travel! Find Online
        </Typography>
        <Typography
          variant="h1"
          className="pr-3 font-display leading-16 tracking-wide text-[56px] font-bold"
        >
          Medical <span className="text-primary">Centers</span>
        </Typography>
        <Typography
          variant="paragraph"
          className="pr-3 my-3 ont-display leading-8 tracking-wide text-[#5C6169] text-xl"
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </Typography>
        <Button type="button" className="bg-primary mt-5">
          Find Centers
        </Button>
      </div>
      <div className="basis-1/2 scale-110">
        <img src={hero_image} alt="hero_img" />
      </div>
      
    </div>
  );
}
