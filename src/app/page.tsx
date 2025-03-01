import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
// import About from "../app/components/About";
// import Services from "../app/components/Services";
// import HowItWorks from "../app/components/HowItWorks";
// import Team from "../app/components/Team";
// import Pricing from "../app/components/Pricing";
// import Testimonials from "../app/components/Testimonials";
// import FAQ from "../app/components/FAQ";
// import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <About /> */}
      {/* <Services />
      <HowItWorks />
      <Team />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact /> */}
      <Footer />
    </main>
  );
}
