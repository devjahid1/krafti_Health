
import ps1 from "../../assets/HomeImg/ps1.png";
import ds1 from "../../assets/HomeImg/ds1.png";

import ps2 from "../../assets/HomeImg/ps2.png";

import ps3 from "../../assets/HomeImg/ps3.png";
import ds3 from "../../assets/HomeImg/ds3.png";

const sections = [
  {
    id: 1,
    label: "For",
    title: "Patients",
    description:
      "Book appointments, access prescriptions and lab reports all in one place.",
    button: "Find a Doctor",
    image: ps1,
    icon: ps2,
    notification: ps3,
    type: "patient",
  },
  {
    id: 2,
    label: "For",
    title: "Doctors",
    description:
      "Manage your appointments, create prescriptions and request lab tests.",
    button: "Join as a Doctor",
    image: ds1,
    icon: ps2,
    notification: ds3,
    type: "doctor",
  },
];

const PatientDoctorSection = () => {
  return (
    <section className="w-full px-5 py-10 md:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1463px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-5 xl:gap-6">

        {sections.map((item) => (
          <div
            key={item.id}
            className="
              relative isolate min-h-[250px] w-full overflow-hidden
              rounded-[18px] bg-[#EAF8FA]
              sm:aspect-[199/102] sm:min-h-0 sm:max-h-[375px]
              sm:rounded-[22px]
            "
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            {/* Background Overlay - Mobile Only */}
            <div className="absolute inset-0 -z-10 bg-white/65 sm:bg-transparent" />

            {/* Main Content */}
            <div
              className="
                relative z-10 flex h-full flex-col items-start
                p-4
                sm:p-6
                md:p-7
                lg:p-6
                xl:p-7
                2xl:p-[38px]
              "
            >
              {/* Icon and Heading */}
              <div className="flex items-center gap-3 sm:gap-4">

                {/* Icon */}
                <div
                  className="
                    flex h-[48px] w-[48px] shrink-0 items-center justify-center
                    rounded-[10px] bg-[#CFF0F0]
                    sm:h-[64px] sm:w-[64px] sm:rounded-[14px]
                    lg:h-[58px] lg:w-[58px]
                    xl:h-[64px] xl:w-[64px]
                    2xl:h-[82px] 2xl:w-[82px]
                  "
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="
                      h-[23px] w-[23px] object-contain
                      sm:h-[28px] sm:w-[28px]
                      2xl:h-[32px] 2xl:w-[32px]
                    "
                  />
                </div>

                {/* Heading */}
                <div>
                  <p
                    className="
                      text-[14px] leading-[20px] text-[#666666]
                      sm:text-[19px] sm:leading-[25px]
                      lg:text-[17px]
                      xl:text-[19px]
                      2xl:text-[23px] 2xl:leading-[26px]
                    "
                  >
                    {item.label}
                  </p>

                  <h2
                    className="
                      font-jakarta text-[20px] font-semibold leading-[27px]
                      text-[#292929]
                      sm:text-[26px] sm:leading-[34px]
                      lg:text-[24px]
                      xl:text-[27px]
                      2xl:text-[32px]
                    "
                  >
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p
                className="
                  mt-3 w-[300px] max-w-full
                  font-inter text-[12px] leading-[19px] text-[#475569]
                  sm:mt-4 sm:w-[357px] sm:text-[16px] sm:leading-[24px]
                  lg:text-[14px] lg:leading-[22px]
                  xl:text-[15px] xl:leading-[24px]
                  2xl:text-[18px] 2xl:leading-[28px]
                "
              >
                {item.description}
              </p>

              {/* Button */}
              <button
                className={`
                  mt-4 flex items-center justify-center gap-[8px]
                  rounded-[150px] px-[15px] py-[7px]
                  text-[12px] font-medium
                  transition duration-300 hover:-translate-y-1
                  sm:mt-[20px] sm:gap-[10px]
                  sm:px-[20px] sm:py-[8px] sm:text-[15px]
                  xl:text-[15px]
                  2xl:text-[17px]
                  ${
                    item.type === "patient"
                      ? "bg-[#019490] text-white hover:bg-[#007F7B]"
                      : "border border-[#019490] bg-white text-[#019490] hover:bg-[#019490] hover:text-white"
                  }
                `}
              >
                {item.button}
              </button>

              {/* Notification Image - Hidden on Mobile */}
              <div
                className="
                  absolute bottom-[9%] right-[2%]
                  hidden h-[75px] w-[188px]
                  overflow-hidden rounded-[14px]
                  bg-white
                  shadow-[0_5px_25px_rgba(0,0,0,0.10)]
                  sm:block
                "
              >
                <img
                  src={item.notification}
                  alt={`${item.title} notification`}
                  className="h-full w-full object-contain"
                />
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default PatientDoctorSection;
