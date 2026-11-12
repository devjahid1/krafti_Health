
const OurMission = () => {
  return (
    <section className="w-full overflow-hidden border-x-2 border-[#38BDF8] bg-white px-5 py-[50px] sm:px-8 sm:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-[80px]">

        {/* Left: Heading */}
        <div className="flex w-full flex-col items-center text-center lg:w-[35%] lg:items-start lg:text-left">

          <span className="mb-[14px] font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009B95] sm:text-[11px] md:text-[12px]">
            Our Mission
          </span>

          <h2 className="max-w-[400px] font-jakarta text-[26px] font-semibold leading-[1.15] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-left lg:text-[42px]">
            Making healthcare work better for everyone.
          </h2>

        </div>

        {/* Right: Mission Content */}
        <div className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left">

          <p className="font-inter text-[12px] font-normal leading-[21px] text-[#64748B] sm:text-[13px] sm:leading-[23px]">
            A booking in one place. A prescription in another. A lab report
            that's hard to find. When the details of care are disconnected,
            even a simple follow-up can feel complicated.
          </p>

          <p className="mt-[17px] font-inter text-[12px] font-normal leading-[21px] text-[#64748B] sm:text-[13px] sm:leading-[23px]">
            MediLink is built to bring those moments together. We help patients
            find care and keep their records close, while giving doctors a
            practical workspace for the care they provide.
          </p>

          {/* Highlighted Mission Statement */}
          <div className="mt-[20px] w-full border-l-[2px] border-[#009B95] py-[7px] pl-[15px] text-left sm:mt-[24px] sm:pl-[18px]">

            <p className="max-w-[650px] font-jakarta text-[13px] font-medium leading-[21px] text-[#007F7A] sm:text-[14px] sm:leading-[23px] md:text-[15px] lg:text-[16px] lg:leading-[25px]">
              Technology should support the relationship between a patient
              and their doctor — not get in the way.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurMission;
