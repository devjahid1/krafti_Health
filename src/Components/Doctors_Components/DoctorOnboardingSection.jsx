
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
    <section className="w-full min-h-[653px] border-x-2 border-[#38BDF8] bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[50px]">

      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-2 md:px-5 lg:px-[50px] xl:px-[100px] 2xl:px-[220px]">

        {/* Section Heading */}
        <div className="mb-[32px] mt-[20px] text-center sm:mb-[38px] sm:mt-[35px] md:mt-[50px] lg:mb-[42px] lg:mt-[75px]">

          <h2 className="font-jakarta text-[24px] font-semibold leading-[1.2] text-[#292929] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px]">
            Make MediLink part of your practice
          </h2>

          <p className="mt-[9px] font-inter text-[11px] leading-[20px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-[14px] lg:text-[16px] xl:text-[18px] xl:leading-[29px]">
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
                <h3 className="mb-[8px] pt-[12px] pb-[12px] font-jakarta text-[15px] font-semibold leading-[1.3] text-[#292929] sm:pt-[18px] sm:pb-[18px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[24px]">
                  {step.id}. {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-[346px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[18px] xl:leading-[29px]">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Sign In CTA */}
        <div className="mt-[30px] flex w-full flex-col items-start justify-between gap-4 rounded-[9px] bg-white px-[17px] py-[15px] sm:mt-[35px] sm:flex-row sm:items-center sm:px-[20px] sm:py-[17px] lg:mt-[40px] lg:px-[25px]">

          <p className="font-inter text-[11px] leading-[19px] text-[#64748B] sm:text-[13px] sm:leading-[22px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            Already using MediLink? Sign in to open your doctor workspace.
          </p>

          <a
            href="/doctor/sign-in"
            className="inline-flex shrink-0 items-center gap-[6px] font-inter text-[11px] font-semibold text-[#009591] transition-colors duration-200 hover:text-[#006F6B] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
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
