import { useLocation } from "react-router-dom";
import {
  AppLinkSection,
  CaringPage,
  Footer,
  Header,
  HeroPage,
  NewsSection,
  OfferCarousel,
  OurFamiliesSection,
  QuerySection,
  SearchBox,
  SpecialistPage,
  SpecializationPage,
} from "../Components";

const HomePage = () => {

  return (
    <>
      <Header />
      <HeroPage />
      <SearchBox />
      <OfferCarousel />
      <SpecializationPage />
      <SpecialistPage />
      <CaringPage />
      <NewsSection />
      <OurFamiliesSection />
      <QuerySection />
      <AppLinkSection />
      <Footer />
    </>
  );
};

export default HomePage;
