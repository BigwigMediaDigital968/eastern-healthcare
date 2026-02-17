"use client";

export default function LeadForm() {
  return (
    <>
      {/* Main CTA Section */}
      <section className="bg-linear-to-r from-white to-(--secondary) py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-[#0e7490]">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Strengthen Your Healthcare Manufacturing with Eastern Healthcare
            </h2>

            <p className="mt-6 text-black leading-relaxed">
              Partner with Eastern Healthcare to scale pharmaceutical,
              nutraceutical, cosmetic, and API manufacturing with precision and
              reliability. From formulation development and regulatory
              compliance to large-scale production, our advanced facilities
              ensure consistent quality, safety, and operational excellence,
              empowering your brand to grow confidently in competitive
              healthcare markets.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent"
                required
              />

              <input
                type="email"
                placeholder="Email*"
                className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent"
                required
              />

              <input
                type="tel"
                placeholder="Phone*"
                className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent"
                required
              />

              <input
                type="text"
                placeholder="Organization"
                className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent"
              />

              <select className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent">
                <option>— Please choose an option —</option>
                <option>Pharmaceutical</option>
                <option>Nutraceutical</option>
                <option>Cosmetic</option>
                <option>API</option>
              </select>

              <select className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent">
                <option>— Please choose an option —</option>
                <option>R&D</option>
                <option>Manufacturing</option>
                <option>Export</option>
                <option>Partnership</option>
              </select>

              <input
                type="text"
                placeholder="Website"
                className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent"
              />

              <textarea
                placeholder="Message"
                rows={1}
                className="border-b border-gray-300 focus:border-(--primary) outline-none pb-2 bg-transparent resize-none"
              />

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-4 bg-[#0e7490] hover:bg-[#002d39] cursor-pointer text-white px-6 py-3 rounded-md transition font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Bar */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-700 text-sm">
            Subscribe to stay updated on our complete range of high-quality
            pharmaceutical products and manufacturing solutions.
          </p>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full md:w-64 border border-gray-300 rounded-l-md focus:outline-none focus:border-(--primary)"
            />
            <button className="bg-[#0e7490] hover:bg-[#002d39] cursor-pointer text-white px-5 py-2 rounded-r-md transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
