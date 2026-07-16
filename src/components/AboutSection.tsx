import { motion } from "framer-motion";
import { Globe2, Handshake, ShieldCheck } from "lucide-react";

import { fadeUp } from "../lib/motion";
export default function AboutSection() {
  return (
    <section className="bg-[#FAF8F4] py-28">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            About Us
          </span>

          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Connecting Indian Businesses
            <br />
            with Global Opportunities.
          </h2>

          <div className="h-1 w-20 rounded-full bg-[#C89B3C]" />

          <p className="mt-10 text-lg leading-8 text-gray-600">
            VMP Global Exim is an India-based export and import company
            specializing in global sourcing and international trade. We connect
            reliable Indian manufacturers and suppliers with buyers across the
            world by delivering quality products, competitive pricing, and
            dependable logistics support.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment is to build lasting business relationships through
            transparent communication, consistent quality standards, and timely
            delivery that businesses can rely on.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6E8BE]">
              <Globe2 className="text-[#B58A2B]" size={28} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Global Trade Network
            </h3>

            <p className="leading-7 text-gray-600">
              Building strong sourcing and export partnerships across
              international markets with reliable suppliers and buyers.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6E8BE]">
              <ShieldCheck className="text-[#B58A2B]" size={28} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Quality Commitment
            </h3>

            <p className="leading-7 text-gray-600">
              Every shipment is backed by quality assurance, transparent
              processes, and dependable logistics from sourcing to delivery.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6E8BE]">
              <Handshake className="text-[#B58A2B]" size={28} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Long-Term Partnerships
            </h3>

            <p className="leading-7 text-gray-600">
              We believe sustainable business is built on trust, timely
              communication, and long-lasting relationships with every client.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}