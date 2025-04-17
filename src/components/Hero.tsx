import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type HeroProps = {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  ctaLink?: string;
  ctaText?: string;
};

const Hero = ({
  title,
  subtitle = "",
  description,
  imageUrl,
  ctaLink = "/eras",
  ctaText = "Начать путешествие",
}: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center h-[70vh] flex items-center justify-center" 
         style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})` }}>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl font-serif text-white/80 mb-6">
            {subtitle}
          </h2>
        )}
        <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <Link to={ctaLink}>
          <Button size="lg" className="bg-historian hover:bg-historian-dark">
            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;