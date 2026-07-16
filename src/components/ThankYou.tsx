import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FAF8F4] px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-[#E8E2D6] bg-white p-12 text-center shadow-lg">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F3E8]">
          <CheckCircle2
            size={42}
            className="text-[#C89B3C]"
          />
        </div>

        <h1 className="mt-8 text-5xl font-bold text-[#111827]">
          Thank You!
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your inquiry has been received successfully.
          <br />
          Our team will review your requirements and get back to you as soon as
          possible.
        </p>

        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#C89B3C] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#B48825]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          Back to Home
        </Link>

      </div>
    </section>
  );
}