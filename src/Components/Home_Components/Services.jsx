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
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-10 text-center text-[30px] font-semibold leading-tight text-[#292929] md:text-[36px]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
               className="overflow-hidden rounded-[18px] border border-[#E4EEEE] bg-white p-3 shadow-[0_3px_15px_rgba(0,100,100,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,100,100,0.14)] w-[398px] h-[632px] mb-5"
            >
              {/* Icon */}
              <div className="mb-2 flex h-[64px] w-[64px] items-center justify-center rounded-lg bg-[#E2F7F6] mb-[14px] mt-[15px]">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="h-6 w-6 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="mb-1 text-[17px] font-semibold text-[#292929] mb-[10px]">
                {service.title}
              </h3>

              <p className="mb-3 max-w-[290px] text-[13px] leading-[20px] text-[#64748B]">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#007F7B] transition hover:gap-3"
              >
                Learn More
                <span className="text-lg">→</span>
              </a>

              {/* Demo Image */}
              <div className="overflow-hidden rounded-xl ">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-[343px] mt-[24px] w-full object-cover shadow"
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
