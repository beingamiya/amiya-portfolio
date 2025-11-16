import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg("Please enter a valid email.");
      return;
    }

    const subs = JSON.parse(localStorage.getItem("newsletterSubs") || "[]");
    subs.push({ id: Date.now(), email, timestamp: new Date().toISOString() });
    localStorage.setItem("newsletterSubs", JSON.stringify(subs));

    setMsg("Thanks! You are subscribed.");
    setEmail("");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-neutral-900 to-indigo-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID: Branding + Social + Newsletter */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Branding + Social */}
          <div className="space-y-6">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-xl">
                <span className="font-bold text-lg text-gray-900">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold">Amiya</h3>
                <p className="text-sm text-gray-300">Developer • Test Engineer • Vibe Coder</p>
              </div>
            </div>

            <p className="text-gray-300 max-w-md">
              Building clean, modern applications with passion, creativity, and user-focused design.
              I combine development and testing to deliver smooth, reliable experiences.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <a
                href="https://x.com/Yasnuggle"
                aria-label="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2H21.5l-7.364 8.41L23.5 22h-6.898l-5.396-6.873L5.5 22H2.244l7.893-9.01L.5 2h6.898l4.79 6.225L18.244 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amiya-panigrahi/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                           2.239 5 5 5h14c2.762 0 5-2.239 
                           5-5v-14c0-2.761-2.238-5-5-5zm-11 
                           19h-3v-11h3v11zm-1.5-12.268c-.966 
                           0-1.75-.79-1.75-1.764s.784-1.764 
                           1.75-1.764 1.75.79 
                           1.75 1.764-.784 1.764-1.75 
                           1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.865 
                           0-2.151 1.459-2.151 2.97v5.693h-3v-11h2.885v1.507h.041c.401-.76 
                           1.379-1.562 2.839-1.562 3.036 
                           0 3.6 2.004 3.6 4.611v6.444z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/beingamiya"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.645.5.5 5.644.5 12c0 
                           5.086 3.292 9.385 7.865 10.907.575.107.785-.245.785-.547 
                           0-.271-.01-.989-.015-1.943-3.2.695-3.877-1.543-3.877-1.543-.523-1.33-1.277-1.685-1.277-1.685-1.044-.714.08-.699.08-.699 
                           1.155.082 1.764 1.186 1.764 1.186 
                           1.026 1.76 2.69 1.252 3.345.957.104-.744.402-1.253.732-1.542-2.553-.291-5.237-1.277-5.237-5.683 
                           0-1.255.453-2.282 1.19-3.086-.119-.292-.517-1.466.113-3.056 
                           0 0 .97-.31 3.176 1.18a11.07 11.07 0 0 1 2.894-.389c.982.004 
                           1.974.132 2.894.389 2.203-1.49 3.171-1.18 3.171-1.18.633 1.59.235 
                           2.764.116 3.056.74.804 1.186 1.831 1.186 3.086 
                           0 4.417-2.69 5.387-5.253 5.672.41.354.78 1.056.78 
                           2.129 0 1.538-.014 2.778-.014 3.157 
                           0 .304.206.66.79.547C20.213 21.38 23.5 17.083 23.5 12 
                           23.5 5.645 18.355.5 12 .5z" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-gray-300 text-sm space-y-2 mt-4">
              <p>Want to reach out?</p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M2 3v18l4-4h14V3z" />
                </svg>
                {/* use real mailto link matching displayed email */}
                <a href="mailto:amiya.panigrahi01@gmail.com" className="hover:text-white">
                  amiya.panigrahi09@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Based in India, Odisha, Soro
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get project updates and development tips — no spam, just value.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-white/10 placeholder-gray-400 text-white focus:ring-2 focus:ring-cyan-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 text-gray-900 font-semibold hover:brightness-95 transition"
              >
                Subscribe
              </button>
            </form>

            {msg && <p className="mt-3 text-sm text-green-300">{msg}</p>}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Amiya — Built with passion & clean code.
          </p>
          <div className="text-sm text-gray-400">
            Made with <span aria-hidden="true">💙</span> VibeCoding
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
