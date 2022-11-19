import Navbar from '../components/_App/Navbar';
import Banner from '../components/HomeOne/Banner';
import Features from '../components/HomeOne/Features';
import ListingArea from '../components/Common/ListingArea';
import Category from '../components/HomeOne/Category';
import DestinationsTwo from '../components/Common/DestinationsTwo';
import Feedback from '../components/Common/Feedback';
import HowItWorks from '../components/Common/HowItWorks';
import Blog from '../components/Common/Blog';
import AppDownload from '../components/Common/AppDownload';
import Footer from '../components/_App/Footer';
// import ListingAreaTwo from '../components/Common/ListingAreaTwo';

const Index = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Features />

      <ListingArea />

      <Category />

      <DestinationsTwo />

      <Feedback />

      <HowItWorks bgColor="bg-f9f9f9" />
      
      <Blog />

      <AppDownload />

      <Footer />
    </>
  );
};

export default Index;
