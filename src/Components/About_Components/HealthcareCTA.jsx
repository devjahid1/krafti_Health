
import Bt from "./Bt";
import bgcta from "../../assets/HomeImg/bgcta.png";

const HealthcareCTA = () => {
  return (
    <section
      className="relative mb-0 flex min-h-[485px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-[75px] pb-0 sm:px-8"
      style={{
        backgroundImage: `url(${bgcta})`,
      }}
    >
      {/* Content */}
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center text-center">

        <h2 className="max-w-[1920px] font-jakarta text-[26px] font-semibold leading-[1.2] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px]">
          More time for the people in your care.
        </h2>

        <p className="mt-[18px] max-w-[610px] font-inter text-[12px] leading-[20px] text-[#64748B] sm:mt-[20px] sm:text-[13px] sm:leading-[22px] md:mt-[25px] md:text-[15px] md:leading-[24px] xl:text-[18px] xl:leading-[25px]">
          A clear path from your professional profile to your first appointment.
        </p>

        <div className="mt-[30px] sm:mt-[36px] md:mt-[42px]">
          <Bt />
        </div>

      </div>
    </section>
  );
};

export default HealthcareCTA;
