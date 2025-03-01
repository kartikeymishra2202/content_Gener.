import Link from "next/link";
import { ArrowRight } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-1 border-t border-amber-500 ">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Innovate. Disrupt. Succeed.
            </h1>
            <p className="text-xl mb-6">
              Create Smarter, Faster, and Better with AI-Powered Content.
            </p>
            <Link
              href="#contact"
              className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="md:w-1/3">
            <Image
              src={logo}
              alt="Startup illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
