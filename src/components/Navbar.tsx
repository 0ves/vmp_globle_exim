import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Why Us", path: "/WhyChooseUs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E4D8] bg-[#FDEFB5]/45 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <NavLink to="/" className="flex items-center gap-4">
          <img src={logo} alt="VMP Global Exim" className="h-14 w-auto mr-2" />

          <div>
            <h1 className="text-xl font-semibold tracking-tight text-[#111827]">
              VMP Global Exim
            </h1>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-[#C89B3C]">
              EXPORT • IMPORT • SOURCING
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#F8F3E8] text-[#B8860B]"
                      : "text-gray-700 hover:bg-[#FAF8F4] hover:text-[#B8860B]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-6 lg:flex">
         

          {/* Divider */}

          <div className="h-8 w-px bg-[#E8E2D6]" />

          {/* CTA */}

          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#B48825] hover:shadow-lg"
          >
            Request Quote
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-[#ECE7DC] p-2 transition hover:bg-[#FAF8F4] lg:hidden"
        >
          {mobileOpen ? (
            <X size={22} className="text-gray-900" />
          ) : (
            <Menu size={22} className="text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#ECE7DC] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-6"></div>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `mb-2 flex items-center justify-between rounded-xl border px-5 py-4 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "border-[#C89B3C] bg-[#F8F3E8] text-[#B8860B]"
                      : "border-[#ECE7DC] text-gray-700 hover:border-[#C89B3C] hover:bg-[#FAF8F4]"
                  }`
                }
              >
                <span>{link.name}</span>

                <ArrowRight size={18} className="text-[#C89B3C]" />
              </NavLink>
            ))}

            {/* Mobile Contact Card */}

            <div className="mt-6 rounded-2xl border border-[#E8E2D6] bg-[#FAF8F4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">
                Global Trade Partner
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                Ready to Start Your Inquiry?
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Contact our team for product sourcing, export management, and
                international trade solutions.
              </p>

              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C89B3C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#B48825]"
              >
                Request Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
