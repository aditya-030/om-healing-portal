
import { Card, CardContent } from "@/components/ui/card";
import { Dog, Cat, Heart, PawPrint } from "lucide-react";

const AnimalHomeopathySection = () => {
  const treatments = [
    {
      title: "Pet Allergies",
      description: "Natural remedies for pet allergies and sensitivities",
      icon: <Dog className="h-6 w-6" />
    },
    {
      title: "Digestive Issues",
      description: "Gentle treatments for animal digestive problems",
      icon: <Cat className="h-6 w-6" />
    },
    {
      title: "Skin & Fur Conditions",
      description: "Effective care for pet skin and coat health",
      icon: <PawPrint className="h-6 w-6" />
    },
    {
      title: "Natural Immune Support",
      description: "Boosting your pet's natural immunity",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-12 bg-[#F2FCE2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-8">Animal Homeopathy</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Gentle and effective homeopathic treatments for your beloved pets, supporting their natural healing process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-[#3a7265] bg-[#F2FCE2] p-3 rounded-full">
                    {treatment.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">{treatment.title}</h3>
                  <p className="text-gray-600">{treatment.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalHomeopathySection;
