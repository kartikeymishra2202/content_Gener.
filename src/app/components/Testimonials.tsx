// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Alice Johnson",
//     role: "CEO, TechCorp",
//     quote:
//       "StartupX transformed our business. Their innovative solutions helped us stay ahead of the competition.",
//   },
//   {
//     name: "Bob Smith",
//     role: "Founder, InnovateCo",
//     quote:
//       "The best decision we made for our startup. Incredible results and top-notch support!",
//   },
//   {
//     name: "Carol Williams",
//     role: "CTO, FutureTech",
//     quote:
//       "Their rapid development process and cutting-edge tech stack accelerated our time to market significantly.",
//   },
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           What Our Clients Say
//         </h2>
//         <div className="max-w-4xl mx-auto relative">
//           <div className="text-center">
//             <p className="text-xl italic mb-4">
//               {/* "{testimonials[currentIndex].quote}" */}
//             </p>
//             <p className="font-semibold">{testimonials[currentIndex].name}</p>
//             <p className="text-gray-600">{testimonials[currentIndex].role}</p>
//           </div>
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
