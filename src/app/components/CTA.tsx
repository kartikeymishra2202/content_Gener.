"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Join thousands of successful startups. Get started today!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <motion.button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
