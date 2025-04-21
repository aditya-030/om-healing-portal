
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PatientDashboard = () => {
  // This would be connected to Supabase Auth in the future
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Patient Portal Login</h1>
          <p className="text-gray-600 mb-6 text-center">
            Please log in to access your personal dashboard, view prescriptions, and manage appointments.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="pt-2">
              <Button 
                className="w-full bg-om-green hover:bg-om-lightGreen" 
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </Button>
            </div>
            <div className="text-center text-sm">
              <a href="#" className="text-om-green hover:underline">
                Forgot password?
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="text-om-green hover:underline">
                Register new account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Patient Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">General Consultation</p>
                    <p className="text-sm text-gray-500">Dr. Kameshwar Mahto</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-om-green">May 5, 2025</p>
                    <p className="text-sm text-gray-500">10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Book New Appointment</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Prescriptions</CardTitle>
            <CardDescription>Your homeopathic remedies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Allergy Treatment</p>
                    <p className="text-sm text-gray-500">Issued: April 20, 2025</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Prescriptions</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Medical Reports</CardTitle>
            <CardDescription>Upload and manage your reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-500 text-center">
                Drag & drop files here or click to upload
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Uploaded Reports</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Have Questions?</h2>
        <p className="mb-4">Ask our AI assistant about homeopathic remedies or general health questions.</p>
        <div className="flex">
          <input 
            type="text" 
            className="flex-1 p-2 border rounded-l-md" 
            placeholder="Type your question here..."
          />
          <Button className="rounded-l-none bg-om-green hover:bg-om-lightGreen">
            Ask
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
