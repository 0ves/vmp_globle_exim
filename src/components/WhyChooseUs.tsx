import { motion } from "framer-motion";
import {
  BadgeCheck,
  DollarSign,
  Clock3,
  Globe2,
  MessageSquareText,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    title: "Reliable Product Sourcing",
    description:
      "We work with trusted Indian manufacturers and suppliers to ensure consistent quality and dependable supply.",
    icon: BadgeCheck,
  },
  {
    title: "Competitive Pricing",
    description:
      "Strong supplier relationships help us provide cost-effective solutions without compromising quality.",
    icon: DollarSign,
  },
  {
    title: "Timely Delivery",
    description:
      "Efficient coordination ensures your products are shipped on schedule with reliable logistics support.",
    icon: Clock3,
  },
  {
    title: "Global Business Network",
    description:
      "We connect Indian suppliers with buyers across international markets through a growing trade network.",
    icon: Globe2,
  },
  {
    title: "Professional Communication",
    description:
      "Clear, transparent communication keeps clients informed throughout every stage of the trade process.",
    icon: MessageSquareText,
  },
  {
    title: "Quality Focus",
    description:
      "Every shipment is coordinated with quality checks to meet international standards and customer expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Customer-Centric Service",
    description:
      "We build long-term partnerships by understanding client requirements and delivering tailored trade solutions.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            A Reliable Partner for
            <br />
            International Trade
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine trusted sourcing, transparent communication, and efficient
            logistics to help businesses build long-term success in global markets.
          </p>
        </div>

        {/* Feature Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6E8BE] transition-colors duration-300 group-hover:bg-[#C89B3C]">
                  <Icon
                    size={28}
                    className="text-[#B48825] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl bg-white p-10 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Ready to Source Quality Products from India?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Partner with VMP Global Exim for dependable sourcing, competitive
            pricing, and seamless international trade support.
          </p>

          <button className="mt-8 rounded-xl bg-[#C89B3C] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#B48825]">
            Start Your Inquiry
          </button>
        </motion.div>

      </div>
    </section>
  );
}