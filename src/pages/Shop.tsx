import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HistorianPass from "@/components/HistorianPass";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PenTool, BookOpenCheck, Trophy, Clock3 } from "lucide-react";

const Shop = () => {
  // Преимущества пропуска Историка
  const historianPassFeatures = [
    {
      id: "full-access",
      title: "Полный доступ к премиум-контенту",
      description: "Доступ ко всем историческим статьям, документам и анализам без ограничений"
    },
    {
      id: "exclusive-materials",
      title: "Эксклюзивные исторические материалы",
      description: "Уникальные исследования и редкие исторические документы"
    },
    {
      id: "no-ads",
      title: "Отсутствие рекламы",
      description: "Комфортное изучение истории без отвлекающих факторов"
    },
    {
      id: "early-access",
      title: "Ранний доступ к новому контенту",
      description: "Первыми узнавайте о новых открытиях и исследованиях"
    },
    {
      id: "downloads",
      title: "Скачивание материалов",
      description: "Возможность загружать исторические карты, таблицы и документы"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-card border-b">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Магазин</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Приобретите пропуск Историка и получите доступ ко всем материалам 
              нашего исторического портала без ограничений
            </p>
          </div>
        </div>
        
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="subscriptions" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="subscriptions">Подписки</TabsTrigger>
              <TabsTrigger value="benefits">Преимущества</TabsTrigger>
            </TabsList>
            
            <TabsContent value="subscriptions" className="mt-6">
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {/* Базовый план */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Базовый</span>
                      <Badge variant="outline">Бесплатно</Badge>
                    </CardTitle>
                    <CardDescription>Доступ к основным материалам</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <span>Доступ к базовым историческим материалам</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <PenTool className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <span>Стандартный поиск по истории</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Текущий план</Button>
                  </CardFooter>
                </Card>
                
                {/* Историк (годовой) */}
                <Card className="border-historian/50 relative">
                  <div className="absolute top-0 right-0 left-0 bg-historian text-white px-4 py-1 text-center text-sm font-medium">
                    Популярный выбор
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="flex items-center justify-between">
                      <span>Историк</span>
                      <Badge>Годовой</Badge>
                    </CardTitle>
                    <CardDescription>Полный доступ на 12 месяцев</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-3xl font-bold">1499 ₽</p>
                      <p className="text-sm text-muted-foreground">Экономия 25%</p>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <BookOpenCheck className="h-5 w-5 text-historian mt-0.5" />
                        <span>Полный доступ ко всем материалам</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-5 w-5 text-historian mt-0.5" />
                        <span>Эксклюзивные исторические исследования</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock3 className="h-5 w-5 text-historian mt-0.5" />
                        <span>Ранний доступ к новым материалам</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-historian hover:bg-historian-dark">
                      Оформить подписку
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Историк (месячный) */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Историк</span>
                      <Badge variant="outline">Месячный</Badge>
                    </CardTitle>
                    <CardDescription>Полный доступ на 1 месяц</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-3xl font-bold">169 ₽</p>
                      <p className="text-sm text-muted-foreground">ежемесячно</p>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <BookOpenCheck className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <span>Полный доступ ко всем материалам</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <span>Эксклюзивные исторические исследования</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Оформить подписку
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits">
              <Card>
                <CardHeader>
                  <CardTitle>Что включает пропуск Историка?</CardTitle>
                  <CardDescription>
                    Узнайте о всех преимуществах премиум-доступа к нашему историческому порталу
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {historianPassFeatures.map((feature) => (
                      <div key={feature.id} className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-historian/10 flex items-center justify-center text-historian flex-shrink-0">
                          <BookOpenCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-historian hover:bg-historian-dark">
                    Приобрести пропуск Историка
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;