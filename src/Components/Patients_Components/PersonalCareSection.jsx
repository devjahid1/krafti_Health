
import {
  CalendarDays,
  FolderOpen,
  ClipboardList,
} from "lucide-react";

import patientCareImage from "../../assets/ForPatients/Patientcare.png";

const PersonalCareSection = () => {
  return (
    <section className="flex min-h-[700px] w-full items-center justify-center bg-[#F5F9FA] px-5 py-[65px] sm:px-8 lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[120px]">

        {/* Left: Patient Care Image */}
        <div className="flex w-full max-w-[640px] h-[573px] shrink-0 items-center justify-center lg:w-[48%]">
          <img
            src={patientCareImage}
            alt="MediLink patient care dashboard"
            className="h-auto w-full rounded-[12px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="flex w-full max-w-[710px] flex-col items-start justify-center lg:w-[52%]">

          <span className="mb-[14px] font-inter text-[15px] font-semibold uppercase tracking-[0.2px] text-[#009591]">
            Your Personal Care Space
          </span>

          <h2 className="font-jakarta w-[710px] text-[30px] font-normal leading-[1.15] text-[#292929] sm:text-[48px] pb-[26px]">
            Your next visit. Your latest records. All together.
          </h2>

          <p className="mt-[14px] w-[490px] font-inter text-[18px] leading-[18px] text-[#64748B] sm:text-[12px] sm:leading-[26px]">
            No more searching through messages or paper files. Your MediLink account gives your health information a clear, familiar home.
          </p>

          {/* Feature List */}
          <div className="mt-[17px] flex flex-col gap-[14px] pb-[20px]">

            <div className="flex items-start gap-[9px]">
              <CalendarDays
                size={13}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#292929]"
              />

              <p className="font-inter text-[11px] leading-[18px] text-[#64748B] pb-[10px]">
                See upcoming appointments and clinic details at a glance.
              </p>
            </div>

            <div className="flex items-start gap-[9px] pb-[10px]">
              <ClipboardList
                size={13}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#292929]"
              />

              <p className="font-inter text-[11px] leading-[18px] text-[#64748B]">
                Revisit your doctor's prescriptions and download reports.
              </p>
            </div>

            <div className="flex items-start gap-[9px]">
              <FolderOpen
                size={13}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#292929]"
              />

              <p className="font-inter text-[11px] leading-[18px] text-[#64748B]">
                Keep a useful record for your next conversation with your doctor.
              </p>
            </div>

          </div>

          {/* Sign In Button */}
          <button className="mt-[17px] rounded-full border border-[#007F7A] bg-white px-[17px] py-[7px] font-geist text-[10px] font-medium text-[#007F7A] transition-colors duration-200 hover:bg-[#007F7A] hover:text-white">
            Sign In to My Account
          </button>

        </div>

      </div>
    </section>
  );
};

export default PersonalCareSection;
