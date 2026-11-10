
import si1 from "../../assets/HomeImg/si1.png";
import si2 from "../../assets/HomeImg/si2.png";
import si3 from "../../assets/HomeImg/si3.png";
import i1 from "../../assets/HomeImg/sci1.png";
import i2 from "../../assets/HomeImg/sci2.png";
import i3 from "../../assets/HomeImg/sci3.png";

const services = [
  {
    id: 1,
    icon: i1,
    title: "Appointment System",
    description:
      "Find trusted doctors, view availability and book appointments in minutes.",
    image: si1,
    alt: "Appointment booking dashboard",
  },
  {
    id: 2,
    icon: i2,
    title: "Digital Prescriptions (RX)",
    description: "Create, manage and share digital prescriptions.",
    image: si2,
    alt: "Digital prescription preview",
  },
  {
    id: 3,
    icon: i3,
    title: "Lab Management",
    description: "Request diagnostic tests and get digital reports.",
    image: si3,
    alt: "Laboratory management dashboard",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-white px-4 py-10 min-[375px]:px-5 min-[375px]:py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 xl:px-12 2xl:px-20">

      <div className="mx-auto w-full max-w-[1354px]">

        {/* Section Heading */}
        <h2 className="mb-7 text-center text-[26px] font-semibold leading-tight text-[#292929] min-[375px]:text-[28px] sm:mb-8 sm:text-[30px] md:mb-10 md:text-[52px] font-jakarta">
          Our Services
        </h2>

        {/* Service Cards */}
<div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 md:gap-1 xl:grid-cols-3 xl:gap-5">

          {services.map((service) => (
            <div
              key={service.id}
              className="
                flex w-full max-w-[398px] min-w-0
                flex-col items-start
                gap-[10px]
                overflow-hidden
                rounded-[20px]
                border border-[rgba(16,34,34,0.06)]
                bg-[linear-gradient(180deg,#FCFDFE_0%,#F0F7F9_100%)]
                px-5 pt-5 pb-5
                shadow-[2px_4px_17px_0_rgba(1,148,144,0.15)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[2px_8px_22px_0_rgba(1,148,144,0.20)]
                min-[375px]:px-[21px]
                sm:px-5
                lg:min-h-[632px] lg:px-[23px] lg:pt-[26px] lg:pb-[23px]
              "
            >

              {/* Icon */}
              <div className="mb-[4px] flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-lg bg-[#E2F7F6] sm:h-[58px] sm:w-[58px] lg:h-[64px] lg:w-[64px]">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="h-6 w-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-semibold text-[#292929] sm:text-[17px] font-jakarta">
                {service.title}
              </h3>

              {/* Description */}
              <p className="max-w-[290px] text-[12px] leading-[19px] text-[#64748B] sm:text-[16px] sm:leading-[20px] font-inter">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[#007F7B] transition-all duration-200 hover:gap-3 sm:text-[18px]"
              >
                Learn More
                <span className="text-lg">→</span>
              </a>

              {/* Demo Image */}
              <div className="mt-2 w-full overflow-hidden rounded-xl sm:mt-3 lg:mt-auto">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-auto max-h-[343px] min-h-[190px] w-full rounded-xl object-cover shadow sm:min-h-[220px] lg:mt-[24px] lg:h-[343px] lg:min-h-[343px]"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurServices;
