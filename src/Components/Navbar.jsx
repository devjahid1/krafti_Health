
import { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "For Patients", href: "/patients" },
    { name: "For Doctors", href: "/doctors" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="relative z-50 w-full">
      <nav className="mx-auto flex min-h-[100px] max-w-[1190px] items-center px-5 py-4 sm:px-8 lg:px-12">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            className="h-[44px] w-[172px] object-contain"
            src={logo}
            alt="MediLink"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="ml-8 hidden items-center gap-10 lg:flex xl:ml-24 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[18px] font-normal text-[#526580] transition-colors duration-200 hover:text-[#009B91]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Sign In */}
        <a
          href="/signin"
          className="hidden min-w-[120px] shrink-0 items-center justify-center rounded-full bg-[#242424] px-8 py-4 text-[17px] font-medium text-white transition-all duration-300 hover:bg-[#009B91] lg:flex"
        >
          Sign In
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-[#123247] transition hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[400px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-[16px] text-[#526580] transition hover:bg-[#EAF9F7] hover:text-[#009B91]"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Sign In */}
          <a
            href="/signin"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-[10px] rounded-full bg-[#242424] px-[30px] py-[12px] text-[17px] font-medium text-white transition-all duration-300 hover:bg-[#009B91]"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
