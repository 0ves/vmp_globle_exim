import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-[#FAF8F4] pt-24">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <div className="overflow-hidden rounded-[32px] border border-[#E7DFD0] bg-white shadow-xl">

          <div className="grid gap-10 p-12 lg:grid-cols-[1.7fr_auto] lg:items-center">

            {/* Left */}

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C89B3C]">
                Let's Work Together
              </p>

              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Ready to Expand
                <br />
                Your Global Business?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Partner with VMP Global Exim for dependable sourcing,
                competitive pricing, quality products, and seamless
                international trade support.
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-col gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C89B3C] px-8 py-4 font-semibold text-white transition hover:bg-[#B48825]"
              >
                Start Your Inquiry

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919156919189"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C89B3C] px-8 py-4 font-semibold text-[#C89B3C] transition hover:bg-[#FAF4E6]"
              >
                <PhoneCall size={18} />

                Call Now
              </a>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}