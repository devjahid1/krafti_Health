
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Search for a doctor, select an available date and time, then enter your details. Review your appointment information before confirming your booking.",
  },
  {
    question: "Where can I find my digital prescriptions?",
    answer:
      "Sign in to your MediLink account and visit the Prescriptions section. You can view your available digital prescriptions and download a copy for future reference.",
  },
  {
    question: "How will I know when my lab report is ready?",
    answer:
      "You can check your Lab Reports section in your MediLink account to see available reports. Reports will appear when the diagnostic center has uploaded them.",
  },
  {
    question: "Can I change an upcoming appointment?",
    answer:
      "You can check your upcoming appointments from your account. If you need to reschedule or cancel, follow the available appointment options or contact the hospital for assistance.",
  },
  {
    question: "Is MediLink for emergency care?",
    answer:
      "No. MediLink is designed for healthcare management and appointment services, not emergency treatment. For a medical emergency, contact your local emergency service or visit the nearest hospital.",
  },
];

const PatientFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[80px]">

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 md:gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-[65px] xl:gap-[100px]">

        {/* Left Content */}
        <div className="flex w-full flex-col items-start md:items-center lg:w-[36%] lg:shrink-0 lg:items-start">

          <span className="mb-[12px] font-inter text-[11px] font-semibold uppercase tracking-[0.5px] text-[#009591] sm:mb-[15px] sm:text-[12px]">
            Need a hand?
          </span>

          <h2 className="max-w-[460px] text-left font-jakarta text-[28px] font-semibold leading-[1.2] text-[#292929] sm:text-[34px] md:text-center md:text-[38px] lg:text-left lg:text-[48px]">
            A little clarity before you book.
          </h2>

          <p className="mt-[14px] max-w-[460px] font-inter text-[12px] font-normal leading-[20px] text-[#64748B] sm:mt-[17px] sm:text-[18px] sm:leading-[21px] md:text-center lg:text-left">
            Here are a few things patients often ask. For account or booking
            help, visit our Help Center.
          </p>

          <a
            href="#help-center"
            className="mt-[16px] inline-flex items-center gap-[7px] font-inter text-[12px] font-semibold text-[#009591] transition-colors duration-200 hover:text-[#006F6B] sm:mt-[18px] sm:text-[13px]"
          >
            Visit Help Center
            <ArrowRight size={15} />
          </a>

        </div>

        {/* Right: FAQ Accordion */}
        <div className="flex w-full flex-col lg:flex-1">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#E1E9EB]"
              >

                {/* FAQ Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-[16px] text-left sm:py-[18px] lg:py-[20px]"
                >
                  <span className="font-inter text-[13px] font-medium leading-[20px] text-[#292929] sm:text-[14px] sm:leading-[22px] md:text-[21px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.7}
                    className={`shrink-0 text-[#009591] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* FAQ Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-[15px] opacity-100 sm:pb-[17px]"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[700px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[21px] md:text-[18px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default PatientFAQ;
