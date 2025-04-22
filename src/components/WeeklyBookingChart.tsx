
import { Card } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", appointments: 8 },
  { day: "Tue", appointments: 12 },
  { day: "Wed", appointments: 15 },
  { day: "Thu", appointments: 10 },
  { day: "Fri", appointments: 14 },
  { day: "Sat", appointments: 6 },
];

const WeeklyBookingChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Appointments</h3>
      <div className="h-[300px] w-full">
        <ChartContainer
          config={{
            appointments: {
              theme: {
                light: "#3a7265",
                dark: "#3a7265",
              },
            },
          }}
        >
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="appointments" fill="var(--color-appointments)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default WeeklyBookingChart;
