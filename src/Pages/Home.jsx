import Footer from "../Components/Footer.jsx";
import BannerContext from "../Components/Home_Components/BannerContext";
import HealthcareBenefits from "../Components/Home_Components/HealthcareBenefits.jsx";
import HealthcareCTA from "../Components/Home_Components/HealthcareCTA.jsx";
import PatientDoctorSection from "../Components/Home_Components/PatientDoctorSection.jsx";
import Services from "../Components/Home_Components/Services";
import SimpleSteps from "../Components/Home_Components/SimpleSteps.jsx";
import StatisticsSection from "../Components/Home_Components/StatisticsSection.jsx";
import Testimonials from "../Components/Home_Components/Testimonials.jsx";
import Navbar from "../Components/Navbar";
import bannerBg from "../assets/HomeImg/hero_bg.png";

const Home = () => {
  return (
    <main className="relative w-full">

      {/* Background */}
      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[850px] w-full bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "100% 800px",
        }}
      />

      <Navbar />
      <BannerContext />
      <Services/>
      <PatientDoctorSection/>
      <StatisticsSection/>
      <SimpleSteps/>
      <HealthcareBenefits/>
      <Testimonials/>
      <HealthcareCTA/>
      <Footer/>

    </main>
  );
};

export default Home;