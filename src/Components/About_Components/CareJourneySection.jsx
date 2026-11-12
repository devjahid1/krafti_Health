
import {
  Search,
  CalendarCheck,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Patients find care",
    description:
      "Choose a doctor, book an available time and keep appointment details easy to find.",
    icon: Search,
  },
  {
    id: 2,
    title: "Doctors stay organised",
    description:
      "Manage appointments, issue digital prescriptions and request diagnostic tests.",
    icon: CalendarCheck,
  },
  {
    id: 3,
    title: "Care stays connected",
    description:
      "Prescriptions and lab reports remain part of the journey, ready for the next follow-up.",
    icon: HeartHandshake,
  },
];

const CareJourneySection = () => {
  return (
    <section className="w-full overflow-hidden border-x-2 border-[#38BDF8] bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto w-full max-w-[1250px]">

        {/* Section Heading */}
        <div className="mb-[30px] text-center sm:mb-[35px] lg:mb-[40px]">

          <h2 className="font-jakarta text-[23px] font-semibold leading-[1.2] text-[#292929] sm:text-[28px] md:text-[34px] lg:text-[40px]">
            One connection. A more complete care journey.
          </h2>

          <p className="mt-[9px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[20px]">
            We connect the people and information that make everyday healthcare work.
          </p>

        </div>

        {/* Journey Steps */}
        <div className="mx-auto grid w-full max-w-[1050px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[35px] xl:gap-[45px]">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="flex w-full flex-col items-start"
              >

                {/* Icon */}
                <div className="mb-[12px] flex h-[42px] w-[42px] items-center justify-center rounded-[7px] bg-[#BDEDEA] text-[#008F89] sm:h-[46px] sm:w-[46px]">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                {/* Step Title */}
                <h3 className="mb-[8px] font-jakarta text-[14px] font-semibold leading-[20px] text-[#292929] sm:text-[15px]">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-[320px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[20px]">
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

export default CareJourneySection;
