
import {
  ClipboardList,
  FileText,
} from "lucide-react";

import doctorCareImage from "../../assets/ForDoctors/DoctorCareJourney.png";

const DoctorCareJourneySection = () => {
  return (
    <section className="flex w-full items-center justify-center bg-white px-5 py-[50px] sm:px-8 sm:py-[65px] lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1450px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[65px] xl:gap-[40px]">

        {/* Left: Patient Care Image */}
        <div className="flex w-full max-w-[680px] items-center justify-center lg:w-[48%] lg:-translate-x-[60px]">
          <img
            src={doctorCareImage}
            alt="MediLink patient care timeline showing consultations, lab reports and digital prescriptions"
            className="h-auto w-full rounded-[14px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="flex w-full max-w-[650px] flex-col items-start md:items-center lg:w-[52%] lg:items-start lg:-translate-x-[55px]">

          <span className="mb-[13px] font-inter text-[11px] font-semibold uppercase tracking-[0.4px] text-[#009591] sm:text-[15px]">
            Beyond the Appointment
          </span>

          <h2 className="w-[700px] text-left font-jakarta text-[29px] font-semibold leading-[1.17] text-[#292929] sm:text-[36px] md:text-center md:text-[40px] lg:text-left lg:text-[48px]">
            Keep the whole care journey in view.
          </h2>

          <p className="mt-[15px] w-full max-w-[700px] text-left font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[18px] sm:leading-[29px] md:text-center lg:text-left">
            A consultation doesn't end when the visit does. Connect your prescriptions and lab requests to the patient record so the next step is clear for you and your patient.
          </p>

          {/* Feature Points */}
          <div className="mt-[20px] flex w-full flex-col gap-[14px]">

            <div className="flex items-start gap-[10px]">
              <ClipboardList
                size={15}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#292929]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[18px] sm:leading-[21px]">
                Access past prescriptions and available test reports.
              </p>
            </div>

            <div className="flex items-start gap-[10px]">
              <FileText
                size={15}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#292929]"
              />

              <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[18px] sm:leading-[21px]">
                Give patients a simple way to revisit their care documents.
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-[20px] rounded-full border border-[#007F7A] bg-white px-[19px] py-[9px] font-geist text-[11px] font-medium text-[#007F7A] transition-colors duration-200 hover:bg-[#007F7A] hover:text-white sm:text-[12px]">
            See How It Works
          </button>

        </div>

      </div>
    </section>
  );
};

export default DoctorCareJourneySection;
