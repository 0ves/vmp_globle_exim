import { motion } from "framer-motion";
import {
  Ship,
  PackageCheck,
  Search,
  Users,
  FileText,
  Truck,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Export Management",
    description:
      "End-to-end export solutions, from sourcing and documentation to shipment coordination.",
    icon: Ship,
  },
  {
    title: "Import Services",
    description:
      "Reliable import support for businesses seeking quality products from global markets.",
    icon: PackageCheck,
  },
  {
    title: "Global Product Sourcing",
    description:
      "Connecting buyers with trusted Indian manufacturers across multiple industries.",
    icon: Search,
  },
  {
    title: "Supplier Identification",
    description:
      "Finding verified suppliers that meet your quality, pricing, and production requirements.",
    icon: Users,
  },
  {
    title: "Buyer Assistance",
    description:
      "Personalized support throughout the sourcing, negotiation, and purchasing process.",
    icon: Users,
  },
  {
    title: "Documentation Support",
    description:
      "Preparation and coordination of export-import documentation for smooth international trade.",
    icon: FileText,
  },
  {
    title: "International Logistics",
    description:
      "Coordinating sea, air, and multimodal freight with reliable logistics partners.",
    icon: Truck,
  },
  {
    title: "Quality Inspection",
    description:
      "Coordinating inspections to ensure every shipment meets agreed quality standards.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Complete Export & Import
            <br />
            Trade Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From supplier sourcing to international logistics, we provide
            comprehensive trade solutions designed to simplify global business
            operations.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-gray-200 bg-[#FAF8F4] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:bg-white hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6E8BE] transition-colors group-hover:bg-[#C89B3C]">
                  <Icon
                    size={28}
                    className="text-[#B48825] transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}