
import { useState } from "react";
import { cn } from "@/lib/utils";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        reason: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM"
  ];

  // Get tomorrow's date for min attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  // Get date 3 months from now for max attribute
  const threeMonthsLater = new Date();
  threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
  const threeMonthsLaterFormatted = threeMonthsLater.toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-md w-full mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Book Your Appointment</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          Your appointment request has been received. We'll contact you shortly to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-om-green focus:border-om-green"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-om-green focus:border-om-green"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-om-green focus:border-om-green"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={tomorrowFormatted}
                max={threeMonthsLaterFormatted}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-om-green focus:border-om-green"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-om-green focus:border-om-green"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="" disabled>Select time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Visit *
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={3}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-om-green focus:border-om-green"
              placeholder="Please briefly describe your symptoms or reason for appointment"
              value={formData.reason}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full bg-om-green text-white py-2 px-4 rounded-md font-medium transition-all",
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-om-lightGreen"
            )}
          >
            {isSubmitting ? "Submitting..." : "Request Appointment"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
