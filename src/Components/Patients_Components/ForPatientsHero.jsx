
import { HandHeart } from "lucide-react";
import patientHero from "../../assets/ForPatients/patient-hero.png";

const ForPatientsHero = () => {
  return (
<section className="w-full overflow-hidden bg-transparent px-5 py-12 sm:px-8 lg:px-10 lg:py-17.5">
      <div className="mx-auto grid w-full h-[607px] max-w-[1920px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[55px]">

        {/* Left Content */}
        <div className="flex flex-col items-start">
          <span className="mb-[14px] font-inter text-[15px] font-inter font-semibold uppercase leading-[18px] tracking-[0.3px] text-[#009B95] ml-[220px]">
            For Patients
          </span>

          <h1 className="max-w-[670px] ml-[220px] font-jakarta text-[38px] font-normal leading-[1.12] text-[#292929] sm:text-[46px] lg:text-[64px] font-jakarta">
            Your health journey, made simpler.
          </h1>

          <p className="mt-[24px] max-w-[670px] font-inter text-[14px] font-normal leading-[24px] text-[#64748B] sm:text-[15px] ml-[220px]">
            From finding the right doctor to keeping track of your prescriptions and lab reports, MediLink brings your care together in one easy place.
          </p>

          {/* Buttons */}
          <div className="mt-[23px] flex flex-wrap items-center gap-4 ml-[220px]">
            <button className="rounded-full border border-[#009B95] bg-[#009B95] px-[25px] py-[11px] font-geist text-[14px] font-medium leading-[21px] text-white transition-colors duration-200 hover:bg-[#007F7A]">
              Book Appointment
            </button>

            <button className="rounded-full border border-[#007F7A] bg-white px-[25px] py-[11px] font-geist text-[14px] font-medium leading-[21px] text-[#007F7A] transition-colors duration-200 hover:bg-[#E5F5F3]">
              Download App
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[602px]">
          <img
            src={patientHero}
            alt="Patient using MediLink healthcare services"
            className="aspect-[4/3] w-full rounded-[24px] object-cover"
          />

          {/* Floating Information Card */}
          <div className="absolute bottom-[22px] left-1/2 flex w-[calc(100%-32px)] max-w-[341px] -translate-x-1/2 items-center gap-[15px] rounded-[14px] bg-white px-[18px] py-[13px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:bottom-[22px] sm:left-[25px] sm:w-[341px] sm:translate-x-0">

            <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center text-[#008C86]">
              <HandHeart size={23} strokeWidth={1.5} />
            </div>

            <div className="min-w-0">
              <h3 className="font-inter text-[14px] font-semibold leading-[21px] text-[#292929]">
                Your care, a little closer
              </h3>

              <p className="mt-[2px] font-inter text-[12px] font-normal leading-[18px] text-[#64748B]">
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
