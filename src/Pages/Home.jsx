
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

import BannerContext from "../Components/Home_Components/BannerContext.jsx";
import Services from "../Components/Home_Components/Services.jsx";
import PatientDoctorSection from "../Components/Home_Components/PatientDoctorSection.jsx";
import StatisticsSection from "../Components/Home_Components/StatisticsSection.jsx";
import SimpleSteps from "../Components/Home_Components/SimpleSteps.jsx";
import HealthcareBenefits from "../Components/Home_Components/HealthcareBenefits.jsx";
import Testimonials from "../Components/Home_Components/Testimonials.jsx";
import HealthcareCTA from "../Components/Home_Components/HealthcareCTA.jsx";

import bannerBg from "../assets/HomeImg/hero_bg.png";

const Home = () => {
  return (
    <main className="relative isolate min-h-screen w-full min-w-0 overflow-x-clip bg-white">

{/* Hero Background */}
<div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1100px] overflow-hidden md:h-[1200px] lg:h-[850px]">
  <div
    className="absolute left-1/2 top-0 h-full w-[1920px] -translate-x-1/2 bg-no-repeat
      [background-size:1920px_850px]
      md:[background-size:1920px_1200px]
      lg:[background-size:1920px_850px]"
    style={{
      backgroundImage: `url("${bannerBg}")`,
      backgroundPosition: "center top",
    }}
  />
</div>

      {/* Website Content */}
      <div className="relative z-10 w-full min-w-0">

        {/* Navbar */}
        <Navbar />

        {/* Hero Banner */}
        <BannerContext />

        {/* Website Sections */}
        <div className="w-full min-w-0">
          <Services />
          <PatientDoctorSection />
          <StatisticsSection />
          <SimpleSteps />
          <HealthcareBenefits />
          <Testimonials />
          <HealthcareCTA />
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </main>
  );
};

export default Home;
