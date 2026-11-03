import avatar from "../../assets/HomeImg/reviewImg.png";

const testimonials = [
  {
    id: 1,
    review:
      '"MediLink made it so easy to find a doctor and book an appointment. The digital prescriptions are super convenient! The lab test process is smooth and I can get my reports online."',
    name: "Alex Morgan",
    role: "Patient",
    image: avatar,
  },
  {
    id: 2,
    review:
      '"MediLink made it so easy to find a doctor and book an appointment. The digital prescriptions are super convenient! The lab test process is smooth and I can get my reports online."',
    name: "Alex Morgan",
    role: "Patient",
    image: avatar,
  },
  {
    id: 3,
    review:
      '"MediLink made it so easy to find a doctor and book an appointment. The digital prescriptions are super convenient! The lab test process is smooth and I can get my reports online."',
    name: "Alex Morgan",
    role: "Patient",
    image: avatar,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white px-5 py-[65px] md:px-10 lg:py-[75px]">

      <div className="mx-auto max-w-[1140px]">

        {/* Heading */}
        <div className="mb-[44px] text-center">
          <h2 className="text-[30px] font-semibold leading-[42px] text-[#292929] md:text-[40px]">
            Trusted by Patients & Doctors
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[14px] bg-gradient-to-br from-[#126D69] to-[#005C58] p-[23px] shadow-[inset_0_0_25px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,80,75,0.18)]"
            >

              {/* Review */}
              <p className="max-w-[340px] text-[14px] font-normal leading-[21px] text-white/90">
                {item.review}
              </p>

              {/* User Information */}
              <div className="mt-8 flex items-center gap-[15px]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[46px] w-[46px] shrink-0 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[15px] font-semibold leading-[22px] text-white">
                    {item.name}
                  </h3>

                  <p className="mt-[2px] text-[12px] leading-[18px] text-white/80">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;