
import Bt from "./Bt.jsx";

import avatar from "../../assets/HomeImg/avatar.png";
import dp from "../../assets/HomeImg/bg_DP.png";
import doctor from "../../assets/HomeImg/doctor.png";
import patient from "../../assets/HomeImg/patient.png";

const BannerContext = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden px-4 pb-10 pt-8 sm:px-6 md:px-8 lg:min-h-[680px] lg:flex-row lg:gap-4 lg:px-10 lg:py-8 xl:gap-6 xl:px-12 2xl:min-h-[850px] 2xl:gap-0 2xl:px-[100px]">

      {/* Left Content */}
      <div className="relative z-20 flex 2xl:w-[686px] min-w-0 flex-col items-center text-center lg:w-[42%] lg:items-start lg:text-left ">

        <h1 className="max-w-[650px] text-[32px] font-bold leading-[1.15] tracking-tight text-[#172B4D] min-[375px]:text-[35px] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[52px] 2xl:text-[64px] 2xl:ml-[115px]">
          Making healthcare work better for everyone.
        </h1>

        <p className="mt-4 max-w-[540px] text-[13px] leading-6 text-[#5B6983] min-[375px]:text-[14px] sm:mt-5 sm:text-[15px] md:text-[16px] lg:mt-6 xl:text-[17px] 2xl:text-[18px] 2xl:leading-7 2xl:ml-[115px]">
          From booking appointments to creating digital prescriptions and
          managing lab tests, MediLink brings patients and doctors together
          through simpler, more connected healthcare.
        </p>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-7 lg:mt-8 2xl:ml-[115px]">
          <Bt />
        </div>

        {/* Trust Information */}
        <div className="mt-7 flex items-center justify-center gap-3 sm:mt-9 lg:mt-12 lg:justify-start 2xl:mt-16 2xl:ml-[115px]">
          <img
            src={avatar}
            alt="MediLink community"
            className="h-[38px] w-auto shrink-0 object-contain sm:h-[44px] md:h-[48px]"
          />

          <span className="max-w-[200px] text-left text-[12px] leading-5 text-[#5B6983] min-[375px]:text-[13px] sm:text-[14px] md:text-[15px] ">
            Trusted by 1000+ patients & 200+ doctors
          </span>
        </div>
      </div>

      {/* Right Hero Images */}
      <div className="relative mx-auto mt-10 flex w-full min-w-0 items-center justify-center  lg:w-[58%]">

        {/* Main DP Image */}
        <img
          src={dp}
          alt="MediLink doctor and patient"
          className="relative z-10 h-auto w-full max-w-[420px] object-contain sm:max-w-[520px] md:max-w-[650px] lg:max-w-[560px] xl:max-w-[680px] 2xl:max-w-[857px] sm:mt-12 md:mt-14 lg:mt-[20px] xl:mt-[120px] 2xl:mt-[-24px] 2xl:ml-50"
        />

        {/* Doctor Image */}
        <img
          src={doctor}
          alt="Doctor"
          className="absolute  2xl:left-[21%] 2xl:top-[-18%] z-0 h-auto w-[34%] max-w-[304px] object-contain"
        />

        {/* Patient Image */}
        <img
          src={patient}
          alt="Patient"
          className="absolute bottom-[24%] 2xl:right-[-10%] z-20 h-auto w-[36%] max-w-[327px] object-contain"
        />

      </div>
    </section>
  );
};

export default BannerContext;
