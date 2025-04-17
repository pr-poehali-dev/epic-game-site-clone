import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

type HistorianPassFeature = {
  id: string;
  title: string;
  description: string;
};

type HistorianPassProps = {
  price: string;
  discount?: string;
  features: HistorianPassFeature[];
  ctaLink?: string;
  ctaText?: string;
};

const HistorianPass = ({
  price,
  discount,
  features,
  ctaLink = "/checkout",
  ctaText = "Приобрести пропуск Историка"
}: HistorianPassProps) => {
  return (
    <Card className="bg-card border-historian/50 overflow-hidden">
      {discount && (
        <div className="bg-historian text-white px-4 py-1 text-center text-sm font-medium">
          Скидка {discount}% — ограниченное предложение!
        </div>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">Пропуск Историка</CardTitle>
        <CardDescription>
          Полный доступ ко всем историческим материалам
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-center">
          <span className="text-4xl font-bold">{price} ₽</span>
          <span className="text-muted-foreground ml-1">/ год</span>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature.id} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-historian mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{feature.title}</p>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Link to={ctaLink} className="w-full">
          <Button className="w-full bg-historian hover:bg-historian-dark">
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default HistorianPass;