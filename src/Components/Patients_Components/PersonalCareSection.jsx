
import {
  CalendarDays,
  FolderOpen,
  ClipboardList,
} from "lucide-react";

import patientCareImage from "../../assets/ForPatients/Patientcare.png";

const PersonalCareSection = () => {
  return (
    <section className="flex min-h-[auto] w-full items-center justify-center bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:min-h-[700px] lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[55px] xl:gap-[120px]">

        {/* Left: Patient Care Image */}
        <div className="flex h-auto w-full max-w-[640px] shrink-0 items-center justify-center md:max-w-[650px] lg:h-[500px] lg:w-[48%] xl:h-[573px]">
          <img
            src={patientCareImage}
            alt="MediLink patient care dashboard"
            className="h-auto max-h-full w-full rounded-[12px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="flex w-full max-w-[710px] flex-col items-start justify-center md:items-center lg:w-[52%] lg:items-start">

          <span className="mb-[12px] font-inter text-[12px] font-semibold uppercase tracking-[0.2px] text-[#009591] sm:mb-[14px] sm:text-[14px] lg:text-[15px]">
            Your Personal Care Space
          </span>

          <h2 className="w-full pb-[18px] text-left font-jakarta text-[29px] font-normal leading-[1.15] text-[#292929] sm:pb-[22px] sm:text-[38px] md:text-center md:text-[42px] lg:pb-[26px] lg:text-left lg:text-[44px] xl:text-[48px]">
            Your next visit. Your latest records. All together.
          </h2>

          <p className="mt-[5px] w-full max-w-[490px] text-left font-inter text-[13px] leading-[22px] text-[#64748B] sm:text-[14px] sm:leading-[24px] md:text-center lg:mt-[14px] lg:text-left lg:text-[16px] lg:leading-[26px] xl:text-[18px]">
            No more searching through messages or paper files. Your MediLink account gives your health information a clear, familiar home.
          </p>

          {/* Feature List */}
          <div className="mt-[20px] flex w-full flex-col gap-[14px] pb-[15px] sm:mt-[24px] lg:mt-[17px] lg:pb-[20px]">

            <div className="flex items-start gap-[10px]">
              <CalendarDays
                size={17}
                strokeWidth={1.7}
                className="mt-[3px] shrink-0 text-[#292929] sm:h-[19px] sm:w-[19px]"
              />

              <p className="font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] lg:text-[14px] lg:leading-[24px]">
                See upcoming appointments and clinic details at a glance.
              </p>
            </div>

            <div className="flex items-start gap-[10px]">
              <ClipboardList
                size={17}
                strokeWidth={1.7}
                className="mt-[3px] shrink-0 text-[#292929] sm:h-[19px] sm:w-[19px]"
              />

              <p className="font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] lg:text-[14px] lg:leading-[24px]">
                Revisit your doctor's prescriptions and download reports.
              </p>
            </div>

            <div className="flex items-start gap-[10px]">
              <FolderOpen
                size={17}
                strokeWidth={1.7}
                className="mt-[3px] shrink-0 text-[#292929] sm:h-[19px] sm:w-[19px]"
              />

              <p className="font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] lg:text-[14px] lg:leading-[24px]">
                Keep a useful record for your next conversation with your doctor.
              </p>
            </div>

          </div>

          {/* Sign In Button */}
          <button className="mt-[10px] rounded-full border border-[#007F7A] bg-white px-[20px] py-[9px] font-geist text-[11px] font-medium text-[#007F7A] transition-colors duration-200 hover:bg-[#007F7A] hover:text-white sm:px-[22px] sm:py-[10px] sm:text-[12px] lg:mt-[17px] lg:px-[25px] lg:py-[11px] lg:text-[14px]">
            Sign In to My Account
          </button>

        </div>

      </div>
    </section>
  );
};

export default PersonalCareSection;
