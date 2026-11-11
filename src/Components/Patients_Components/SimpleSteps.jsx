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
    description: "Explore specialties, profiles and available appointment times.",
    icon: Search,
  },
  {
    id: 2,
    title: "Book Appointment",
    description: "Choose your visit, add your details and review the booking.",
    icon: CalendarDays,
    },
  {
    id: 3,
    title: "Get Prescription",
    description: "After your consultation, view the prescription your doctor provides.",
    icon: FilePenLine,
  },
  {
    id: 4,
    title: "Access Lab Reports",
    description: "Follow test requests and view your results when available.",
    icon: FlaskConical,
  },
];

const SimpleSteps = () => {
  return (
    <section className="mt-6 w-full bg-[#FFF] px-5 py-[65px] md:px-10 lg:py-[75px]">
      <div className="mx-auto w-full">

        {/* Section Heading */}
        <div className="mb-[38px] text-center">
          <h2 className="text-[28px] font-jakarta font-semibold leading-[40px] text-[#292929] md:text-[48px]">
            Simple Steps to Better Healthcare
          </h2>

          <p className="mt-7 text-[18px]  leading-[18px] text-[#64748B] mb-10">
            Get the care you need in just a few steps
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto flex w-full flex-col items-start gap-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-around">

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
                <h3 className="mb-[6px] whitespace-nowrap text-[24px] font-medium leading-[32px] text-[#292929] ">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="ml-[13px] mb-5 w-[346px] max-w-[346px] text-[18px] leading-[29px] text-[#64748B]">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;