import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0a0f24] text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Get dealers to compete  
              <span className="block text-[#E8C225]">for your exact car request.</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-md">
              Post a single request. Verified dealers bid publicly.  
              Choose the winner with full transparency and zero pressure.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                to="/buyer/register"
                className="px-5 py-2.5 bg-[#E8C225] text-black font-semibold rounded-md hover:bg-[#d5b628] transition"
              >
                I’m a Buyer
              </Link>

              <Link
                to="/dealer/login"
                className="px-5 py-2.5 border border-[#E8C225] text-sm font-semibold rounded-md hover:bg-[#11172f]"
              >
                I’m a Dealer
              </Link>
            </div>

            <ul className="text-gray-300 text-xs sm:text-sm space-y-2">
              <li>• Buyers never pay to post a request.</li>
              <li>• Dealers see only bid amounts, not identities.</li>
              <li>• A deposit hold reduces ghosting and protects winning dealers.</li>
            </ul>
          </div>

          {/* Right Side Info Box */}
          <div className="bg-[#11172f] border border-[#1a2240] rounded-xl p-5 text-sm text-gray-300">
            <h2 className="text-[#E8C225] text-lg font-semibold mb-3">
              How CarBidX Works
            </h2>

            <ol className="list-decimal list-inside space-y-2">
              <li>Enter your exact car specs.</li>
              <li>System places a refundable deposit hold.</li>
              <li>Verified dealers bid publicly to win your request.</li>
              <li>You select the winning offer and confirm.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION (optional future expansion) */}
      <section className="w-full py-10 border-t border-[#1a2240] bg-[#0a0f24]">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4">
            Live Car Requests (Coming Soon)
          </h3>
          <p className="text-gray-400 text-sm">
            Public request listings will appear here once backend wiring is completed.
          </p>
        </div>
      </section>

      {/* DISCLAIMERS */}
      <section className="border-t border-[#1a2240] bg-[#0a0f24]">
        <div className="max-w-6xl mx-auto px-4 py-6 text-gray-400 text-[11px] sm:text-xs space-y-3">
          <p>
            CarBidX connects buyers with licensed dealers. We do not sell vehicles
            directly and we do not provide financing, insurance, or tax advice.
          </p>
          <p>
            All pricing, availability, and dealer offers are controlled by participating
            dealerships. Verify all terms with the winning dealer before signing.
          </p>
          <p>
            Deposit holds are processed securely and released or captured according
            to the outcome of each auction in line with posted rules.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a2240] bg-[#0a0f24]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-[11px] sm:text-xs">
          <span>© {new Date().getFullYear()} CarBidX. All rights reserved.</span>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Dealer Agreement</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
