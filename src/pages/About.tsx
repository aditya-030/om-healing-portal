
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Import components
const AboutHero = lazy(() => import("@/components/AboutHero"));
const AboutIntroduction = lazy(() => import("@/components/AboutIntroduction"));
const AboutConsultation = lazy(() => import("@/components/AboutConsultation"));
const DoctorTeam = lazy(() => import("@/components/DoctorTeam"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const AboutCallToAction = lazy(() => import("@/components/AboutCallToAction"));

// Skeleton loaders
const SectionSkeleton = () => (
  <div className="space-y-4 p-4">
    <Skeleton className="h-8 w-3/4 mx-auto" />
    <Skeleton className="h-4 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <Skeleton className="h-64 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white">
      <Suspense fallback={<SectionSkeleton />}>
        <AboutHero />
      </Suspense>

      {/* Main Content Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <AboutIntroduction />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <AboutConsultation />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <DoctorTeam />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AboutCallToAction />
      </Suspense>
    </main>
  );
};

export default About;
