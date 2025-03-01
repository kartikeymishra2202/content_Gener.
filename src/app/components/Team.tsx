const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mike Johnson",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Brown",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              {/* <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4"
              /> */}
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
