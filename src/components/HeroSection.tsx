import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalTrade from "./GlobalTrade";
import cargoship from "../assets/cargoship.jpg";
import containerimg from "../assets/containerimg.png";
import ship from "../assets/ship.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

import { fadeUp } from "../lib/motion";
import { imageMotion } from "../lib/motion";
import { secondaryImageMotion } from "../lib/motion";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#111827 1px,transparent 1px),
            linear-gradient(to bottom,#111827 1px,transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Golden Glow */}

      <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.08),transparent_72%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-20 lg:min-h-screen lg:grid-cols-2 lg:px-8">
        {/* LEFT */}
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.30em] text-[#C89B3C]"
          >
            Global Export • Import • Sourcing
          </motion.p>

          {/* Heading */}

          <div className="mb-10 flex items-start">
            <div className="mr-5 mt-2 h-40 w-[4px] rounded-full bg-[#C89B3C]" />

            <div className="flex-1">
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-5xl xl:text-6xl"
              >
                Connecting
              </motion.h1>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-5xl xl:text-6xl"
              >
                Indian Quality
              </motion.h1>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-5xl xl:text-6xl"
              >
                to Global Markets
              </motion.h1>
            </div>
          </div>

          {/* Mobile Hero Image */}

          <motion.div variants={imageMotion} className="mb-10 lg:hidden">
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={containerimg}
                alt="Shipping Containers"
                className="
          h-56
          w-full
          rounded-[28px]
          object-cover
          shadow-[0_30px_70px_rgba(17,24,39,0.18)]
        "
              />

              {/* Border */}

              <div className="absolute inset-0 rounded-[28px] border border-[#C89B3C]/20" />

              {/* Floating Card */}

              <div
                className="
          absolute
          bottom-4
          left-4

          rounded-2xl
          border
          border-white/40

          bg-white/90

          px-4
          py-3

          backdrop-blur-md
        "
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">
                  Global Trade
                </p>

                <p className="mt-1 text-sm font-semibold text-[#111827]">
                  Export • Import
                </p>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-8 text-gray-600"
          >
            Helping businesses source premium products from India with
            dependable logistics, transparent communication and reliable
            worldwide delivery.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact#contact-form"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C89B3C] px-7 py-4 font-semibold text-white transition hover:bg-[#B48825]"
            >
              Start Your Inquiry
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/products"
              className="rounded-xl border border-[#C89B3C] px-7 py-4 font-semibold text-[#C89B3C] transition hover:bg-[#F8F3E8]"
            >
              Our Products
            </Link>
          </motion.div>

          {/* Mobile Image 2 */}

          <motion.div variants={fadeUp} className="mt-10 lg:hidden">
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={cargoship}
                alt="Cargo Operations"
                className="
        h-56
        w-full
        rounded-[28px]
        object-cover
        shadow-[0_30px_70px_rgba(17,24,39,0.18)]
      "
              />

              <div className="absolute inset-0 rounded-[28px] border border-[#C89B3C]/20" />

              {/* Floating Badge */}

              <div
                className="
        absolute
        right-4
        top-4

        rounded-2xl

        border
        border-white/40

        bg-white/90

        px-4
        py-3

        backdrop-blur-md
      "
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Trusted Logistics
                </p>

                <p className="mt-1 text-sm font-semibold text-[#111827]">
                  Worldwide Delivery
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Strip */}

          <motion.div
            variants={fadeUp}
            className="mt-14 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#C89B3C]" />

              <span className="text-sm font-medium text-gray-700">
                Reliable Export Partner
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Globe2 size={18} className="text-[#C89B3C]" />

              <span className="text-sm font-medium text-gray-700">
                Global Logistics Network
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Ship size={18} className="text-[#C89B3C]" />

              <span className="text-sm font-medium text-gray-700">
                Quality Assurance
              </span>
            </div>
          </motion.div>
        </motion.div>{" "}
        {/* RIGHT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            relative
            hidden
            min-h-[620px]
            items-center
            justify-center
            lg:flex
          "
        >
          {/* Golden Glow */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                h-[520px]
                w-[520px]
                rounded-full
                bg-[radial-gradient(circle,rgba(200,155,60,0.12),transparent_72%)]
              "
            />
          </div>

          {/* Decorative Ring */}

          <div
            className="
              absolute
              right-6
              top-12
              h-28
              w-28
              rounded-full
              border
              border-[#C89B3C]/15
            "
          />

          {/* Main Image */}

          <motion.div
            variants={imageMotion}
            className="
              relative
              z-20
              w-full
              max-w-[620px]
            "
          >
            <img
              src={containerimg}
              alt="Shipping Containers"
              className="
                h-[430px]
                w-full
                rounded-[32px]
                object-cover
                shadow-[0_35px_80px_rgba(17,24,39,0.18)]
              "
            />

            <div className="absolute inset-0 rounded-[32px] border border-[#C89B3C]/20" />
          </motion.div>

          {/* Floating Image */}

          <motion.div
            variants={secondaryImageMotion}
            className="
              absolute
              -left-6
              bottom-0
              z-30
            "
          >
            <div className="relative">
              <img
                src={cargoship}
                alt="Warehouse"
                className="
                  h-[240px]
                  w-[210px]
                  rounded-[28px]
                  object-cover
                  shadow-[0_25px_60px_rgba(17,24,39,0.18)]
                "
              />

              <div className="absolute inset-0 rounded-[28px] border border-[#C89B3C]/20" />
            </div>
          </motion.div>

          {/* Small Decorative Card */}

          <motion.div
            variants={fadeUp}
            className="
              absolute
              -right-4
              bottom-16
              z-30
              rounded-2xl
              border
              border-[#E8E2D6]
              bg-white
              px-6
              py-5
              shadow-xl
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">
              Global Reach
            </p>

            <h4 className="mt-2 text-2xl font-bold text-[#111827]">
             
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Building trusted international
              <br />
              trade partnerships worldwide.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Global Trade Section */}

      <GlobalTrade />
      {/* Mobile Image 3 */}

      <div className="bg-[#FAF8F4] px-6 py-10 lg:hidden">
        <div className="relative overflow-hidden rounded-[28px]">
          <img
            src={ship}
            alt="Global Trade"
            className="
        h-64
        w-full
        rounded-[28px]
        object-cover
        shadow-[0_30px_70px_rgba(17,24,39,0.18)]
      "
          />

          <div className="absolute inset-0 rounded-[28px] border border-[#C89B3C]/20" />

          <div
            className="
        absolute
        bottom-4
        left-4

        rounded-2xl

        bg-white/90

        px-5
        py-4

        backdrop-blur-md
      "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">
              Global Network
            </p>

            <h3 className="mt-2 text-lg font-bold text-[#111827]">
              Connecting India
              <br />
              to Global Markets
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
