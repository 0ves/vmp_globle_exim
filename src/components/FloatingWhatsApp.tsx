import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/919156919189?text=Hello%20VMP%20Global%20Exim,%20I'm%20interested%20in%20your%20export%20and%20sourcing%20services.";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_35px_rgba(37,211,102,0.35)]
        transition-all
        duration-300
        hover:bg-[#1EBE5D]
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={34} />
    </motion.a>
  );
}