
import {
  HeartHandshake,
  Lightbulb,
  Link2,
} from "lucide-react";

const principles = [
  {
    id: 1,
    title: "People come first",
    description:
      "We start with the needs of patients and doctors, making room for the conversations that matter.",
    tagline: "Listen carefully. Design with empathy.",
    icon: HeartHandshake,
  },
  {
    id: 2,
    title: "Make the complex clear",
    description:
      "Healthcare has enough moving parts. We aim to make the everyday steps easier to understand and manage.",
    tagline: "Clear information. Purposeful tools.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Keep care connected",
    description:
      "We believe better continuity starts when appointments, prescriptions and lab reports work together.",
    tagline: "Less fragmentation. More context.",
    icon: Link2,
  },
];

const OurPrinciples = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto w-full max-w-[1250px]">

        {/* Section Heading */}
        <div className="mb-[28px] text-center sm:mb-[34px] lg:mb-[38px]">

          <span className="mb-[10px] block font-inter text-[10px] font-semibold uppercase tracking-[0.4px] text-[#009B95] sm:text-[11px]">
            What Guides Us
          </span>

          <h2 className="font-jakarta text-[23px] font-semibold leading-[1.2] text-[#292929] sm:text-[28px] md:text-[34px] lg:text-[40px]">
            Thoughtful technology. Human care.
          </h2>

          <p className="mx-auto mt-[9px] max-w-[750px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[20px]">
            The principles behind the way we design MediLink and support the
            people who use it.
          </p>

        </div>

        {/* Principle Cards */}
        <div className="mx-auto grid w-full max-w-[1050px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[12px] xl:gap-[14px]">

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.id}
                className="flex min-h-[175px] flex-col rounded-[11px] border border-[#E3ECEE] bg-[#FCFDFD] p-[17px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(35,85,95,0.05)] sm:min-h-[185px] sm:p-[20px] lg:min-h-[190px] lg:p-[18px] xl:p-[20px]"
              >

                {/* Icon */}
                <div className="mb-[12px] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[6px] bg-[#E3F6F5] text-[#008F89]">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="mb-[9px] font-jakarta text-[14px] font-semibold leading-[20px] text-[#292929] sm:text-[15px]">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[20px]">
                  {principle.description}
                </p>

                {/* Tagline */}
                <p className="mt-auto pt-[13px] font-inter text-[10px] font-medium leading-[17px] text-[#008F89] sm:text-[11px]">
                  {principle.tagline}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default OurPrinciples;
