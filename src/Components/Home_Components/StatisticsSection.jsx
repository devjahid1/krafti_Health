
import patientIcon from "../../assets/HomeImg/stat1.png";
import doctorIcon from "../../assets/HomeImg/stat2.png";
import labIcon from "../../assets/HomeImg/stat4.png";
import securityIcon from "../../assets/HomeImg/stat5.png";

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
    <section className="w-full bg-white py-10">
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1720px] justify-center px-4 sm:px-6 md:px-8 lg:px-10 lg:py-0">
        
        {/* Mobile & Tablet */}
        <div className="grid w-fit grid-cols-2 justify-items-center gap-x-5 gap-y-7 sm:gap-x-10 sm:gap-y-8 lg:hidden">
          {statistics.map((item) => (
            <div
              key={item.id}
              className="flex w-fit items-center justify-start gap-2 sm:gap-3"
            >
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#D2F0F0] sm:h-[50px] sm:w-[50px]">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[25px] w-[25px] object-contain sm:h-[30px] sm:w-[30px]"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-inter text-[17px] font-medium leading-[22px] text-[#292929] sm:text-[20px] sm:leading-[25px]">
                  {item.number}
                </h3>

                <p className="whitespace-nowrap text-[10px] leading-[17px] text-[#737373] sm:text-[13px] sm:leading-[21px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop - Original Design Preserved */}
        <div className="hidden w-full grid-cols-4 gap-5 lg:grid">
          {statistics.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-[18px]"
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
                <h3 className="font-inter text-[24px] font-medium leading-[28px] text-[#292929]">
                  {item.number}
                </h3>

                <p className="whitespace-nowrap text-[18px] leading-[32px] text-[#737373]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatisticsSection;
