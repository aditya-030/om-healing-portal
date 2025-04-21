
import AppointmentForm from "@/components/AppointmentForm";

const Appointment = () => {
  return (
    <main>
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Book an <span className="text-om-green">Appointment</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step toward holistic healing by scheduling a consultation with our homeopathic doctors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-om-green/10 w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0">
                    <span className="text-om-green font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">
                      Your first visit will typically last 45-60 minutes. Our doctor will take a detailed case history, including your physical symptoms, mental and emotional states, lifestyle, and medical history.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-om-green/10 w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0">
                    <span className="text-om-green font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">
                      Based on your consultation, our doctor will prescribe homeopathic remedies specifically tailored to your individual constitution and health concerns.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-om-green/10 w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0">
                    <span className="text-om-green font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow-Up Visits</h3>
                    <p className="text-gray-600">
                      Regular follow-up appointments help us monitor your progress and adjust your treatment plan as needed. These visits are typically shorter than the initial consultation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointment Policy</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-om-green mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Please arrive 10 minutes before your scheduled appointment time.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-om-green mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bring any recent medical reports or test results.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-om-green mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    If you need to cancel, please give at least 24 hours notice.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-om-green mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Payment is expected at the time of service.
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does a homeopathic treatment take to work?</h3>
                <p className="text-gray-600">
                  The timeframe varies depending on your condition, its severity, and how long you've had it. Some patients experience improvement within days, while chronic conditions may take longer to show significant results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I continue my conventional medications?</h3>
                <p className="text-gray-600">
                  Yes, homeopathic treatments can work alongside conventional medicine. Never discontinue prescribed medication without consulting with your medical doctor first.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Are there any side effects from homeopathic remedies?</h3>
                <p className="text-gray-600">
                  Homeopathic remedies are generally safe with minimal to no side effects. Occasionally, some patients might experience a temporary worsening of symptoms as part of the healing process, known as a "healing crisis."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How should I take homeopathic remedies?</h3>
                <p className="text-gray-600">
                  Detailed instructions will be provided with your remedies. Generally, they should be taken with a clean mouth, away from food, drinks (except water), and strong smells like mint, coffee, or camphor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
