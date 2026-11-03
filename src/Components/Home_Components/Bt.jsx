const Bt = () => {
  return (
    <div className="flex flex-wrap items-center gap-7">
      {/* Book Appointment Button */}
      <a
        href="/book-appointment"
        className="inline-flex items-center justify-center gap-[10px] rounded-[150px] bg-[#019490] px-[30px] py-[12px] text-[18px] font-medium text-white transition-all duration-300 hover:bg-[#017F7B]"
      >
        Book Appointment
      </a>

      {/* Download App Button */}
      <a
        href="#download"
        className="inline-flex items-center justify-center gap-[10px] rounded-[150px] border border-[#233A39] px-[30px] py-[12px] text-[18px] font-medium text-[#233A39] transition-all duration-300 hover:bg-[#233A39] hover:text-white"
      >
        Download App
      </a>
    </div>
  );
};

export default Bt;
