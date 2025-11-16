import React from "react";

/**
 * Education.jsx
 * - Side-by-side layout on md+
 * - Stacked on mobile
 * - Center timeline with markers for each row
 */

const Education = () => {
  const entries = [
    {
      degree: "Master of Computer Applications",
      school: "Biju Patnaik University of Technology",
      dates: "2024 — 2026",
      status: "Ongoing",
      statusGradient: "from-cyan-400 to-blue-600",
      bullets: [
        "Focused on software engineering, algorithms, and full-stack web development.",
        "Coursework: Advanced Java, Distributed Systems, Databases",
        "Capstone: Planned full-stack application (in progress)."
      ]
    },
    {
      degree: "Bachelor of Physics",
      school: "Maharaja Sriram Chandra Bhanja Deo University",
      dates: "2020 — 2023",
      status: "Graduated",
      statusGradient: "from-purple-400 to-pink-500",
      bullets: [
        "Built analytical and problem-solving skills through physics projects.",
        "Completed a research project on quantum computing.",
        "Graduated with hands-on experience in data analysis & computing."
      ]
    }
    // add more entries here if needed
  ];

  // Chunk entries into rows of two so they render side-by-side on md+
  const chunked = [];
  for (let i = 0; i < entries.length; i += 2) {
    chunked.push(entries.slice(i, i + 2));
  }

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Education</h2>
          <p className="mt-2 text-lg text-gray-600">My academic background & learning journey</p>
        </div>

        {/* Timeline + Grid */}
        <div className="relative">
          {/* center vertical timeline line for md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1">
            <div className="h-full w-1 bg-gray-200 rounded-full mx-auto" />
          </div>

          <div className="space-y-10">
            {chunked.map((pair, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
                {/* Left card (first in pair) */}
                <div className="w-full">
                  {pair[0] && (
                    <article className="group bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
                      <header className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{pair[0].degree}</h3>
                          <p className="text-sm text-blue-600 font-medium mt-1">{pair[0].school}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">{pair[0].dates}</p>
                          <span
                            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${pair[0].statusGradient}`}
                            aria-hidden="true"
                          >
                            {pair[0].status}
                          </span>
                        </div>
                      </header>

                      <ul className="mt-4 text-gray-700 space-y-2 list-inside">
                        {pair[0].bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 text-sm text-gray-400">•</span>
                            <p className="text-sm leading-relaxed">{b}</p>
                          </li>
                        ))}
                      </ul>
                    </article>
                  )}
                </div>

                {/* Right card (second in pair) */}
                <div className="w-full">
                  {pair[1] ? (
                    <article className="group bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
                      <header className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{pair[1].degree}</h3>
                          <p className="text-sm text-blue-600 font-medium mt-1">{pair[1].school}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">{pair[1].dates}</p>
                          <span
                            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${pair[1].statusGradient}`}
                            aria-hidden="true"
                          >
                            {pair[1].status}
                          </span>
                        </div>
                      </header>

                      <ul className="mt-4 text-gray-700 space-y-2 list-inside">
                        {pair[1].bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 text-sm text-gray-400">•</span>
                            <p className="text-sm leading-relaxed">{b}</p>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ) : (
                    // If there's no right sibling, show an empty spacer so center timeline aligns nicely
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Timeline marker for this row (center) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 md:top-6">
                  <div className="w-5 h-5 rounded-full bg-white border-4 border-gray-100 shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            I continuously learn new technologies and apply them to projects — always excited to take on challenging
            problems and build real-world solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
