
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation only.
    // Connect backend/API to send real messages.
    setSubmitted(true);
  };

  return (
    <div className="w-full rounded-[12px] border border-[#E3ECEE] bg-white p-[18px] shadow-[0_5px_20px_rgba(35,85,95,0.04)] sm:p-[24px] lg:p-[26px]">

      <h3 className="font-jakarta text-[19px] font-semibold text-[#292929] sm:text-[21px]">
        Send us a message
      </h3>

      <p className="mt-[8px] font-inter text-[10px] leading-[17px] text-[#64748B] sm:text-[11px] sm:leading-[18px]">
        For general questions only. Please don't include medical
        information or sensitive health records.
      </p>

      <form onSubmit={handleSubmit} className="mt-[16px]">

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 sm:gap-[14px]">

          <div className="flex flex-col">
            <label
              htmlFor="contact-name"
              className="mb-[6px] font-inter text-[10px] font-medium text-[#292929]"
            >
              Your name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              autoComplete="name"
              required
              className="h-[39px] w-full rounded-[7px] border border-[#E3ECEE] px-[12px] font-inter text-[11px] text-[#292929] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#009B95] focus:ring-2 focus:ring-[#009B95]/10"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="contact-email"
              className="mb-[6px] font-inter text-[10px] font-medium text-[#292929]"
            >
              Email address
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="h-[39px] w-full rounded-[7px] border border-[#E3ECEE] px-[12px] font-inter text-[11px] text-[#292929] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#009B95] focus:ring-2 focus:ring-[#009B95]/10"
            />
          </div>

        </div>

        {/* Category */}
        <div className="mt-[13px] flex flex-col">

          <label
            htmlFor="contact-category"
            className="mb-[6px] font-inter text-[10px] font-medium text-[#292929]"
          >
            What can we help with?
          </label>

          <select
            id="contact-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="h-[39px] w-full rounded-[7px] border border-[#E3ECEE] bg-white px-[12px] font-inter text-[11px] text-[#292929] outline-none transition-colors focus:border-[#009B95] focus:ring-2 focus:ring-[#009B95]/10"
          >
            <option>General enquiry</option>
            <option>Patient & account support</option>
            <option>Doctor support</option>
            <option>Partnership enquiry</option>
            <option>Technical issue</option>
            <option>Other</option>
          </select>

        </div>

        {/* Message */}
        <div className="mt-[13px] flex flex-col">

          <label
            htmlFor="contact-message"
            className="mb-[6px] font-inter text-[10px] font-medium text-[#292929]"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            rows={4}
            minLength={10}
            required
            className="min-h-[100px] w-full resize-y rounded-[7px] border border-[#E3ECEE] px-[12px] py-[11px] font-inter text-[11px] leading-[18px] text-[#292929] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#009B95] focus:ring-2 focus:ring-[#009B95]/10"
          />

        </div>

        {/* Privacy Notice */}
        <p className="mt-[12px] font-inter text-[9px] leading-[15px] text-[#64748B] sm:text-[10px] sm:leading-[16px]">
          By sending this message, you agree that we may use your contact
          details to respond. Read our Privacy Policy.
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="mt-[15px] inline-flex min-w-[125px] items-center justify-center gap-[8px] rounded-full border border-[#009B95] bg-[#009B95] px-[20px] py-[10px] font-geist text-[11px] font-medium text-white transition-colors duration-200 hover:bg-[#007F7A]"
        >
          <Send size={13} />
          Send Message
        </button>

        {/* Success Feedback */}
        {submitted && (
          <div
            role="status"
            className="mt-[13px] flex items-start gap-[8px] rounded-[7px] bg-[#E5F7F2] px-[12px] py-[10px]"
          >
            <CheckCircle2
              size={15}
              className="mt-[1px] shrink-0 text-[#008F89]"
            />

            <p className="font-inter text-[10px] leading-[17px] text-[#007F7A]">
              Your form is valid. Connect a backend or email service to
              send this message.
            </p>
          </div>
        )}

      </form>
    </div>
  );
};

export default ContactForm;
