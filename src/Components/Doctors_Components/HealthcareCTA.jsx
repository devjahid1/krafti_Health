import Bt from "./Bt";
import bgcta from "../../assets/HomeImg/bgcta.png";

const HealthcareCTA = () => {
  return (
    <section
      className="relative mb-0 flex min-h-[485px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-[75px] pb-0"
      style={{
        backgroundImage: `url(${bgcta})`,
      }}
    >
      {/* Content */}
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center text-center">

        <h2 className="max-w-[1920px] font-jakarta text-[34px] font-semibold leading-[1.25] text-[#292929] md:text-[48px]">
          More time for the people in your care.
        </h2>

        <p className="mt-[25px] font-inter max-w-[610px] text-[15px] leading-[25px] text-[#64748B] md:text-[18px]">
          A clear path from your professional profile to your first appointment.
        </p>

        <div className="mt-[42px]">
          <Bt />
        </div>

      </div>
    </section>
  );
};

export default HealthcareCTA;