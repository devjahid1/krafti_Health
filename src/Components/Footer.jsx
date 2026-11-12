const footerColumns = [
  {
    title: "Navigation",
    links: ["Home", "For Patients", "For Doctors", "Features", "About"],
  },
  {
    title: "Patient",
    links: [
      "Find a Doctor",
      "Book Appointment",
      "Digital Prescriptions",
      "Lab Reports",
      "Patient Support",
    ],
  },
  {
    title: "Doctor",
    links: [
      "Join as a Doctor",
      "Manage Appointments",
      "Digital Prescriptions",
      "Lab Requests",
      "Doctor Support",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Contact Us",
      "Privacy Policy",
      "Terms of Service",
      "Security",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F8FA] px-5 pb-[30px] pt-[50px] md:px-10 lg:px-[90px]">
      <div className="mx-auto max-w-[1500px]">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr] lg:gap-[45px]">
          {/* Brand Section */}
          <div className="max-w-[340px]">
            {/* Logo */}
            <a href="/" className="mb-[18px] flex items-center gap-[11px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[11px] bg-[#019490] text-[22px] font-bold text-white">
                M
              </div>

              <span className="text-[26px] font-semibold text-[#292929]">
                MediLink
              </span>
            </a>

            {/* Description */}
            <p className="mb-[18px] font-inter text-[14px] leading-[21px] text-[#64748B]">
              Making healthcare work better for everyone. Book appointments,
              manage prescriptions and lab tests from one connected platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-[11px]">
              <button
                type="button"
                className="flex items-center justify-center rounded-[150px] bg-[#019490] px-[18px] py-[11px] text-[14px] font-medium text-white transition duration-300 hover:bg-[#007F7B]"
              >
                <a href="https://rx.kraftihealth.tech" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </button>

              <button
                type="button"
                className="flex items-center justify-center rounded-[150px] border border-[#233A39] bg-white px-[18px] py-[11px] text-[14px] font-medium text-[#292929] transition duration-300 hover:bg-[#019490] hover:text-white"
              >
                Download App
              </button>
            </div>
          </div>

          {/* Footer Navigation Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-[17px] text-[18px] font-semibold text-[#292929]">
                {column.title}
              </h3>

              <ul className="flex flex-col gap-[15px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[16px] text-[#64748B] transition duration-200 hover:text-[#019490]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-[38px] h-px w-full bg-[#D8E3E7]" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          {/* Copyright */}
          <p className="text-center text-[13px] text-[#64748B]">
            © 2026 MediLink. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-[25px]">
            <a
              href="#"
              className="text-[13px] text-[#64748B] transition hover:text-[#019490]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[13px] text-[#64748B] transition hover:text-[#019490]"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-[13px] text-[#64748B] transition hover:text-[#019490]"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
