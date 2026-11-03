import patientIcon from "../../assets/HomeImg/stat1.png";
import doctorIcon from "../../assets/HomeImg/stat1.png";
import labIcon from "../../assets/HomeImg/stat1.png";
import securityIcon from "../../assets/HomeImg/stat1.png";

const statistics = [
  {
    id: 1,
    number: "1000+",
    label: "Patients",
    icon: patientIcon,
  },
  {
    id: 2,
    number: "500+",
    label: "Verified Doctors",
    icon: doctorIcon,
  },
  {
    id: 3,
    number: "50+",
    label: "Diagnostic Tests",
    icon: labIcon,
  },
  {
    id: 4,
    number: "99%",
    label: "Secure & Private",
    icon: securityIcon,
  },
];

const StatisticsSection = () => {
  return (
    <section className="w-full bg-white px-5 py-10 md:px-10 lg:px-[90px]">
      <div className="mx-auto grid w-full max-w-[1775px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

        {statistics.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-[18px]"
          >
            {/* Icon */}
            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#D2F0F0]">
              <img
                src={item.icon}
                alt=""
                className="h-[38px] w-[38px] object-contain"
              />
            </div>

            {/* Statistics Content */}
            <div className="flex flex-col">
              <h3 className="text-[24px] font-medium leading-[28px] text-[#292929]">
                {item.number}
              </h3>

              <p className="whitespace-nowrap text-[18px] leading-[32px] text-[#737373]">
                {item.label}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StatisticsSection;