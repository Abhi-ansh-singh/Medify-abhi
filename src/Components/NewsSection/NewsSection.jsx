import NewsFeed from "../../assets/newsFeed.svg";
import RebeccaLee from "../../assets/Rebecca_Lee.svg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const NewsSection = () => {
  return (
    <div className="x-32 py-16 w-full h-auto">
      <div className="flex flex-col items-center justify-center">
        <Typography
          className="text-base font-display text-primary mb-5"
          variant="h5"
        >
          Blogs & News
        </Typography>
        <Typography
          className="text-5xl font-display font-semibold text-[#1B3C74] mb-10"
          variant="h2"
        >
          Read Our Latest News
        </Typography>
      </div>
      <div className=" flex gap-5 items-center justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="max-w-[24rem] overflow-hidden">
            <CardHeader color="transparent" className="m-0">
              <img src={NewsFeed} alt="news Feed" className="w-full" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color={"#77829D"}
                className="font-display font-medium text-base"
              >
                Medical | March 31,2024
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-medium text-lg font-display text-[#1B3C74]"
              >
                6 Tips To Protect Your Mental Health When You’re Sick
              </Typography>
              <CardFooter className="flex items-center px-0 py-4">
                <Tooltip content="News By">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="News By Doctor"
                    src={RebeccaLee}
                    className="border-2 mr-5 border-white hover:z-10"
                  />
                </Tooltip>
                <Typography className="font-medium font-display text-lg text-[#1B3C74]">
                  Rebecca Lee
                </Typography>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
