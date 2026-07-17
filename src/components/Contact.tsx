import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";


import { fadeUp } from "../lib/motion";

export default function Contact() {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Contact Us
          </p>

          <h1 className="text-5xl font-bold text-gray-900">
            Let's Build Global
            <br />
            Business Together
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Looking for reliable sourcing or export solutions? Reach out to our
            team and we'll respond with the right products and pricing.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-10 shadow-sm"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              VMP Global Exim
            </h2>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="rounded-xl bg-[#F6E8BE] p-3">
                  <MapPin className="text-[#B48825]" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>

                  <p className="mt-1 text-gray-600">Maharashtra, India</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-[#F6E8BE] p-3">
                  <Phone className="text-[#B48825]" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>

                  <a
                    href="tel:+919156919189"
                    className="mt-1 block text-gray-600 hover:text-[#C89B3C]"
                  >
                    +91 9156919189
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-[#F6E8BE] p-3">
                  <Mail className="text-[#B48825]" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>

                  <a
                    href="mailto:sales@vmpglobalexim.com"
                    className="mt-1 block text-gray-600 hover:text-[#C89B3C]"
                  >
                    sales@vmpglobalexim.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-[#F6E8BE] p-3">
                  <Clock className="text-[#B48825]" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Business Hours
                  </h3>

                  <p className="mt-1 text-gray-600">Monday – Saturday</p>

                  <p className="text-gray-600">9:00 AM – 6:00 PM (IST)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
            id="contact-form"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-10 shadow-sm scroll-mt-32"
          >
            <h2  className="mb-8 text-3xl font-bold text-gray-900">
              Send an Inquiry
            </h2>
            <section  >
            <form
              
              action="https://formsubmit.co/ovesnadaf@gmail.com"
              method="POST"
              className="space-y-6"
              >
              <input
                type="hidden"
                name="_subject"
                value="New Inquiry from VMP Global Exim Website"
                />

              <input
  type="text"
  name="_honey"
  style={{ display: "none" }}
/>

              <input type="hidden" name="_template" value="table" />

              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thank-you"
                />
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#C89B3C]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#C89B3C]"
                />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#C89B3C]"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#C89B3C]"
              />

              <select name="service">
                <option>Import Products</option>
                <option>Export Products</option>
                <option>Supplier Partnership</option>
                <option>Bulk Order</option>
                <option>General Inquiry</option>
              </select>
              <textarea
                rows={6}
                placeholder="Tell us about your product requirement..."
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#C89B3C]"
              />

              <button
  type="submit"
  className="rounded-xl bg-[#C89B3C] px-8 py-4 font-semibold text-white hover:bg-[#B48825]"
>
  Send Inquiry
</button>
            </form>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
