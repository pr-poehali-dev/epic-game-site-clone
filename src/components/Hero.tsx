import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
}

const Hero = ({ title, description, imageUrl, buttonText = "КУПИТЬ СЕЙЧАС" }: HeroProps) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* Контент */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8">
              {buttonText}
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8">
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
