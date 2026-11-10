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
    <section className="w-full px-5 py-[65px] md:px-10 lg:py-[75px]">

      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-[44px] text-center">
          <h2 className="text-[30px] font-jakarta font-semibold leading-[42px] text-[#292929] md:text-[40px]">
            Trusted by Patients & Doctors
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[300px] max-w-[489px] flex-col justify-around overflow-hidden rounded-[16px] bg-gradient-to-br from-[#126D69] to-[#005C58] shadow-[inset_0_0_25px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,80,75,0.18)] pt-[30px] pb-[20px] pl-[28px] pr-[28px]"
            >

              {/* Review */}
              <p className="max-w-[431px] h-[182px] font-inter font-normal text-[18px] leading-[28px] text-[#E5E5EF]">
                {item.review}
              </p>

              {/* User Information */}
              <div className="flex items-center gap-[15px]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[46px] w-[46px]"
                />

                <div>
                  <h3 className="text-[15px] font-jakarta font-semibold leading-[22px] text-white">
                    {item.name}
                  </h3>

                  <p className="mt-[2px] font-inter text-[12px] leading-[18px] text-white/80">
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