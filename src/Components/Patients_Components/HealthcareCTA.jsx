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
          Your next step to better healthcare.
        </h2>

        <p className="mt-[25px] font-inter max-w-[610px] text-[15px] leading-[25px] text-[#64748B] md:text-[18px]">
          Find a doctor, choose a time and keep your care connected with MediLink.
        </p>

        <div className="mt-[42px]">
          <Bt />
        </div>

      </div>
    </section>
  );
};

export default HealthcareCTA;