
import DoctorAppointmentSection from "../Components/Doctors_Components/DoctorAppointmentSection";
import DoctorCareJourneySection from "../Components/Doctors_Components/DoctorCareJourneySection";
import DoctorFeatures from "../Components/Doctors_Components/DoctorFeatures";
import DoctorOnboardingSection from "../Components/Doctors_Components/DoctorOnboardingSection";
import ForDoctorsHero from "../Components/Doctors_Components/ForDoctorsHero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HealthcareCTA from "../Components/Doctors_Components/HealthcareCTA";

const Doctors = () => {
    return (
        <>
        <Navbar/>
           <div className="w-full bg-[#EFF9F8]">
            <ForDoctorsHero/>
            </div> 
            <DoctorFeatures/>
            <DoctorAppointmentSection/>
            <DoctorCareJourneySection/>
            <DoctorOnboardingSection/>
            <HealthcareCTA/>
            {/* Fotter */}
            <Footer/>
        </>
    );
};

export default Doctors;