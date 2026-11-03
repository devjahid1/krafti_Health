import arrow from "../../assets/HomeImg/arrow.png";

import {
  Search,
  CalendarDays,
  FilePenLine,
  FlaskConical,
} from "lucide-react";

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
      <div className="mx-auto max-w-[1920px]">

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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 flex items-center">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-start px-2 lg:px-[20px]"
              >
                {/* Icon */}
                <div className="mb-[9px] flex h-[64px] w-[64px] items-center justify-center gap-[10px] rounded-[7px] bg-[#BDEBEC] p-[16px] text-[#006F6C]">
                  <Icon
                    size={32}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-[6px] text-[24px] font-medium leading-[32px] text-[#292929]">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="ml-[13px] w-[164px] max-w-[190px] text-[12px] leading-[18px] text-[#64748B]">
                  {step.description}
                </p>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="absolute right-[-40px] top-[calc(50%+5px)] hidden -translate-y-1/2 lg:block">
                    <img
                      src={arrow}
                      alt=""
                      className="h-auto w-[40px] object-contain"
                    />
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