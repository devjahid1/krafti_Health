import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "For Patients", path: "/patients" },
  { name: "For Doctors", path: "/doctors" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass =
    "whitespace-nowrap text-[15px] font-medium text-[#26364B] transition-colors duration-200 hover:text-[#176BFF] xl:text-[16px] 2xl:text-[18px]";

  return (
    <header className="relative z-50 w-full font-inter">
      {/* Navbar Container */}
      <nav className="mx-auto flex w-full max-w-[1480px] items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-8 lg:gap-4 lg:px-8 xl:px-10 2xl:px-0 2xl:py-6">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="MediLink Home"
        >
          <img
            src={logo}
            alt="MediLink"
            className="h-auto w-[125px] sm:w-[145px] lg:w-[150px] xl:w-[160px] 2xl:w-[172px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6 2xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={linkClass}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Sign In */}
        <div className="hidden shrink-0 lg:block">
          <a
            href="/signin"
            className="inline-flex items-center justify-center rounded-full bg-[#090909] px-3 py-7.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#0954D8] xl:px-7 xl:py-3 xl:text-[15px] 2xl:px-10 2xl:py-3.5 2xl:text-[17px]"
          >
            Sign In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#26364B] transition-colors hover:bg-blue-50 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[500px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[600px] flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              className="border-b border-gray-100 py-3.5 text-[15px] font-medium text-[#26364B] transition-colors hover:text-[#176BFF]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/signin"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center rounded-full bg-[#0d0d0d] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0954D8]"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;