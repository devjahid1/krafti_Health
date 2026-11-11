
import Bt from "./Bt.jsx";

import avatar from "../../assets/HomeImg/avatar.png";
import dp from "../../assets/HomeImg/bg_DP.png";
import doctor from "../../assets/HomeImg/doctor.png";
import patient from "../../assets/HomeImg/patient.png";

const BannerContext = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden px-3 pb-8 pt-6 min-[375px]:px-4 min-[375px]:pt-8 sm:px-6 md:px-8 lg:min-h-[680px] lg:flex-row lg:gap-4 lg:px-10 lg:py-8 xl:gap-6 xl:px-12 2xl:min-h-[850px] 2xl:gap-0 2xl:px-[100px]">

      {/* Left Content */}
      <div className="relative z-20 flex 2xl:w-[686px] min-w-0 w-full flex-col items-center text-center lg:w-[42%] lg:items-start lg:text-left 2xl:mt-[-210px]">

        <h1 className="max-w-[300px] text-[29px] font-semibold leading-[1.15] tracking-tight text-[#172B4D] min-[375px]:max-w-[650px] min-[375px]:text-[35px] sm:text-[40px] md:text-[46px] lg:text-[42px] xl:text-[52px] 2xl:text-[64px] 2xl:ml-[115px] font-jakarta ">
          Making healthcare work better for everyone.
        </h1>

        <p className="mt-3 max-w-[290px] text-[12px] leading-[1.6] text-[#5B6983] min-[375px]:mt-4 min-[375px]:max-w-[540px] min-[375px]:text-[14px] sm:mt-5 sm:text-[15px] md:text-[16px] lg:mt-6 xl:text-[17px] 2xl:text-[18px] 2xl:leading-7 2xl:ml-[115px] font-inter">
          From booking appointments to creating digital prescriptions and
          managing lab tests, MediLink brings patients and doctors together
          through simpler, more connected healthcare.
        </p>

        {/* CTA Button */}
        <div className="mt-5 min-[375px]:mt-6 sm:mt-7 lg:mt-8 2xl:ml-[115px]">
          <Bt />
        </div>

        {/* Trust Information */}
        <div className="mt-5 flex items-center justify-center gap-2 min-[375px]:mt-7 min-[375px]:gap-3 sm:mt-9 lg:mt-12 lg:justify-start 2xl:mt-16 2xl:ml-[115px]">

          <img
            src={avatar}
            alt="MediLink community"
            className="h-[34px] w-auto shrink-0 object-contain min-[375px]:h-[38px] sm:h-[44px] md:h-[48px]"
          />

          <span className="max-w-[190px] text-left text-[11px] leading-5 text-[#5B6983] min-[375px]:max-w-[200px] min-[375px]:text-[13px] sm:text-[14px] md:text-[15px]">
            Trusted by 1000+ patients & 200+ doctors
          </span>

        </div>
      </div>

      {/* Right Hero Images */}
      <div className="relative mx-auto mt-7 flex w-full min-w-0 items-center justify-center min-[375px]:mt-9 sm:mt-8 sm:w-full lg:mt-10 lg:w-[58%] lg:ml-0 xl:ml-[55px] 2xl:ml-[55px]">

        {/* Main DP Image */}
        <img
          src={dp}
          alt="MediLink doctor and patient"
          className="relative z-10 h-auto w-full max-w-[280px] object-contain min-[375px]:max-w-[340px] min-[390px]:max-w-[355px] sm:max-w-[480px] sm:mb-[-60px] md:max-w-[650px] md:mb-[-80px] lg:max-w-[560px] lg:mb-[-247px] xl:max-w-[680px] xl:mb-[-150px] 2xl:max-w-[857px] 2xl:mb-0 2xl:mt-[-12px] "
        />

        {/* Doctor Image */}
        <img
          src={doctor}
          alt="Doctor"
          className="absolute z-0 hidden h-auto w-[34%] max-w-[304px] object-contain md:block md:left-[5%] md:top-[-10%] lg:left-[10%] lg:top-[-38%] xl:left-[10%] xl:top-[-24%] 2xl:left-[13%] 2xl:top-[-18%] animate-fade-in-delay"
        />

        {/* Patient Image */}
        <img
          src={patient}
          alt="Patient"
          className="absolute z-20 hidden h-auto w-[36%] max-w-[327px] object-contain md:block md:bottom-[5%] md:right-[-2%] lg:bottom-[-90%] lg:right-[-5%] xl:bottom-[-7%] xl:right-[-5%] 2xl:bottom-[25%] 2xl:right-[-1%] animate-fade-in-late"
        />

      </div>
    </section>
  );
};

export default BannerContext;