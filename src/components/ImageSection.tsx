
import { cn } from "@/lib/utils";

interface ImageSectionProps {
  imageSrc: string;
  altText: string;
  caption?: string;
  className?: string;
}

const ImageSection = ({ 
  imageSrc, 
  altText, 
  caption = "A place where natural healing begins.", 
  className 
}: ImageSectionProps) => {
  return (
    <section className={cn("relative py-12 md:py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          {caption && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium text-center px-4">
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
