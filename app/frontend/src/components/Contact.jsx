import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { academyInfo, submitEnquiry } from "../data/mock";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitEnquiry(formData);
      toast.success(result.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (_error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="section-orbit left-[8%] top-[100px] bg-[#d2296d]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="glass-panel section-heading rounded-full px-5 py-3 text-xs text-[#d7a8ff]">
            Get in Touch
          </span>
          <h2 className="mt-6 text-5xl font-semibold text-white md:text-6xl">
            Begin Your <span className="text-[#ff76bf]">Dance Journey</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="neo-card rounded-[30px] p-7">
              <div className="section-heading text-xs text-[#7b7cff]">Contact Channel</div>
              <h3 className="mt-4 text-4xl font-semibold text-white">Reach the Academy</h3>
              <div className="mt-8 space-y-5 text-base leading-8 text-white/68">
                <p>
                  <span className="text-white">Phone:</span>{" "}
                  <a href={`tel:${academyInfo.contact.phone}`}>{academyInfo.contact.displayPhone}</a>
                </p>
                <p>
                  <span className="text-white">Email:</span>{" "}
                  <a href={`mailto:${academyInfo.contact.email}`}>{academyInfo.contact.email}</a>
                </p>
                <p>
                  <span className="text-white">Location:</span>{" "}
                  {academyInfo.contact.location.address}, {academyInfo.contact.location.city}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${academyInfo.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block rounded-[30px] bg-[linear-gradient(135deg,#0fd87e_0%,#0ea86f_100%)] p-7 text-white shadow-[0_24px_48px_rgba(15,216,126,0.22)]"
            >
              <div className="section-heading text-xs text-white/70">Instant Connection</div>
              <h4 className="mt-4 text-3xl font-semibold">Quick enquiry via WhatsApp</h4>
              <p className="mt-4 text-white/90">Get a faster response to admission questions.</p>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="neo-card rounded-[34px] p-8 md:p-10">
            <div className="section-heading text-xs text-[#d7a8ff]">Admission Form</div>
            <h3 className="mt-4 text-5xl font-semibold text-white">Send us a message</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Input
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="md:col-span-1"
              />
              <Input
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="md:col-span-1"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="md:col-span-2"
              />
              <Textarea
                name="message"
                rows={6}
                placeholder="Tell us about your interest in learning classical dance..."
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2"
              />
            </div>
            <Button type="submit" className="mt-6 w-full py-4 text-base" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
