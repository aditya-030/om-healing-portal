const AppointmentSection = () => {
  return (
    <section id="appointment" className="py-16 bg-[#f7f8f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Book an <span className="text-[#3a7265]">Appointment</span>
          </h2>
          <p className="text-gray-600">Schedule a consultation with our experienced homeopathic doctors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Health Concern</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" rows={3} required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#3a7265] text-white py-3 rounded hover:bg-[#3a7265]/80 transition-colors font-bold">Request Appointment</button>
            </form>
          </div>
          <WeeklyBookingChart />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
