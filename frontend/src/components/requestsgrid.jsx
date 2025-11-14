import { Link } from "react-router-dom";

function RequestsGrid({ requests = [] }) {
  // Empty state
  if (!Array.isArray(requests) || requests.length === 0) {
    return (
      <div className="text-center text-gray-300 py-12">
        No active car requests yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 w-full">
      {requests.map((item) => (
        <div
          key={item.id}
          className="bg-[#11172e] rounded-xl shadow-lg overflow-hidden border border-[#1a2240]"
        >
          {/* Image */}
          <div className="h-48 w-full overflow-hidden bg-[#0d1328]">
            <img
              src={item.image || "/placeholder-car.png"}
              alt={`${item.year} ${item.make} ${item.model}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-white mb-2">
              {item.year} {item.make} {item.model}
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              {item.location || "Location unavailable"}
            </p>

            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Dealer Offer:</span>
              <span className="text-[#D5B628] font-semibold">
                {item.dealerOffer
                  ? `$${item.dealerOffer.toLocaleString()}`
                  : "—"}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-300 mb-6">
              <span>Target Price:</span>
              <span className="text-gray-200 font-medium">
                {item.targetPrice
                  ? `$${item.targetPrice.toLocaleString()}`
                  : "—"}
              </span>
            </div>

            {/* CTA Button */}
            <Link
              to={`/request/${item.id}`}
              className="bg-[#D5B628] text-black font-semibold w-full block text-center py-2 rounded-lg hover:bg-[#B69C20] transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestsGrid;
