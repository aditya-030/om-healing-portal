
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DoctorDashboard = () => {
  // This would be connected to Supabase Auth in the future
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Doctor Portal Login</h1>
          <p className="text-gray-600 mb-6 text-center">
            Please log in to access your doctor dashboard, manage patient records, and view appointments.
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
                placeholder="doctor@omhomeopathy.com"
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
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
        <div className="text-right">
          <h2 className="font-medium">Dr. Kameshwar Mahto</h2>
          <p className="text-sm text-gray-500">Homeopathy Specialist</p>
        </div>
      </div>
      
      <Tabs defaultValue="appointments" className="space-y-6">
        <TabsList className="grid grid-cols-3 max-w-md">
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="ai-assist">AI Assistant</TabsTrigger>
        </TabsList>
        
        <TabsContent value="appointments">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Scheduled for April 21, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["10:00 AM", "11:30 AM", "2:00 PM"].map((time, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                      <div>
                        <p className="font-medium">Patient {index + 1}</p>
                        <p className="text-sm text-gray-500">{time} • General Consultation</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" variant="outline">Start Session</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Apr 22", "Apr 23", "Apr 25"].map((date, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                      <div>
                        <p className="font-medium">{date}, 2025</p>
                        <p className="text-sm text-gray-500">3 appointments scheduled</p>
                      </div>
                      <Button size="sm" variant="outline">View Schedule</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Patient Records</CardTitle>
              <CardDescription>Search and manage patient information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-4">
                {["Priya Shah", "Rajiv Kumar", "Meera Patel"].map((name, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-gray-500">Last visit: April {10 + index}, 2025</p>
                    </div>
                    <Button size="sm" variant="outline">View Record</Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Patients</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai-assist">
          <Card>
            <CardHeader>
              <CardTitle>AI Treatment Assistant</CardTitle>
              <CardDescription>Get AI-powered suggestions for homeopathic treatments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Patient Symptoms
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md min-h-[100px]"
                    placeholder="Describe patient symptoms here..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Medical History
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md min-h-[100px]"
                    placeholder="Add relevant medical history..."
                  ></textarea>
                </div>
                <Button className="w-full bg-om-green hover:bg-om-lightGreen">
                  Generate Treatment Suggestions
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium mb-2">AI Suggestions</h3>
                <p className="text-sm text-gray-600">
                  Enter patient symptoms and medical history above to receive AI-powered homeopathic treatment recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorDashboard;
