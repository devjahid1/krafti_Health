
import {
  UserRound,
  Share2,
  CalendarDays,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create your profile",
    description:
      "Tell us about your specialty, clinic and professional background.",
    icon: UserRound,
  },
  {
    id: 2,
    title: "Share your details",
    description:
      "Submit the professional information needed for profile review.",
    icon: Share2,
  },
  {
    id: 3,
    title: "Set your availability",
    description:
      "Choose your consultation hours and appointment preferences.",
    icon: CalendarDays,
  },
  {
    id: 4,
    title: "Start seeing patients",
    description:
      "Manage bookings, prescriptions and lab requests in one place.",
    icon: Stethoscope,
  },
];

const DoctorOnboardingSection = () => {
  return (
    <section className="w-full h-[653px] border-x-2 border-[#38BDF8] bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[50px]">

      <div className="mx-auto w-full max-w-[1920px] px-[220px]">

        {/* Section Heading */}
        <div className="mb-[32px] mt-[75px] text-center sm:mb-[38px] lg:mb-[42px]">

          <h2 className="font-jakarta text-[25px] font-semibold leading-[1.2] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-[48px]">
            Make MediLink part of your practice
          </h2>

          <p className="mt-[9px] font-inter text-[11px] leading-[29px] text-[#64748B] sm:text-[18px]">
            A clear path from your professional profile to your first appointment.
          </p>

        </div>

        {/* Onboarding Steps */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[25px] xl:gap-[30px]">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="flex flex-col items-start"
              >

                {/* Icon */}
                <div className="mb-[12px] flex h-[42px] w-[42px] items-center justify-center rounded-[7px] bg-[#BDEDEA] text-[#008F89] sm:h-[46px] sm:w-[46px]">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                {/* Step Title */}
                <h3 className="mb-[8px] font-jakarta text-[15px] font-semibold leading-[21px] text-[#292929] sm:text-[24px] pb-[18px] pt-[18px]">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-[346px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[18px] sm:leading-[29px]">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Sign In CTA */}
        <div className="mt-[30px] flex w-full flex-col items-start justify-between gap-4 rounded-[9px] bg-white px-[17px] py-[15px] sm:mt-[35px] sm:flex-row sm:items-center sm:px-[20px] sm:py-[17px] lg:mt-[40px] lg:px-[25px]">

          <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[18px]">
            Already using MediLink? Sign in to open your doctor workspace.
          </p>

          <a
            href="/doctor/sign-in"
            className="inline-flex shrink-0 items-center gap-[6px] font-inter text-[11px] font-semibold text-[#009591] transition-colors duration-200 hover:text-[#006F6B] sm:text-[18px]"
          >
            Sign In as a Doctor
            <ArrowRight size={14} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default DoctorOnboardingSection;
