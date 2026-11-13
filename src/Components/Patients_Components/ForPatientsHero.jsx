
import { HandHeart } from "lucide-react";
import patientHero from "../../assets/ForPatients/patient-hero.png";

const ForPatientsHero = () => {
  return (
    <section className="w-full h-[708px] overflow-hidden bg-transparent px-5 py-12 sm:px-8 md:py-14 lg:px-10 lg:py-[70px]">

      <div className="mx-auto flex min-h-[auto] w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:gap-12 lg:min-h-[607px] lg:flex-row lg:gap-[45px] xl:gap-[55px]">

        {/* Left Content */}
        <div className="flex w-full flex-col items-start md:max-w-[680px] lg:w-[52%] lg:max-w-none">

          <span className="mb-[14px] font-inter text-[12px] font-semibold uppercase leading-[18px] tracking-[0.3px] text-[#009B95] sm:text-[14px] lg:ml-[20px] xl:ml-[0px]">
            For Patients
          </span>

          <h1 className="max-w-[670px] font-jakarta text-[34px] font-normal leading-[1.15] text-[#292929] sm:text-[42px] md:text-[48px] lg:ml-[20px] lg:text-[52px] font-semibold xl:ml-[0px] xl:text-[64px]">
            Your health journey, made simpler.
          </h1>

          <p className="mt-[18px] max-w-[600px] font-inter text-[13px] font-normal leading-[22px] text-[#64748B] sm:text-[14px] xl:text-[18px] sm:leading-[24px] lg:ml-[20px] xl:ml-[0px]">
            From finding the right doctor to keeping track of your prescriptions and lab reports, MediLink brings your care together in one easy place.
          </p>

          {/* Buttons */}
          <div className="mt-[23px] flex w-full flex-wrap items-center gap-3 sm:gap-4 lg:ml-[20px] xl:ml-[0px]">

            <button className="rounded-full border border-[#009B95] bg-[#009B95] px-[20px] py-[11px] font-geist text-[12px] font-medium leading-[21px] text-white transition-colors duration-200 hover:bg-[#007F7A] sm:px-[25px] sm:text-[14px]">
              Book Appointment
            </button>

            <button className="rounded-full border border-[#007F7A] bg-white px-[20px] py-[11px] font-geist text-[12px] font-medium leading-[21px] text-[#007F7A] transition-colors duration-200 hover:bg-[#E5F5F3] sm:px-[25px] sm:text-[14px]">
              Download App
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[602px] shrink-0 md:max-w-[650px] lg:w-[48%] lg:max-w-[560px] xl:max-w-[734px]">

          <img
            src={patientHero}
            alt="Patient using MediLink healthcare services"
            className="aspect-[4/3] w-full rounded-[18px] object-cover sm:rounded-[22px] lg:rounded-[24px]"
          />

          {/* Floating Information Card */}
          <div className="absolute bottom-[14px] left-1/2 flex w-[calc(100%-24px)] max-w-[341px] -translate-x-1/2 items-center gap-[12px] rounded-[12px] bg-white px-[14px] py-[11px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:bottom-[22px] sm:left-[20px] sm:w-[341px] sm:translate-x-0 sm:gap-[15px] sm:px-[18px] sm:py-[13px]">

            <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center text-[#008C86]">
              <HandHeart size={23} strokeWidth={1.5} />
            </div>

            <div className="min-w-0">
              <h3 className="font-inter text-[12px] font-semibold leading-[19px] text-[#292929] sm:text-[14px] sm:leading-[21px]">
                Your care, a little closer
              </h3>

              <p className="mt-[2px] font-inter text-[10px] font-normal leading-[16px] text-[#64748B] sm:text-[12px] sm:leading-[18px]">
                Appointments and records in one place
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ForPatientsHero;
