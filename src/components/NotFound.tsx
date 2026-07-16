import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#FAF8F4] px-6">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <span className="text-8xl font-bold text-[#C89B3C] md:text-9xl">
          404
        </span>

        <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          The page you're looking for may have been moved, deleted, or the URL
          may be incorrect. Please return to the homepage or explore our
          products and services.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#C89B3C] px-6 py-4 font-semibold text-white transition hover:bg-[#B48825]"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-[#C89B3C] px-6 py-4 font-semibold text-[#C89B3C] transition hover:bg-[#F8F4EA]"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
}