
import platformDashboard from "../../assets/FeaturesImg/PlatformDashboard.png";

const PlatformShowcase = () => {
  return (
    <section className="w-full overflow-hidden bg-[#EFF7F8] px-4 py-[55px] sm:px-6 sm:py-[65px] md:px-8 md:py-[75px] lg:px-10 lg:py-[85px]">

      <div className="mx-auto w-full max-w-[1450px]">

        {/* Hero Content */}
        <div className="mx-auto flex w-full max-w-[850px] flex-col items-center text-center">

          {/* Eyebrow */}
          <span className="mb-[16px] font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#009B95] sm:mb-[20px] sm:text-[11px] md:text-[12px] xl:text-[14px]">
            One Connected Platform
          </span>

          {/* Heading */}
          <h2 className="font-jakarta text-[27px] font-semibold leading-[1.12] text-[#292929] sm:text-[34px] md:text-[42px] lg:text-[46px] xl:text-[64px]">
            Every step of care.
            <br />
            Working better together.
          </h2>

          {/* Description */}
          <p className="mt-[16px] max-w-[800px] font-inter text-[12px] font-normal leading-[20px] text-[#64748B] sm:mt-[20px] sm:text-[13px] sm:leading-[22px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[29px]">
            Appointments, digital prescriptions and lab management — connected
            for patients and doctors, from the first booking to the next
            follow-up.
          </p>

          {/* CTA Buttons */}
          <div className="mt-[25px] flex w-full flex-wrap items-center justify-center gap-3 sm:mt-[30px] sm:gap-[18px]">

            <button
              type="button"
              className="rounded-full border border-[#009B95] bg-[#009B95] px-[18px] py-[10px] font-geist text-[11px] font-medium text-white transition-colors duration-200 hover:bg-[#007F7A] sm:px-[21px] sm:text-[12px] md:px-[25px] md:py-[12px] md:text-[14px]"
            >
              Book Appointment
            </button>

            <button
              type="button"
              className="rounded-full border border-[#007F7A] bg-white px-[18px] py-[10px] font-geist text-[11px] font-medium text-[#007F7A] transition-colors duration-200 hover:bg-[#E5F5F3] sm:px-[21px] sm:text-[12px] md:px-[25px] md:py-[12px] md:text-[14px]"
            >
              Join as a Doctor
            </button>

          </div>

        </div>

        {/* Dashboard Preview Image */}
        <div className="mx-auto mt-[30px] w-full sm:mt-[40px] lg:mt-[50px]">

          <img
            src={platformDashboard}
            alt="MediLink connected healthcare platform dashboard preview"
            className="block h-auto w-full rounded-[10px] object-contain sm:rounded-[13px] lg:rounded-[15px]"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
};

export default PlatformShowcase;
