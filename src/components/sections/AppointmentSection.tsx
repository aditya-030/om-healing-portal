
import { Card } from "@/components/ui/card";

const AppointmentSection = () => {
  const weeklySchedule = [
    { day: "Monday", hours: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="appointment" className="py-16 bg-[#f7f8f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Book an <span className="text-[#3a7265]">Appointment</span>
          </h2>
          <p className="text-gray-600">Schedule a consultation with our experienced homeopathic doctors</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#3a7265]">Weekly Schedule</h3>
            <div className="space-y-3">
              {weeklySchedule.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </Card>
          
          <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Contact Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Time</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none"
                  required
                >
                  <option value="">Select Time</option>
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Reason for Visit / Symptoms</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none"
                rows={4}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#3a7265] text-white py-3 rounded hover:bg-[#3a7265]/80 transition-colors font-bold"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
