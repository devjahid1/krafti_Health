
import {
  CalendarDays,
  FileText,
  FlaskConical,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Appointment System",
    description:
      "Find a doctor by speciality, location or availability. Choose a visit that fits your day and see your booking details clearly.",
    action: "Search doctors · Pick a time · Manage visits",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Digital Prescriptions (RX)",
    description:
      "View prescriptions from your doctor after a consultation. Keep the directions and your previous prescriptions easy to find.",
    action: "View prescriptions · Download a copy",
    icon: FileText,
  },
  {
    id: 3,
    title: "Lab Management",
    description:
      "Follow your doctor's test requests and access reports when they are ready. Bring the results to your next consultation.",
    action: "Track requests · View reports · Follow up",
    icon: FlaskConical,
  },
];

const PatientFeatures = () => {
  return (
    <section className="w-full bg-white px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto w-full max-w-[1457px]">

        {/* Section Heading */}
        <div className="mb-[35px] text-center sm:mb-[40px] lg:mb-[45px]">

          <h2 className="font-jakarta text-[27px] font-normal leading-[1.2] text-[#292929] sm:text-[34px] md:text-[40px] lg:text-[48px]">
            Everything you need, connected.
          </h2>

          <p className="mt-[12px] font-inter text-[12px] font-normal leading-[20px] text-[#64748B] sm:mt-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[24px]">
            Less time organising healthcare. More clarity at every step of your care.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 md:flex-row md:items-stretch md:gap-4 lg:gap-[15px] xl:gap-[20px]">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex min-h-[310px] w-full max-w-[474px] flex-1 flex-col rounded-[10px] border border-[#E7EFF1] bg-[#FCFDFD] p-[22px] transition-shadow duration-300 hover:shadow-[0_5px_20px_rgba(0,0,0,0.05)] sm:min-h-[320px] sm:p-[26px] lg:min-h-[337px] lg:p-[28px] xl:p-[32px]"
              >

                {/* Icon */}
                <div className="mb-[18px] flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[5px] bg-[#E1F6F5] text-[#008F89] sm:mb-[20px] sm:h-[58px] sm:w-[58px] lg:mb-[22px] lg:h-[64px] lg:w-[64px]">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="mb-[14px] font-jakarta text-[19px] font-semibold leading-[26px] text-[#292929] sm:text-[21px] sm:leading-[28px] lg:mb-[22px] lg:text-[24px] lg:leading-[30px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[13px] font-normal leading-[22px] text-[#64748B] sm:text-[14px] sm:leading-[24px] lg:text-[16px] lg:leading-[27px] xl:text-[18px] xl:leading-[29px]">
                  {feature.description}
                </p>

                {/* Action Text */}
                <p className="mt-auto pt-[18px] font-inter text-[12px] font-medium leading-[21px] text-[#007F7A] sm:text-[13px] lg:text-[14px] lg:leading-[23px] xl:text-[16px] xl:leading-[25px]">
                  {feature.action}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default PatientFeatures;
