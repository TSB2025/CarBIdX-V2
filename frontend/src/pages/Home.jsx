function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        AI-Assisted Reverse Car Auctions
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        Dealers compete. Buyers save. Secure. Verified. Refundable deposits.
      </p>

      <div className="flex gap-4 flex-col sm:flex-row">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg text-lg">
          Register as Buyer
        </button>

        <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-3 rounded-lg text-lg">
          Register as Dealer
        </button>
      </div>
    </div>
  );
}

export default Home;
