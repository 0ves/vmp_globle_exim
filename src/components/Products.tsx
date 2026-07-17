import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productCategories } from "../data/products";

export default function Products() {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Our Products
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Delivering Quality Products
            <br />
            Across Global Industries
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            From agricultural commodities to industrial products, we provide
            export-ready solutions backed by reliable sourcing and international
            trade expertise.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full bg-[#F6F2E9] px-3 py-1 text-sm text-gray-700"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                {/* <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#C89B3C] transition hover:gap-3">
                  View Details
                  <ArrowRight size={18} />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
