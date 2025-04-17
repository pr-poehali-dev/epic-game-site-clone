import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TimelineEra from "@/components/TimelineEra";
import HistorianPass from "@/components/HistorianPass";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // В настоящем приложении это, скорее всего, будет определяться через авторизацию
  const hasHistorianAccess = false;
  
  // Примеры исторических эпох и событий
  const eras = [
    {
      id: "ancient-egypt",
      title: "Древний Египет",
      period: "3100 до н.э. - 332 до н.э.",
      description: "Древнеегипетская цивилизация возникла в долине Нила и оставила невероятное наследие, включая пирамиды, иероглифы и сложную религиозную систему.",
      type: "ancient" as const,
      events: [
        {
          id: "pyramids-construction",
          title: "Строительство пирамид в Гизе",
          year: "2550 до н.э.",
          description: "Великие пирамиды в Гизе были построены как гробницы для фараонов. Пирамида Хеопса — единственное из семи чудес древнего мира, сохранившееся до наших дней.",
          imageSrc: "/placeholder.svg",
          tags: ["Архитектура", "Фараоны", "Религия"]
        },
        {
          id: "tutankhamun",
          title: "Правление Тутанхамона",
          year: "1332-1323 до н.э.",
          description: "Тутанхамон взошел на трон в возрасте 9 лет и правил до своей ранней смерти. Его гробница, обнаруженная в 1922 году, содержала тысячи артефактов и сокровищ.",
          isPremium: true,
          tags: ["Фараоны", "Политика"]
        }
      ]
    },
    {
      id: "medieval-europe",
      title: "Средневековая Европа",
      period: "476 - 1453",
      description: "Период европейской истории между падением Западной Римской империи и началом Ренессанса, характеризующийся феодализмом, рыцарством и влиянием церкви.",
      type: "medieval" as const,
      events: [
        {
          id: "charlemagne",
          title: "Коронация Карла Великого",
          year: "800",
          description: "Папа Лев III короновал Карла Великого императором, что ознаменовало создание Священной Римской империи и пробудило идею единой христианской Европы.",
          imageSrc: "/placeholder.svg",
          tags: ["Политика", "Религия"]
        },
        {
          id: "crusades",
          title: "Первый крестовый поход",
          year: "1096-1099",
          description: "Военная экспедиция, инициированная папой Урбаном II, с целью возвращения христианского контроля над Святой землей и освобождения Иерусалима от мусульман.",
          isPremium: true,
          tags: ["Войны", "Религия"]
        }
      ]
    },
    {
      id: "renaissance",
      title: "Эпоха Возрождения",
      period: "14-17 века",
      description: "Период интеллектуального и художественного расцвета в Европе, характеризующийся интересом к античной культуре, гуманизму и научному прогрессу.",
      type: "renaissance" as const,
      events: [
        {
          id: "davinci",
          title: "Творчество Леонардо да Винчи",
          year: "1452-1519",
          description: "Итальянский художник, ученый и изобретатель, один из величайших представителей Высокого Возрождения. Автор «Моны Лизы», «Тайной вечери» и многочисленных изобретений.",
          imageSrc: "/placeholder.svg",
          tags: ["Искусство", "Наука", "Изобретения"]
        }
      ]
    }
  ];
  
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="История мира"
          subtitle="От Древнего Египта до 21 века"
          description="Погрузитесь в увлекательное путешествие через тысячелетия человеческой истории. Исследуйте важнейшие события, великих личностей и удивительные культуры, которые сформировали наш мир."
          imageUrl="/placeholder.svg"
          ctaLink="/eras"
          ctaText="Начать путешествие"
        />
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-serif text-center mb-8">Исторические эпохи</h2>
          
          <div className="space-y-8">
            {eras.map((era) => (
              <TimelineEra
                key={era.id}
                id={era.id}
                title={era.title}
                period={era.period}
                description={era.description}
                type={era.type}
                events={era.events}
                hasHistorianAccess={hasHistorianAccess}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/eras">
              <Button size="lg">
                Исследовать все эпохи
              </Button>
            </Link>
          </div>
        </section>
        
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-2">Пропуск Историка</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Получите полный доступ ко всем историческим материалам и исследованиям на нашем портале
            </p>
            
            <div className="max-w-md mx-auto">
              <HistorianPass
                price="1499"
                discount="20"
                features={historianPassFeatures}
                ctaLink="/shop"
                ctaText="Приобрести пропуск"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;