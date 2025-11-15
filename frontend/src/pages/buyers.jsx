import { Link } from "react-router-dom";

function Buyers() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f24] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">For Buyers</h1>
        <p className="text-gray-300 text-sm mb-6">
          CarBidX gives buyers full transparency. Dealers compete openly so you get the best possible offer.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Post Once</h2>
            <p className="text-gray-300 text-sm">
              Submit your exact car request one time and let multiple dealers come to you.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Real Competition</h2>
            <p className="text-gray-300 text-sm">
              Dealers compete publicly on pricing which increases transparency and accelerates decision-making.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">No Buyer Fees</h2>
            <p className="text-gray-300 text-sm">
              Buyers never pay to use CarBidX. All bidding is free.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Ghosting Prevention</h2>
            <p className="text-gray-300 text-sm">
              A small deposit hold reduces no-shows and helps reward committed dealers.
            </p>
          </div>

        </div>

        <div className="mt-10">
          <Link
            to="/buyer/register"
            className="px-6 py-2.5 bg-[#E8C225] text-black font-semibold rounded-md hover:bg-[#d5b628]"
          >
            Create Your Request
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buyers;
