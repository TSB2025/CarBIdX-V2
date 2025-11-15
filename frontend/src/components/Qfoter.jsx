function Footer() {
  return (
    <footer className="w-full mt-20 py-10 px-6 bg-[#0a0f24] border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
        <p className="mb-4">
          © {new Date().getFullYear()} CarBidX. All Rights Reserved.
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-yellow-400">Terms</a>
          <a href="#" className="hover:text-yellow-400">Privacy</a>
          <a href="#" className="hover:text-yellow-400">Deposit Policy</a>
        </div>

        <p className="text-gray-500">
          Made with <span className="text-yellow-400">Emergent</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
