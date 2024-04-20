import { Typography } from "@material-tailwind/react";
import { App_url } from "./Config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookingPage, HomePage, MyBookings } from "./Pages";

function App() {
  return (
    <>
      <div className="bg-primary w-full h-10 flex justify-center items-center drop-shadow-2xl relative">
        <Typography variant="paragraph" color="white">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path={App_url.HomePage} element={<HomePage />} />
            <Route path={App_url.BookingPage} element={<BookingPage />} />
            <Route path={App_url.MyBookings} element={<MyBookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
