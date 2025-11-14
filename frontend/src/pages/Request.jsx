import React from "react";

export default function Request() {
  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-2xl bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-8 text-white">

        <h1 className="text-3xl font-bold mb-3 text-center">
          Car Request Form
        </h1>

        <p className="text-gray-300 text-center mb-10">
          Tell us what you want. Dealers compete to offer you the best deal.
        </p>

        <div className="text-center text-[#E8C225] text-lg font-semibold">
          Buyer Request Page Placeholder
        </div>

        <p className="text-gray-400 text-center text-sm mt-4">
          Full request form will be inserted once backend connection begins.
        </p>

      </section>
    </main>
  );
}
