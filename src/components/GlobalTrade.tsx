import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Globe3D, } from "../components/ui/3d-globe";
import type { GlobeMarker } from "../components/ui/3d-globe";
const markers: GlobeMarker[] = [
{
    lat: 19.0760,
    lng: 72.8774,
     src: "/flags/india.png",
    label: "India",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "/flags/uae.png",
    label: "UAE",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "/flags/uk.png",
    label: "United Kingdom",
  },
  {
    lat: 52.52,
    lng: 13.405,
    src: "/flags/germany.png",
    label: "Germany",
  },
  {
    lat: 40.7128,
    lng: -74.006,
    src: "/flags/united-states.png",
    label: "United States",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "/flags/singapore.png",
    label: "Singapore",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "/flags/australia.png",
    label: "Australia",
  },
];

export default function GlobalTrade() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Global Trade Network
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
            Connecting India
            <br />
            to the World's
            <br />
            Growing Markets
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            We help businesses source premium products from India while
            building long-term international partnerships through trusted
            suppliers, transparent communication and reliable logistics.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C89B3C] px-7 py-4 font-semibold text-white transition hover:bg-[#B48825]"
            >
              Explore Products

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact#contact-form"
              className="rounded-xl border border-[#C89B3C] px-7 py-4 font-semibold text-[#C89B3C] transition hover:bg-[#F6F1E7]"
            >
              Contact Us
            </Link>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-[#111827]">
                10+
              </h3>

              <p className="mt-2 text-gray-600">
                Products
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#111827]">
                5+
              </h3>

              <p className="mt-2 text-gray-600">
                Countries
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#111827]">
                100%
              </h3>

              <p className="mt-2 text-gray-600">
                Quality Focus
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          <div className="absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.08),transparent_70%)]" />

          <div className="relative h-[560px] w-full max-w-[560px] overflow-hidden rounded-[32px] border border-[#E8E2D6] bg-white shadow-xl">

            <Globe3D
              className="h-full w-full"
              markers={markers}
              config={{
                atmosphereColor: "#D4AF37",
                atmosphereIntensity: 10,
                bumpScale: 4,
                autoRotateSpeed: 0.25,
              }}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}