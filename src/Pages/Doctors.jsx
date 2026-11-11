
import DoctorFeatures from "../Components/Doctors_Components/DoctorFeatures";
import ForDoctorsHero from "../Components/Doctors_Components/ForDoctorsHero";
import Navbar from "../Components/Navbar";

const Doctors = () => {
    return (
        <>
           <div className="w-full bg-[#EFF9F8]">
            <Navbar/>
            <ForDoctorsHero/>
            </div> 
            <DoctorFeatures/>
        </>
    );
};

export default Doctors;