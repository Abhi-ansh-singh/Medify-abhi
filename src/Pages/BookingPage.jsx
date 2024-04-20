import { AppLinkSection, Footer, Header, QuerySection } from "../Components";
import { SearchForDetailPage } from "../Components/SearchForDetailPage";


const BookingPage = () => {
  return (
    <>
      <Header />
      <SearchForDetailPage />
      <QuerySection />
      <AppLinkSection />
      <Footer />
    </>
  );
};

export default BookingPage;
