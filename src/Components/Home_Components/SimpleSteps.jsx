
import {
  Search,
  CalendarDays,
  FilePenLine,
  FlaskConical,
} from "lucide-react";

import arrow from "../../assets/HomeImg/arrow.png";

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
    <section
      className="
        mt-6 h-auto w-full bg-[#F2F9FC]
        px-5 py-10
        sm:px-8 sm:py-12
        md:px-10 md:py-[55px]
        lg:py-[65px]
        xl:h-[576px] xl:py-[75px]
      "
    >
      <div className="mx-auto w-full">

        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-9 md:mb-[38px]">

          <h2
            className="
              mt-0 mb-3
              font-jakarta text-[23px] font-semibold leading-[1.3]
              text-[#292929]
              sm:text-[28px]
              md:text-[36px] md:leading-[44px]
              lg:text-[42px]
              xl:mt-23 xl:mb-5 xl:text-[52px] xl:leading-[40px]
            "
          >
            Simple Steps to Better Healthcare
          </h2>

          <p
            className="
              mt-2 font-inter text-[13px] leading-[21px]
              text-[#64748B]
              sm:text-[15px] sm:leading-[24px]
              md:text-[16px]
              lg:text-[17px]
              xl:text-[18px]
            "
          >
            Get the care you need in just a few steps
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            mx-auto grid w-full
            grid-cols-1 justify-items-center
            gap-8
            sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9
            lg:gap-x-10 lg:gap-y-10
            xl:flex xl:flex-row xl:items-center xl:justify-around xl:gap-0
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="
                  relative flex w-full max-w-[300px]
                  flex-col items-center
                  text-center
                  sm:max-w-[320px]
                  xl:w-auto xl:max-w-none
                  xl:items-start xl:px-0 xl:text-left
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-3 flex h-[52px] w-[52px] shrink-0
                    items-center justify-center
                    rounded-[7px] bg-[#BDEBEC]
                    p-3 text-[#006F6C]
                    sm:h-[58px] sm:w-[58px]
                    xl:mb-[9px] xl:h-[64px] xl:w-[64px] xl:p-[16px]
                  "
                >
                  <Icon
                    size={32}
                    strokeWidth={1.6}
                    className="h-[25px] w-[25px] sm:h-[28px] sm:w-[28px] xl:h-8 xl:w-8"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-2 whitespace-normal
                    font-inter text-[17px] font-medium leading-[24px]
                    text-[#292929]
                    sm:text-[19px] sm:leading-[27px]
                    md:text-[21px]
                    xl:mb-[6px] xl:whitespace-nowrap
                    xl:text-[24px] xl:leading-[32px]
                  "
                >
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    w-full max-w-[250px]
                    text-[13px] leading-[20px]
                    text-[#64748B]
                    sm:text-[14px] sm:leading-[21px]
                    md:text-[15px] md:leading-[22px]
                    xl:ml-[13px] xl:w-[240px] xl:max-w-[290px]
                    xl:text-[18px] xl:leading-[18px]
                    xl:text-left
                  "
                >
                  {step.description}
                </p>

                {/* Arrow - Visible only from 1280px to 1535px */}
                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute top-[73px] right-[-70px] z-50
                      hidden h-[33px] w-[83px]
                      items-center justify-center
                      xl:flex 2xl:hidden
                    "
                  >
                    <img
                      src={arrow}
                      alt=""
                      className="h-full w-full object-contain"
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
