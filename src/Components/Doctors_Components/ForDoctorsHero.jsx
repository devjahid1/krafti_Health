
import { CalendarCheck } from "lucide-react";
import doctors_bg from "../../assets/ForDoctors/Doctors_img.png";

const ForDoctorsHero = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F0F8F9] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-[70px]">
      <div className="mx-auto flex min-h-[auto] w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:gap-12 lg:min-h-[520px] lg:flex-row lg:gap-[45px] xl:gap-[70px]">
        {/* Left Content */}
        <div className="flex w-full flex-col items-center text-center lg:w-[48%] lg:max-w-none lg:items-start lg:text-left">
          <span className="mb-[12px] font-inter text-[11px] font-semibold uppercase tracking-[0.3px] text-[#009B95] sm:mb-[14px] sm:text-[12px] lg:text-[13px] 2xl:text-[14px]">
            For Doctors
          </span>

          <h1 className="w-full max-w-[600px] font-jakarta text-[28px] font-semibold leading-[1.18] text-[#292929] sm:text-[34px] sm:leading-[1.15] md:text-[38px] lg:text-left lg:text-[42px] xl:text-[50px] 2xl:text-[64px]">
            Less admin. More connected patient care.
          </h1>

          <p className="mt-[15px] w-full max-w-[600px] font-inter text-[12px] font-normal leading-[20px] text-[#64748B] sm:mt-[18px] sm:text-[13px] sm:leading-[22px] md:text-center lg:text-left lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 2xl:leading-[24px]">
            Bring your schedule, digital prescriptions, lab requests and
            patient records into one clear workspace. Designed around the way
            you care.
          </p>

          {/* Buttons */}
          <div className="mt-[23px] flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <button className="rounded-full border border-[#009B95] bg-[#009B95] px-[20px] py-[11px] font-geist text-[11px] font-medium leading-[21px] text-white transition-colors duration-200 hover:bg-[#007F7A] sm:px-[25px] sm:text-[12px] lg:text-[13px] 2xl:text-[14px]">
              Join as a Doctor
            </button>

            <button className="rounded-full border border-[#007F7A] bg-white px-[20px] py-[11px] font-geist text-[11px] font-medium leading-[21px] text-[#007F7A] transition-colors duration-200 hover:bg-[#E5F5F3] sm:px-[25px] sm:text-[12px] lg:text-[13px] 2xl:text-[14px]">
              Explore Features
            </button>
          </div>

          <p className="mt-[15px] font-inter text-[10px] font-normal leading-[18px] text-[#64748B] sm:mt-[18px] sm:text-[11px] 2xl:text-[12px]">
            For independent doctors and connected care teams.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[602px] shrink-0 md:max-w-[650px] lg:w-[52%] lg:max-w-[560px] xl:max-w-[734px]">
          <img
            src={doctors_bg}
            alt="Doctor managing patient appointments and records"
            className="aspect-[4/3] w-full rounded-[18px] object-cover sm:rounded-[22px] lg:rounded-[24px]"
          />

          {/* Floating Information Card */}
          <div className="absolute bottom-[14px] left-1/2 flex w-[calc(100%-24px)] max-w-[341px] -translate-x-1/2 items-center gap-[12px] rounded-[12px] bg-white px-[14px] py-[11px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:bottom-[22px] sm:left-[20px] sm:w-[341px] sm:translate-x-0 sm:gap-[15px] sm:px-[18px] sm:py-[13px]">
            <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center text-[#008C86]">
              <CalendarCheck size={21} strokeWidth={1.6} />
            </div>

            <div className="min-w-0">
              <h3 className="font-inter text-[11px] font-semibold leading-[19px] text-[#292929] sm:text-[12px] sm:leading-[21px] 2xl:text-[14px]">
                A clearer view of your day
              </h3>

              <p className="mt-[2px] font-inter text-[10px] font-normal leading-[16px] text-[#64748B] sm:text-[11px] sm:leading-[18px] 2xl:text-[12px]">
                From first appointment to follow-up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDoctorsHero;
