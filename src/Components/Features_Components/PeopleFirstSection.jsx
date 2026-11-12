
import {
  FileHeart,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "One connected record",
    description:
      "Appointments, prescriptions and lab reports stay together in the context of care.",
    icon: FileHeart,
  },
  {
    id: 2,
    title: "Purposeful access",
    description:
      "Separate patient and doctor workspaces keep everyday tasks focused and understandable.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Care that stays close",
    description:
      "Continue your healthcare journey on the website or with the MediLink app.",
    icon: HeartHandshake,
  },
];

const PeopleFirstSection = () => {
  return (
    <section className="w-full overflow-hidden border-x-2 border-[#38BDF8] bg-[#F5F9FA] px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto w-full max-w-[1250px]">

        {/* Section Heading */}
        <div className="mb-[28px] text-center sm:mb-[34px] lg:mb-[38px]">

          <h2 className="font-jakarta text-[23px] font-semibold leading-[1.2] text-[#292929] sm:text-[28px] md:text-[34px] lg:text-[40px]">
            Built around people, not paperwork
          </h2>

          <p className="mx-auto mt-[9px] max-w-[700px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[20px]">
            A familiar experience for patients. A focused workspace for doctors.
            One connected care journey.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mx-auto grid w-full max-w-[1050px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[12px] xl:gap-[14px]">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex min-h-[165px] flex-col rounded-[11px] border border-[#E3ECEE] bg-white p-[17px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(35,85,95,0.06)] sm:min-h-[175px] sm:p-[20px] lg:min-h-[180px] lg:p-[18px] xl:p-[20px]"
              >

                {/* Icon */}
                <div className="mb-[12px] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[6px] bg-[#E3F6F5] text-[#008F89]">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="mb-[8px] font-jakarta text-[14px] font-semibold leading-[20px] text-[#292929] sm:text-[15px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="max-w-[310px] font-inter text-[11px] font-normal leading-[18px] text-[#64748B] sm:text-[12px] sm:leading-[19px]">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default PeopleFirstSection;
