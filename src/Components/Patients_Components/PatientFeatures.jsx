
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
    <section className="w-full bg-white px-5 py-[65px] sm:px-8 lg:py-[75px]">

      <div className="mx-auto w-full max-w-[1457px]">

        {/* Section Heading */}
        <div className="mb-[30px] text-center">
          <h2 className="font-jakarta text-[48px] font-normal leading-[6px] text-[#292929]">
            Everything you need, connected.
          </h2>

          <p className="mt-[50px] font-inter text-[18px] font-normal leading-[18px] text-[#64748B] font-inter">
            Less time organising healthcare. More clarity at every step of your care.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto flex w-full flex-col items-center justify-around gap-5 sm:flex-row sm:items-stretch sm:gap-4 lg:gap-[10px]">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex h-[337px] w-full max-w-[474px] flex-1 flex-col rounded-[10px] border border-[#E7EFF1] bg-[#FCFDFD] p-[32px] transition-shadow duration-300 hover:shadow-[0_5px_20px_rgba(0,0,0,0.05)]"
              >

                {/* Icon */}
                <div className="mb-[22px] flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[5px] bg-[#E1F6F5] text-[#008F89]">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="mb-[22px] font-jakarta text-[24px] font-semibold leading-[30px] text-[#292929]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[18px] font-normal leading-[29px] text-[#64748B]">
                  {feature.description}
                </p>

                {/* Action Text */}
                <p className="mt-auto pt-[12px] font-inter text-[16px] font-medium leading-[25px] text-[#007F7A]">
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
