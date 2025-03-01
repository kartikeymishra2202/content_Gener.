import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description:
      "We start with a thorough consultation to understand your needs and goals.",
  },
  {
    title: "Strategy",
    description:
      "Our team develops a customized strategy tailored to your business.",
  },
  {
    title: "Implementation",
    description:
      "We implement the solutions, ensuring seamless integration with your existing systems.",
  },
  {
    title: "Growth",
    description:
      "We continue to support and optimize, helping your business grow and succeed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
