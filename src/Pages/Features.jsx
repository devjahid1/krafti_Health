import HealthcareCTA from "../Components/Features_Components/HealthcareCTA";
import AppointmentSystemSection from "../Components/Features_Components/AppointmentSystemSection";
import DigitalPrescriptionSection from "../Components/Features_Components/DigitalPrescriptionSection";
import LabManagementSection from "../Components/Features_Components/LabManagementSection";
import PeopleFirstSection from "../Components/Features_Components/PeopleFirstSection";
import PlatformShowcase from "../Components/Features_Components/PlatformShowcase";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Features = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>
            <PlatformShowcase/>
            <AppointmentSystemSection/>
            <DigitalPrescriptionSection/>
            <LabManagementSection/>
            <PeopleFirstSection/>
            <HealthcareCTA/>
            <Footer/>
        </>
    );
};

export default Features;