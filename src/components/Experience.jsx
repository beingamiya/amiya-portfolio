import React from "react";

/**
 * Experience.jsx
 * - Side-by-side on md+ (2 columns)
 * - Stacked on small screens
 * - Timeline-style markers centered per row
 * - Clean card UI with badges and subtle hover
 */

const Experience = () => {
  // Fixed array (removed stray leading comma)
  const experiences = [
    {
      title: "Test Engineer L1",
      company: "Wipro Limited",
      period: "2024 — Present",
      location: "Onsite / Client Site",
      description:
        "Performed end-to-end testing, wrote test cases, executed manual test cycles, reported defects, and collaborated closely with developers and product owners to verify fixes.",
      highlights: [
        "Created and maintained test documentation",
        "Reported issues with detailed steps and logs",
        "Worked in Agile sprints and daily standups"
      ],
      badge: "Current",
      badgeGradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Operation Representative",
      company: "Concentrix",
      period: "07/2024 — 10/2024",
      location: "Onsite",
      description:
        "Started professional journey providing technical support and troubleshooting for customers, improving communication skills and technical knowledge.",
      highlights: [
        "Handled customer queries and technical troubleshooting",
        "Followed process guidelines and SLAs",
        "Learned ticketing tools and escalation workflows"
      ],
      badge: "Past",
      badgeGradient: "from-purple-400 to-pink-500"
    }
    // add more experiences if needed
  ];

  // chunk into rows of two for side-by-side rendering
  const rows = [];
  for (let i = 0; i < experiences.length; i += 2) {
    rows.push(experiences.slice(i, i + 2));
  }

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Experience</h2>
        </div>

        <div className="relative">
          {/* vertical center line visible on md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1">
            <div className="h-full w-1 bg-gray-200 rounded-full mx-auto" />
          </div>

          <div className="space-y-10">
            {rows.map((pair, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative"
              >
                {/* Left Card */}
                <div className="w-full">
                  {pair[0] && (
                    <article className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
                      <header className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{pair[0].title}</h3>
                          <p className="text-sm text-blue-600 font-medium mt-1">{pair[0].company}</p>
                          <p className="text-sm text-gray-500 mt-1">{pair[0].location}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">{pair[0].period}</p>
                          <span
                            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${pair[0].badgeGradient}`}
                            aria-hidden="true"
                          >
                            {pair[0].badge}
                          </span>
                        </div>
                      </header>

                      <p className="text-gray-700 mt-4">{pair[0].description}</p>

                      {pair[0].highlights?.length > 0 && (
                        <ul className="mt-4 text-gray-700 space-y-2 list-inside">
                          {pair[0].highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-1 text-sm text-gray-400">•</span>
                              <p className="text-sm leading-relaxed">{h}</p>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-5 flex items-center gap-3">
                       
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">Team: Windows Continuous Delivery</span>
                      </div>
                    </article>
                  )}
                </div>

                {/* Right Card */}
                <div className="w-full">
                  {pair[1] ? (
                    <article className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
                      <header className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{pair[1].title}</h3>
                          <p className="text-sm text-blue-600 font-medium mt-1">{pair[1].company}</p>
                          <p className="text-sm text-gray-500 mt-1">{pair[1].location}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">{pair[1].period}</p>
                          <span
                            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${pair[1].badgeGradient}`}
                            aria-hidden="true"
                          >
                            {pair[1].badge}
                          </span>
                        </div>
                      </header>

                      <p className="text-gray-700 mt-4">{pair[1].description}</p>

                      {pair[1].highlights?.length > 0 && (
                        <ul className="mt-4 text-gray-700 space-y-2 list-inside">
                          {pair[1].highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-1 text-sm text-gray-400">•</span>
                              <p className="text-sm leading-relaxed">{h}</p>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-5 flex items-center gap-3">
                       
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">Team: Amazon Customer Support</span>
                      </div>
                    </article>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* centered timeline marker for this row */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 md:top-6">
                  <div className="w-5 h-5 rounded-full bg-white border-4 border-gray-100 shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* footer CTA */}
        
      </div>
    </section>
  );
};

export default Experience;
