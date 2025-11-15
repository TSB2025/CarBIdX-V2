function Contact() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f24] text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-300 text-sm mb-6">
          For support, dealer onboarding, or platform questions, reach out using the information below.
        </p>

        <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6 space-y-3 text-sm text-gray-300">
          <p>Email: support@carbidx.com</p>
          <p>Response Time: 1–2 business days</p>
          <p>Hours: Monday – Friday, 9 AM – 5 PM PST</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
