
import {
  CalendarDays,
  FileText,
  FlaskConical,
  FolderOpen,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Appointment management",
    description:
      "Set your availability, review upcoming visits and see each patient's appointment details.",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Digital prescriptions",
    description:
      "Create a clear prescription after a consultation and make it available in the patient account.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Lab requests",
    description:
      "Request diagnostic tests, track their status and review available reports alongside the patient record.",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Digital records",
    description:
      "Keep appointments, prescriptions and reports together to support an informed follow-up.",
    icon: FolderOpen,
  },
];

const DoctorFeatures = () => {
  return (
    <section className="w-full bg-white px-5 py-[50px] sm:px-8 sm:py-[60px] md:py-[65px] lg:px-10 lg:py-[75px]">

      <div className="mx-auto w-full max-w-[1450px]">

        {/* Section Heading */}
        <div className="mb-[30px] text-center sm:mb-[35px] lg:mb-[40px]">

          <h2 className="font-jakarta text-[26px] font-semibold leading-[1.2] text-[#292929] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            The everyday tools your practice needs
          </h2>

          <p className="mt-[10px] font-inter text-[11px] font-normal leading-[19px] text-[#64748B] sm:text-[12px] sm:leading-[20px] md:text-[13px]">
            Keep the essential parts of patient care connected, without moving between disconnected files.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[10px] xl:gap-[12px]">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex min-h-[190px] w-full flex-col rounded-[10px] border border-[#E7EFF1] bg-[#FCFDFD] p-[18px] transition-shadow duration-300 hover:shadow-[0_5px_20px_rgba(0,0,0,0.05)] sm:min-h-[205px] sm:p-[20px] lg:min-h-[210px] lg:p-[14px] xl:p-[16px]"
              >

                {/* Icon */}
                <div className="mb-[12px] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[6px] bg-[#E1F6F5] text-[#008F89] sm:h-[38px] sm:w-[38px]">
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3 className="mb-[9px] font-jakarta text-[15px] font-semibold leading-[20px] text-[#292929] sm:text-[16px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[11px] font-normal leading-[18px] text-[#64748B] sm:text-[12px] sm:leading-[19px]">
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

export default DoctorFeatures;
