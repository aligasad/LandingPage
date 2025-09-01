import React from "react";

// ZaphiraHero.jsx
// Single-file React component for the hero/landing section of Zaphira Organic Farm
// Uses Tailwind CSS classes. Drop into a React app that already has Tailwind set up.

export default function ZaphiraHero({ onPrimaryClick }) {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              From Farms to Your Home — <span className="text-emerald-700">No Middlemen.</span> <span className="text-emerald-600">Only Trust.</span>
            </h1>

            <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-xl">
              We're <strong>Zaphira</strong>: India's premium farm-to-home platform for truly fresh, honest, and ethically-sourced food. We buy directly from partner farms &amp; artisanal producers, process with care, and deliver straight to your doorstep — so you get fresher produce, fair prices, and full traceability.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={onPrimaryClick}
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Shop Fresh Now
              </button>

              <a
                href="#learn"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-emerald-700 text-emerald-700 font-medium hover:bg-emerald-50 transition"
              >
                How it works
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wide text-gray-500">Tagline options</h3>
              <ul className="mt-3 flex flex-col sm:flex-row gap-3">
                <li className="px-4 py-2 rounded-lg bg-white shadow-sm border">
                  <strong>Farm Fresh. Fast. Fair.</strong>
                </li>
                <li className="px-4 py-2 rounded-lg bg-white shadow-sm border">
                  <strong>Kheton Se Aapke Ghar Tak.</strong>
                </li>
                <li className="px-4 py-2 rounded-lg bg-white shadow-sm border">
                  <strong>No Middlemen. No Compromise.</strong>
                </li>
              </ul>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  Need a mixed Hindi+English (Hinglish) version or different length variants for mobile? Tell me which style you prefer and I'll add variants.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition">
              <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                alt="Fresh farm produce delivered to home"
                className="w-full h-80 object-cover"
              />

              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Direct from partner farms</p>
                    <p className="mt-1 font-semibold text-lg text-gray-800">Traceable & ethically sourced</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Avg. delivery</p>
                    <p className="font-bold text-emerald-700">24–48 hrs</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border">No Middlemen</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border">Full Traceability</span>
                </div>
              </div>
            </div>

            {/* subtle decorative badge */}
            <div className="absolute -top-4 -left-4 bg-emerald-600 text-white px-4 py-2 rounded-2xl text-sm shadow">Certified Fresh</div>
          </div>
        </div>

        {/* Optional: small "how it works" anchor */}
        <div id="learn" className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold">1. Partner Farms</h4>
            <p className="mt-2 text-sm text-gray-600">We source directly from trusted farms and small producers.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold">2. Process with care</h4>
            <p className="mt-2 text-sm text-gray-600">Careful handling, light processing, and strict quality checks.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold">3. Doorstep delivery</h4>
            <p className="mt-2 text-sm text-gray-600">Fresh produce delivered fast with transparent pricing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

