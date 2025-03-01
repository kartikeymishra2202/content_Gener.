import { Lightbulb, Zap, Rocket, Globe } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "Cutting-edge tech solutions tailored to your unique business needs.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description:
      "Fast-paced development cycles to get your product to market quickly.",
  },
  {
    icon: Rocket,
    title: "Growth Strategies",
    description: "Data-driven strategies to skyrocket your business growth.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Expand your business globally with our international expertise.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
