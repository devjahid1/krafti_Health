
import Bt from "../Home_Components/Bt";
import avatar from "../../assets/HomeImg/avatar.png";
import dp from "../../assets/HomeImg/bg_DP.png";
import doctor from "../../assets/HomeImg/doctor.png";
import patient from "../../assets/HomeImg/patient.png";

const BannerContext = () => {
  return (
    <div className="flex items-start justify-around pl-38">

      {/* Content */}
      <div>
        <h1 className="w-125 pb-5 pt-26.75 text-24px leading-17.5 lg:text-[64px]">
          Making healthcare work better for everyone.
        </h1>

        <p className="pb-9 text-[18px] text-[#5b6983] lg:w-130.5">
          From booking appointments to creating digital prescriptions and
          managing lab tests, MediLink brings patients and doctors together
          through simpler, more connected healthcare.
        </p>

        <Bt />

        <div className="flex items-center gap-4 pt-20">
          <img src={avatar} alt="" />

          <span className="text-[16px] text-[#5B6983] lg:w-50">
            Trusted by 1000+ patients & 200+ doctors
          </span>
        </div>
      </div>

      {/* Images */}
      <div className="relative mt-16.5 h-[650px] w-[650px] shrink-0">

        {/* Main Image */}
        <img
          className="absolute left-0 top-0 z-10 h-158.5 w-214.25  pt-20 -ml-27 animate-fade-in"
          src={dp}
          alt=""
        />

        {/* Doctor Image */}
        <img
          className="absolute -left-25 -top-12 z-0 h-[277px] w-[346px] animate-fade-in-delay"
          src={doctor}
          alt="Doctor"
        />

        {/* Patient Image */}
        <img
          className="absolute left-75 top-70 z-10 h-[307px] w-[376px] animate-fade-in-late"
          src={patient}
          alt="Patient"
        />

      </div>
    </div>
  );
};

export default BannerContext;
