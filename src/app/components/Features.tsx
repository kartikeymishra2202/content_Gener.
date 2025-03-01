import { motion } from "framer-motion";
import { Lightbulb, Zap, Rocket } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Ideas",
    description:
      "Turn your vision into reality with our cutting-edge solutions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience unparalleled speed and efficiency in your operations.",
  },
  {
    icon: Rocket,
    title: "Skyrocket Growth",
    description: "Accelerate your business growth with our proven strategies.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
