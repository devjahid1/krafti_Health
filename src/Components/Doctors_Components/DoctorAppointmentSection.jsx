
import {
  Clock3,
  ClipboardList,
  CalendarCheck,
} from "lucide-react";

import doctorAppointments from "../../assets/ForDoctors/DoctorAppointments.png";

const DoctorAppointmentSection = () => {
  return (
    <section className="flex w-full h-[815px] items-center justify-center bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:min-h-[550px] lg:px-10 lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[55px] xl:gap-[75px]">

        {/* Left Content */}
        <div className="flex w-full max-w-[560px] flex-col items-center text-center lg:w-[40%] lg:items-start lg:text-left">

          <span className="mb-[13px] font-inter text-[11px] font-semibold uppercase tracking-[0.4px] text-[#009591] sm:text-[12px] md:text-[13px] xl:text-[15px]">
            A Calmer Working Day
          </span>

          <h2 className="w-full font-jakarta text-[26px] font-semibold leading-[1.17] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-left lg:text-[40px] xl:text-[48px]">
            Start with a clear view of who's coming next.
          </h2>

          <p className="mt-[15px] max-w-[580px] pt-[20px] pb-[20px] font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-center md:text-[14px] lg:pt-[26px] lg:pb-[26px] lg:text-left lg:text-[16px] xl:text-[18px] xl:leading-[29px]">
            Your appointment workspace keeps the day's visits in focus, with
            the context you need before each conversation.
          </p>

          {/* Feature List */}
          <div className="mt-[20px] flex w-full flex-col gap-[15px]">

            <div className="flex items-start gap-[10px] text-left">
              <Clock3
                size={18}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[21px] md:text-[14px] lg:text-[16px] xl:text-[18px] xl:leading-[22px]">
                See visit times, appointment types and booking status.
              </p>
            </div>

            <div className="flex items-start gap-[10px] text-left">
              <ClipboardList
                size={18}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[21px] md:text-[14px] lg:text-[16px] xl:text-[18px] xl:leading-[22px]">
                Open the patient record from the appointment.
              </p>
            </div>

            <div className="flex items-start gap-[10px] text-left">
              <CalendarCheck
                size={18}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[21px] md:text-[14px] lg:text-[16px] xl:text-[18px] xl:leading-[22px]">
                Keep your available hours aligned with your practice.
              </p>
            </div>

          </div>
        </div>

        {/* Right: Doctor Appointment Dashboard Image */}
        <div className="w-full max-w-[810px] shrink-0 lg:w-[60%]">
          <img
            src={doctorAppointments}
            alt="MediLink doctor appointment management dashboard showing today's appointments"
            className="h-auto w-full rounded-[12px] object-contain"
          />

          <p className="ml-10 mt-[10px] font-inter text-[10px] leading-[16px] text-[#94A3B8] sm:text-[12px] md:text-[14px] xl:text-[18px]">
            Sample doctor workspace · Fictional patient records
          </p>
        </div>

      </div>
    </section>
  );
};

export default DoctorAppointmentSection;
