import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="" alt="About StartupX" width={600} height={400} />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              StartupX is a cutting-edge technology company dedicated to helping
              businesses thrive in the digital age. Founded in 2023, we have
              quickly become a leader in innovative solutions for startups and
              established enterprises alike.
            </p>
            <p className="text-lg mb-4">
              Our mission is to empower companies with the tools and expertise
              they need to disrupt industries, scale rapidly, and make a lasting
              impact in their respective markets.
            </p>
            <p className="text-lg">
              With a team of passionate experts and a commitment to staying at
              the forefront of technological advancements, we are here to turn
              your vision into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
