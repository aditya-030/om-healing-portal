
import React from "react";
import DoctorCard from "@/components/DoctorCard";

const DoctorTeam = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800">Our Team of Doctors to Take Care of You</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DoctorCard
          name="Dr. Sarah Johnson"
          title="Senior Homeopathic Physician"
          image="/lovable-uploads/5cbb148b-6478-4e10-a734-48029ffef217.png"
          description="Specializing in chronic diseases with over 15 years of experience in classical homeopathy."
        />
        
        <DoctorCard
          name="Dr. Michael Chen"
          title="Homeopathic Consultant"
          image="/lovable-uploads/91423c29-9bad-470e-a388-aef213c725f9.png"
          description="Expert in pediatric homeopathy and women's health issues with international training."
        />
        
        <DoctorCard
          name="Dr. Priya Sharma"
          title="Chief Homeopathic Physician"
          image="/lovable-uploads/ffb00bc7-1c12-4424-be15-955af7b5a61a.png"
          description="Founder and head physician with specialization in autoimmune disorders and skin conditions."
        />
      </div>
    </div>
  );
};

export default DoctorTeam;
