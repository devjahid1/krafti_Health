import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import ForPatientsHero from "../Components/Patients_Components/ForPatientsHero";
import HealthcareCTA from "../Components/Patients_Components/HealthcareCTA.jsx";
import PatientFAQ from "../Components/Patients_Components/PatientFAQ.jsx";
import PatientFeatures from "../Components/Patients_Components/PatientFeatures";
import PersonalCareSection from "../Components/Patients_Components/PersonalCareSection";
import SimpleSteps from "../Components/Patients_Components/SimpleSteps.jsx";

const Patients = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#EFF9F8]">
        <ForPatientsHero />
      </div>

      <PatientFeatures />

      <PersonalCareSection />
      <SimpleSteps />
      <PatientFAQ />
      <HealthcareCTA />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Patients;
