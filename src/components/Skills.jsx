import React, { useState, useEffect, useRef } from "react";

const SKILLS = [
  { name: "HTML", level: 95, color: "from-orange-400 to-yellow-500", icon: "🌐" },
  { name: "CSS", level: 75, color: "from-blue-400 to-sky-500", icon: "🎨" },
  { name: "JavaScript", level: 60, color: "from-yellow-400 to-orange-500", icon: "🟨" },
  { name: "Tailwind CSS", level: 55, color: "from-sky-400 to-teal-500", icon: "🍃" },
  { name: "Bootstrap", level: 60, color: "from-purple-500 to-indigo-500", icon: "🚀" },
  { name: "Node.js", level: 50, color: "from-green-500 to-emerald-600", icon: "🟢" },
  { name: "Java", level: 75, color: "from-red-500 to-orange-600", icon: "☕" },
  { name: "Spring Boot", level: 65, color: "from-green-600 to-green-700", icon: "🌿" },
  { name: "Microservices", level: 55, color: "from-cyan-500 to-blue-600", icon: "🔗" },
  { name: "SQL", level: 70, color: "from-indigo-500 to-blue-600", icon: "🧩" },
  { name: "PostgreSQL", level: 55, color: "from-blue-600 to-indigo-700", icon: "🐘" },
  { name: "Selenium", level: 40, color: "from-green-600 to-emerald-600", icon: "🧪" }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            🛠️ Technical Skills
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-lg text-gray-600 mt-3">
            A blend of development & testing expertise powering smooth experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-lg border border-white/40 transition transform hover:-translate-y-1"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 text-2xl flex items-center justify-center rounded-xl bg-white/40 shadow">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
              </div>

              {/* Progress Bar (NO PERCENTAGE DISPLAYED) */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    aria-hidden="true"
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out origin-left`}
                    style={{
                      width: reveal ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 120}ms`
                    }}
                  ></div>
                </div>

                {/* Glow */}
                <div
                  className={`absolute top-0 h-3 rounded-full opacity-30 blur-sm pointer-events-none bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: reveal ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 120}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Additional Tools I Use
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "Postman", "VS Code", "REST APIs", "Cursor.ai", "Trae.Ai", "VibeCoding","STS" ].map(tool => (
              <span
                key={tool}
                className="px-4 py-2 bg-white/70 backdrop-blur-md text-gray-800 rounded-full text-sm font-medium shadow-sm hover:bg-purple-100 hover:text-purple-600 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
