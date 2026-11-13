
import {
  FlaskConical,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";

import labReportsImage from "../../assets/FeaturesImg/LabReports.png";

const LabManagementSection = () => {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-white px-5 py-[50px] sm:px-8 sm:py-[65px] lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[65px] xl:gap-[85px]">

        {/* Left: Content */}
        <div className="flex w-full max-w-[560px] flex-col items-center text-center lg:w-[48%] lg:items-start lg:text-left">

          <span className="mb-[13px] font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009591] sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[15px]">
            03 / Lab Management
          </span>

          <h2 className="w-full font-jakarta text-[26px] font-semibold leading-[1.17] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-left lg:text-[40px] xl:text-[46px] 2xl:text-[43px]">
            From test request to report, a clearer picture.
          </h2>

          <p className="mt-[15px] w-full max-w-[500px] font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-center md:text-[14px] lg:text-left lg:text-[13px] xl:text-[16px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[29px]">
            Keep diagnostic requests and their progress connected to the
            patient record, so both patients and doctors know what comes next.
          </p>

          {/* Feature List */}
          <div className="mt-[20px] flex w-full max-w-[500px] flex-col items-center gap-[13px] lg:items-start">

            <div className="flex w-full items-start justify-center gap-[10px] text-left lg:justify-start">
              <FlaskConical
                size={20}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[13px] lg:text-[12px] xl:text-[15px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[29px]">
                View the tests requested by the treating doctor.
              </p>
            </div>

            <div className="flex w-full items-start justify-center gap-[10px] text-left lg:justify-start">
              <ClipboardCheck
                size={20}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[13px] lg:text-[12px] xl:text-[15px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[29px]">
                Distinguish requested, in-progress and report-ready tests.
              </p>
            </div>

            <div className="flex w-full items-start justify-center gap-[10px] text-left lg:justify-start">
              <FileSearch
                size={20}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[13px] lg:text-[12px] xl:text-[15px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[29px]">
                Open available reports and discuss results with your doctor.
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="mt-[17px] w-full max-w-[500px] text-center font-inter text-[10px] leading-[29px] text-[#94A3B8] sm:text-[11px] xl:text-[13px] 2xl:text-[18px] lg:text-left">
            Your doctor can help explain what your results mean for your care.
          </p>

        </div>

        {/* Right: Lab Reports Dashboard Image */}
        <div className="flex w-full max-w-[600px] items-center justify-center lg:w-[52%]">

          <img
            src={labReportsImage}
            alt="MediLink lab management dashboard showing diagnostic test requests and reports"
            className="block h-auto w-full rounded-[14px] object-contain"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
};

export default LabManagementSection;
