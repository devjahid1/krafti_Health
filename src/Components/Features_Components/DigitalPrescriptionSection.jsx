
import {
  Pill,
  ClipboardList,
  Download,
} from "lucide-react";

import prescriptionImage from "../../assets/FeaturesImg/DigitalPrescription.png";

const DigitalPrescriptionSection = () => {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[65px] lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:gap-[65px] xl:gap-[85px]">

        {/* Left: Prescription Image */}
        <div className="flex w-full max-w-[540px] shrink-0 items-center justify-center lg:w-[46%]">

          <img
            src={prescriptionImage}
            alt="MediLink digital prescription preview"
            className="block h-auto w-full rounded-[14px] object-contain"
            loading="lazy"
          />

        </div>

        {/* Right: Content */}
        <div className="flex w-full max-w-[610px] flex-col items-center text-center lg:w-[54%] lg:items-start lg:text-left">

          {/* Eyebrow */}
          <span className="mb-[13px] font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009B95] sm:text-[11px] md:text-[12px]">
            02 / Digital Prescriptions (RX)
          </span>

          {/* Heading */}
          <h2 className="w-full max-w-[610px] break-words text-center font-jakarta text-[26px] font-semibold leading-[1.16] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-left lg:text-[40px] xl:text-[46px]">
            Clear prescriptions. Easier to keep track.
          </h2>

          {/* Description */}
          <p className="mt-[15px] w-full max-w-[550px] text-center font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-[14px] md:leading-[23px] lg:text-left lg:text-[13px] xl:text-[13px]">
            Doctors can create a digital prescription linked to the consultation.
            Patients can revisit it in their account whenever they need it.
          </p>

          {/* Feature List */}
          <div className="mt-[22px] flex w-full flex-col gap-[14px]">

            <div className="flex items-start gap-[10px] text-left">
              <Pill
                size={16}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[20px] text-[#64748B] sm:text-[12px] sm:leading-[22px] md:text-[13px] lg:text-[12px]">
                Keep medication, directions and prescriber details together.
              </p>
            </div>

            <div className="flex items-start gap-[10px] text-left">
              <ClipboardList
                size={16}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[20px] text-[#64748B] sm:text-[12px] sm:leading-[22px] md:text-[13px] lg:text-[12px]">
                Access prescription history for a more informed follow-up.
              </p>
            </div>

            <div className="flex items-start gap-[10px] text-left">
              <Download
                size={16}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#009591]"
              />

              <p className="font-inter text-[11px] leading-[20px] text-[#64748B] sm:text-[12px] sm:leading-[22px] md:text-[13px] lg:text-[12px]">
                Download a readable copy whenever you need it.
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="mt-[18px] w-full max-w-[550px] text-center font-inter text-[10px] leading-[18px] text-[#94A3B8] sm:text-[11px] lg:text-left xl:text-[11px]">
            Prescriptions are issued by your doctor after a consultation.
            Always follow your clinician's advice.
          </p>

        </div>

      </div>

    </section>
  );
};

export default DigitalPrescriptionSection;
