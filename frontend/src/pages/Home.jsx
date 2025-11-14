import RequestsGrid from "../components/RequestsGrid";

function Home() {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-24 pb-10">

      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        AI-Assisted Reverse Car Auctions
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        Dealers compete. Buyers save. Secure. Verified. Refundable deposits.
      </p>

      <div className="flex gap-4 flex-col sm:flex-row mb-24">

        {/* Buyer Button */}
        <button
          className="bg-[#FAD80D] hover:bg-[#DDBA0B] text-black font-semibold px-8 py-3 rounded-lg text-lg"
        >
          Register as Buyer
        </button>

        {/* Dealer Button */}
        <button
          className="border border-[#FAD80D] text-[#FAD80D] hover:bg-[#FAD80D] hover:text-black font-semibold px-8 py-3 rounded-lg text-lg"
        >
          Register as Dealer
        </button>

      </div>

      {/* Live Requests Grid */}
      <RequestsGrid />
    </div>
  );
}

export default Home;
