import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 29,
    features: [
      "1 project",
      "Basic analytics",
      "Limited support",
      "1GB storage",
    ],
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "5 projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
    ],
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Unlimited projects",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited storage",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
