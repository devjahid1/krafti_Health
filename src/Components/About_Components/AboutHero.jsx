
import aboutImage from "../../assets/AboutImg/AboutMediLink.png";

const AboutHero = () => {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#EFF7F8] px-5 py-[50px] sm:px-8 sm:py-[65px] lg:min-h-[500px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[45px] xl:gap-[70px]">

        {/* Left: Content */}
        <div className="flex w-full max-w-[560px] flex-col items-center text-center lg:w-[48%] lg:items-start lg:text-left">

          <span className="mb-[15px] font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009B95] sm:text-[11px] md:text-[12px]">
            About MediLink
          </span>

          <h1 className="w-full font-jakarta text-center text-[27px] font-semibold leading-[1.12] text-[#292929] sm:text-[34px] md:text-[42px] lg:text-left lg:text-[48px] xl:text-[54px]">
            Better healthcare starts with connection.
          </h1>

          <p className="mt-[17px] w-full max-w-[510px] font-inter text-center text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-[14px] lg:text-left lg:text-[13px]">
            We believe healthcare should feel easier to navigate. MediLink
            brings patients, doctors and the everyday details of care together
            — so the next step is clearer for everyone.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="mt-[22px] rounded-full border border-[#007F7A] bg-white px-[20px] py-[9px] font-geist text-[11px] font-medium text-[#007F7A] transition-colors duration-200 hover:bg-[#007F7A] hover:text-white sm:px-[23px] sm:py-[10px] sm:text-[12px]"
          >
            Explore Our Features
          </button>

        </div>

        {/* Right: About Image */}
        <div className="flex w-full max-w-[600px] items-center justify-center lg:w-[52%]">

          <img
            src={aboutImage}
            alt="Patients and doctors connected through MediLink healthcare"
            className="block h-auto w-full rounded-[18px] object-contain sm:rounded-[22px] lg:rounded-[24px]"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
};

export default AboutHero;
