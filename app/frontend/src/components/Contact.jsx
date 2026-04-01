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
    <section id="contact" className="bg-gradient-to-b from-white to-[#FFF8F0] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#8B1538]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#8B1538]">
            Get in Touch
          </span>
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Begin Your <span className="text-[#8B1538]">Dance Journey</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37]" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Contact Information</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">Phone:</span>{" "}
                  <a href={`tel:${academyInfo.contact.phone}`}>{academyInfo.contact.displayPhone}</a>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Email:</span>{" "}
                  <a href={`mailto:${academyInfo.contact.email}`}>{academyInfo.contact.email}</a>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Location:</span>{" "}
                  {academyInfo.contact.location.address}, {academyInfo.contact.location.city}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${academyInfo.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-6 text-white shadow-lg"
            >
              <h4 className="text-lg font-bold">Quick enquiry via WhatsApp</h4>
              <p className="mt-2 text-sm text-white/90">Get a faster response to admission questions.</p>
            </a>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h3>
              <div className="space-y-4">
                <Input
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your interest in learning classical dance..."
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full rounded-xl py-3 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
