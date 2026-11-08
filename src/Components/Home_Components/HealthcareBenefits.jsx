import {
  CalendarDays,
  ShieldCheck,
  UserRoundPlus,
  BriefcaseMedical,
  Clock3,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "All-in-One Platform",
    description:
      "Appointments, prescriptions and lab tests in one place.",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Secure & Private",
    description:
      "Your health data is encrypted and always protected.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Verified Doctors",
    description:
      "Connect with trusted and qualified doctors.",
    icon: UserRoundPlus,
  },
  {
    id: 4,
    title: "Digital Records",
    description:
      "Access your prescriptions and lab reports anytime.",
    icon: BriefcaseMedical,
  },
  {
    id: 5,
    title: "Save Time",
    description:
      "No more long queues or unnecessary delays.",
    icon: Clock3,
  },
  {
    id: 6,
    title: "Easy to Use",
    description:
      "A clean and simple interface for everyone.",
    icon: Smartphone,
  },
];

const HealthcareBenefits = () => {
  return (
    <section className="w-full bg-white px-5 py-[75px] md:px-10 lg:py-[90px]">

      <div className="mx-auto max-w-[1145px]">

        {/* Section Heading */}
        <div className="mb-[40px] text-center">

          <h2 className="text-[30px] font-semibold leading-[42px] text-[#292929] md:text-[40px]">
            Built for a Healthier Tomorrow
          </h2>

          <p className="mt-[12px] text-[13px] leading-[22px] text-[#64748B] md:text-[14px]">
            We combine technology and healthcare to give you a seamless, secure and reliable experience.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="max-w-[1133px] grid grid-cols-1 gap-x-[55px] gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex items-start gap-[15px]"
              >

                {/* Icon */}
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[10px] bg-[#BDEBEC] text-[#006F6C]">

                  <Icon
                    size={25}
                    strokeWidth={1.6}
                  />

                </div>

                {/* Content */}
                <div className="pt-[1px]">

                  <h3 className="mb-[5px] text-[17px] font-semibold leading-[23px] text-[#292929]">
                    {item.title}
                  </h3>

                  <p className="max-w-[210px] text-[13px] leading-[20px] text-[#64748B]">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default HealthcareBenefits;