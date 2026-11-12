
import {
  Search,
  CalendarDays,
  ClipboardList,
} from "lucide-react";

import appointmentPreview from "../../assets/FeaturesImg/AppointmentPreview.png";

const AppointmentSystemSection = () => {
  return (
    <section className="flex w-full items-center justify-center bg-white px-5 py-[50px] sm:px-8 sm:py-[65px] lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[70px] xl:gap-[100px]">

        {/* Left Content */}
        <div className="flex w-full max-w-[560px] flex-col items-center text-center lg:w-[48%] lg:items-start lg:text-left">

          <span className="mb-[13px] font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009591] sm:text-[11px] md:text-[12px]">
            01 / Appointment System
          </span>

          <h2 className="w-full font-jakarta text-[26px] font-semibold leading-[1.17] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-left lg:text-[40px] xl:text-[42px]">
            The right visit, without the back-and-forth.
          </h2>

          <p className="mt-[15px] w-full max-w-[490px] font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-center md:text-[14px] lg:text-left lg:text-[16px]">
            Give patients a clear route from finding a doctor to choosing an
            available time. Give doctors a schedule they can manage in one
            place.
          </p>

          {/* Feature List */}
          <div className="mt-[20px] flex w-full flex-col gap-[13px]">

            <div className="flex items-start gap-[10px] text-left">
              <Search
                size={15}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[13px] lg:text-[14px] xl:text-[14px]">
                Search by speciality, location and appointment availability.
              </p>
            </div>

            <div className="flex items-start gap-[10px] text-left">
              <CalendarDays
                size={15}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[13px] lg:text-[14px] xl:text-[14px]">
                Review the doctor, visit type, time and fee before booking.
              </p>
            </div>

            <div className="flex items-start gap-[10px] text-left">
              <ClipboardList
                size={15}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[13px] lg:text-[14px] xl:text-[14px]">
                View upcoming appointments and keep visit details close.
              </p>
            </div>

          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-[20px] rounded-full border border-[#007F7A] bg-white px-[19px] py-[8px] font-geist text-[11px] font-medium text-[#007F7A] transition-colors duration-200 hover:bg-[#007F7A] hover:text-white sm:text-[12px]"
          >
            Find a Doctor
          </button>

        </div>

        {/* Right: Appointment Preview Image */}
        <div className="flex w-full max-w-[600px] items-center justify-center lg:w-[52%]">

          <img
            src={appointmentPreview}
            alt="MediLink appointment booking interface preview"
            className="block h-auto w-full rounded-[14px] object-contain"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
};

export default AppointmentSystemSection;
