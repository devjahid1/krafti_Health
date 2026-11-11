
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
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full border-x-[2px] border-[#38BDF8] bg-[#F5F9FA] px-5 py-[65px] sm:px-8 lg:px-10 lg:py-[80px]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-[100px]">

        {/* Left Content */}
        <div className="flex flex-col items-start">
          <span className="mb-[15px] font-inter text-[11px] font-semibold uppercase tracking-[0.5px] text-[#009591]">
            Need a hand?
          </span>

          <h2 className="max-w-[380px] font-jakarta text-[32px] font-semibold leading-[1.2] text-[#292929] sm:text-[40px]">
            A little clarity before you book.
          </h2>

          <p className="mt-[17px] max-w-[360px] font-inter text-[13px] font-normal leading-[21px] text-[#64748B]">
            Here are a few things patients often ask. For account or booking
            help, visit our Help Center.
          </p>

          <a
            href="#help-center"
            className="mt-[18px] inline-flex items-center gap-[7px] font-inter text-[13px] font-semibold text-[#009591] transition-colors duration-200 hover:text-[#006F6B]"
          >
            Visit Help Center
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Right: FAQ Accordion */}
        <div className="flex w-full flex-col">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#E1E9EB]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-[17px] text-left"
                >
                  <span className="font-inter text-[14px] font-medium leading-[21px] text-[#292929] sm:text-[15px]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.7}
                    className={`shrink-0 text-[#009591] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-[17px] opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[700px] font-inter text-[12px] font-normal leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[21px]">
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
