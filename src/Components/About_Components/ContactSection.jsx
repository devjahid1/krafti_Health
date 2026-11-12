
import {
  ArrowRight,
  Headset,
  Stethoscope,
} from "lucide-react";

import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#EFF7F8] px-5 py-[50px] sm:px-8 sm:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center gap-10 md:gap-12 lg:flex-row lg:items-start lg:gap-[55px] xl:gap-[70px]">

        {/* Left: Contact Information */}
        <div className="flex w-full max-w-[560px] flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left">

          <span className="mb-[14px] font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009B95] sm:text-[11px] md:text-[12px]">
            Let's Connect
          </span>

          <h2 className="w-full font-jakarta text-[27px] font-semibold leading-[1.15] text-[#292929] sm:text-[32px] md:text-[38px] lg:text-[40px] xl:text-[42px]">
            A question?
            <br />
            We're here to help.
          </h2>

          <p className="mt-[16px] w-full max-w-[440px] font-inter text-[12px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px]">
            Whether you're booking care, joining as a doctor or learning about
            MediLink, start with the support that's right for you.
          </p>

          {/* Patient Support */}
          <div className="mt-[20px] w-full max-w-[440px] rounded-[10px] border border-[#E8EFF0] bg-white px-[20px] py-[16px] text-left sm:px-[25px] sm:py-[18px]">

            <div className="flex items-center gap-[9px]">
              <Headset
                size={17}
                strokeWidth={1.6}
                className="shrink-0 text-[#008F89]"
              />

              <h3 className="font-jakarta text-[13px] font-semibold text-[#292929] sm:text-[14px]">
                Patient & account support
              </h3>
            </div>

            <p className="mt-[6px] font-inter text-[11px] leading-[18px] text-[#64748B]">
              Get help with bookings, sign-in and your records.
            </p>

            <a
              href="#help-center"
              className="mt-[5px] inline-flex items-center gap-[5px] font-inter text-[11px] font-semibold text-[#009B95] transition-colors hover:text-[#006F6B]"
            >
              Visit Help Center
              <ArrowRight size={12} />
            </a>

          </div>

          {/* Doctor Support */}
          <div className="mt-[13px] w-full max-w-[440px] rounded-[10px] border border-[#E8EFF0] bg-white px-[20px] py-[16px] text-left sm:px-[25px] sm:py-[18px]">

            <div className="flex items-center gap-[9px]">
              <Stethoscope
                size={17}
                strokeWidth={1.6}
                className="shrink-0 text-[#008F89]"
              />

              <h3 className="font-jakarta text-[13px] font-semibold text-[#292929] sm:text-[14px]">
                For doctors
              </h3>
            </div>

            <p className="mt-[6px] font-inter text-[11px] leading-[18px] text-[#64748B]">
              Questions about your profile or practice workspace?
            </p>

            <a
              href="#doctor-support"
              className="mt-[5px] inline-flex items-center gap-[5px] font-inter text-[11px] font-semibold text-[#009B95] transition-colors hover:text-[#006F6B]"
            >
              Doctor Support
              <ArrowRight size={12} />
            </a>

          </div>

          {/* Disclaimer */}
          <p className="mt-[17px] w-full max-w-[440px] font-inter text-[10px] leading-[17px] text-[#64748B] sm:text-[11px]">
            MediLink support is not a medical service. For urgent medical
            help, contact your local emergency services.
          </p>

        </div>

        {/* Right: Contact Form */}
        <div className="w-full max-w-[650px] lg:w-[55%]">
          <ContactForm />
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
