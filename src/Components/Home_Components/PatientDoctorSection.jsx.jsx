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
      <div className="mx-auto grid w-full max-w-[1463px] grid-cols-1 gap-6 lg:grid-cols-2">
        {sections.map((item) => (
          <div
            key={item.id}
            className="relative isolate aspect-[199/102] max-h-[375px] w-full overflow-hidden rounded-[22px] bg-[#EAF8FA]"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            {/* Background Overlay */}
            <div className="absolute inset-0 -z-10" />

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col items-start p-5 sm:p-7 md:p-8 lg:p-[38px]">
              {/* Icon and Heading */}
              <div className="flex items-center gap-4">
                <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-[14px] bg-[#CFF0F0]">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-[32px] w-[32px] object-contain"
                  />
                </div>

                <div>
                  <p className="text-[20px] leading-[26px] text-[#666666] md:text-[23px]">
                    {item.label}
                  </p>

                  <h2 className="text-[26px] font-semibold leading-[34px] text-[#292929] md:text-[32px]">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 w-[350px] max-w-full text-[18px] leading-[27px] text-[#475569] md:leading-[28px]">
                {item.description}
              </p>

              {/* Button */}
              <button
                className={`mt-[20px] flex items-center justify-center gap-[10px] rounded-[150px] px-[20px] py-[8px] text-[17px] font-medium transition duration-300 hover:-translate-y-1 ${
                  item.type === "patient"
                    ? "bg-[#019490] text-white hover:bg-[#007F7B]"
                    : "border border-[#019490] bg-white text-[#019490] hover:bg-[#019490] hover:text-white"
                }`}
              >
                {item.button}
              </button>

              {/* Notification Image */}
              <div className="absolute bottom-[9%] right-[2%] h-[75px] w-[188px] overflow-hidden rounded-[14px] bg-white shadow-[0_5px_25px_rgba(0,0,0,0.10)]">
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