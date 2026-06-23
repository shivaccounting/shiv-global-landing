import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface PageHeroProps {
  image: StaticImageData;
  children: ReactNode;
}

const PageHero = ({ image, children }: PageHeroProps) => {
  return (
    <section
      className="relative py-20 bg-cover bg-center min-h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/65" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </section>
  );
};

export default PageHero;
