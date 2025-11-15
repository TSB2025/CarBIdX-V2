import { Link } from "react-router-dom";

function BuyerLogin() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-lg p-8">

        <h1 className="text-2xl font-bold mb-6 text-center">Buyer Login</h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded bg-[#1a2240] text-white border border-[#2a3358]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded bg-[#1a2240] text-white border border-[#2a3358]"
          />

          <button className="w-full bg-[#E8C225] text-black py-2.5 rounded font-semibold hover:bg-[#d5b628]">
            Login
          </button>
        </div>

        <p className="text-gray-400 text-xs text-center mt-6">
          Don't have an account?{" "}
          <Link to="/buyer/register" className="text-[#E8C225]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BuyerLogin;
