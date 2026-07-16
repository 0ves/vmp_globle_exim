import { motion } from "framer-motion";
import { Mail , Phone , MapPin , Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";


const services = [
  "Export Management",
  "Import Services",
  "Product Sourcing",
  "Supplier Identification",
  "Logistics Coordination",
];

export default function FooterSection() {
  return (
    <footer className="bg-[#111827] text-white">
      {/* Gold Line */}
      <div className="h-[3px] w-full bg-[#C89B3C]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <img
              src={logo}
              alt="VMP Global Exim"
              className="h-16"
            />

            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#C89B3C]">
              Export • Import • Global Sourcing
            </p>

            <p className="mt-8 max-w-md leading-8 text-gray-300">
              VMP Global Exim is committed to connecting reliable Indian
              manufacturers with international buyers through quality products,
              transparent communication, and dependable logistics support.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-3">
                <Globe size={18} className="text-[#C89B3C]" />
              </div>

              <span className="text-sm text-gray-400">
                Connecting India to Global Markets
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}

         

          {/* Services */}

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <MapPin
                    size={18}
                    className="text-[#C89B3C]"
                  />
                </div>

                <div>
                  <p className="font-medium">
                    Office
                  </p>

                  <p className="mt-1 text-gray-300">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <Phone
                    size={18}
                    className="text-[#C89B3C]"
                  />
                </div>

                <div>
                  <p className="font-medium">
                    Phone
                  </p>

                  <a
                    href="tel:+919156919189"
                    className="mt-1 block text-gray-300 hover:text-[#C89B3C]"
                  >
                    +91 9156919189
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <Mail
                    size={18}
                    className="text-[#C89B3C]"
                  />
                </div>

                <div>
                  <p className="font-medium">
                    Email
                  </p>

                  <a
                    href="mailto:sales@vmpglobalexim.com"
                    className="mt-1 block text-gray-300 hover:text-[#C89B3C]"
                  >
                    sales@vmpglobalexim.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm md:flex-row">

          <p className="text-gray-400">
            © {new Date().getFullYear()} VMP Global Exim. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 transition hover:text-[#C89B3C]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-gray-400 transition hover:text-[#C89B3C]"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}