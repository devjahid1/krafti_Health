import {
  Search,
  CalendarDays,
  FilePenLine,
  FlaskConical,
} from "lucide-react";

import arrow from "../../assets/HomeImg/arrow.png"

const steps = [
  {
    id: 1,
    title: "Find a Doctor",
    description: "Search by speciality, location or availability.",
    icon: Search,
  },
  {
    id: 2,
    title: "Book Appointment",
    description: "Choose a suitable time and confirm your booking.",
    icon: CalendarDays,
    },
  {
    id: 3,
    title: "Get Prescription",
    description: "Receive a digital prescription after consultation.",
    icon: FilePenLine,
  },
  {
    id: 4,
    title: "Lab Tests",
    description: "Get diagnostic tests and receive reports online.",
    icon: FlaskConical,
  },
];

const SimpleSteps = () => {
  return (
    <section className="mt-6 w-full bg-[#F2F9FC] px-5 py-[65px] md:px-10 lg:py-[75px]">
      <div className="mx-auto w-full max-w-[1354px]">

        {/* Section Heading */}
        <div className="mb-[38px] text-center">
          <h2 className="text-[28px] font-semibold leading-[40px] text-[#292929] md:text-[34px]">
            Simple Steps to Better Healthcare
          </h2>

          <p className="mt-2 text-[12px] leading-[18px] text-[#64748B]">
            Get the care you need in just a few steps
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto grid w-full max-w-[1015px] grid-cols-1 items-center gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex min-w-0 flex-col items-start px-2 lg:px-0"
              >
                {/* Icon */}
                <div className="mb-[9px] flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[7px] bg-[#BDEBEC] p-[16px] text-[#006F6C]">
                  <Icon size={32} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3 className="mb-[6px] whitespace-nowrap text-[24px] font-medium leading-[32px] text-[#292929]">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="ml-[13px] w-[164px] max-w-[190px] text-[12px] leading-[18px] text-[#64748B]">
                  {step.description}
                </p>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="absolute right-[30px] top-[40px] z-50 hidden h-[33px] w-[83px] items-center justify-center lg:flex">
                    <span className="text-[38px] font-bold leading-none ">
                      <img src={arrow} alt="" />
                    </span>
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;