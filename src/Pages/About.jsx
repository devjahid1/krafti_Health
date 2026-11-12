import Navbar from "../Components/Navbar.jsx";
import AboutHero from "../Components/About_Components/AboutHero";
import OurMission from "../Components/About_Components/OurMission.jsx";
import CareJourneySection from "../Components/About_Components/CareJourneySection.jsx";
import OurPrinciples from "../Components/About_Components/OurPrinciples.jsx";
import ContactSection from "../Components/About_Components/ContactSection.jsx";
import HealthCareCTA from "../Components/About_Components/HealthcareCTA";
import Footer from "../Components/Footer.jsx";

const About = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>
            <AboutHero/>
            <OurMission/>
            <CareJourneySection/>
            <OurPrinciples/>
            <ContactSection/>
            <HealthCareCTA/>
            <Footer/>
        </>
    );
};

export default About;