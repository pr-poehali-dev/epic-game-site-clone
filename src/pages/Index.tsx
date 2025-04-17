import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";

const Index = () => {
  // Демо-данные для игр
  const featuredGames = [
    {
      id: "1",
      title: "Cyberpunk 2077",
      price: "1999 ₽",
      imageUrl: "/placeholder.svg",
      discount: "30",
      tags: ["Ролевая игра", "Открытый мир"]
    },
    {
      id: "2",
      title: "The Witcher 3",
      price: "1499 ₽",
      imageUrl: "/placeholder.svg",
      tags: ["Ролевая игра", "Фэнтези"]
    },
    {
      id: "3",
      title: "Assassin's Creed Valhalla",
      price: "2499 ₽",
      imageUrl: "/placeholder.svg",
      discount: "15",
      tags: ["Экшен", "Приключения"]
    },
    {
      id: "4",
      title: "Red Dead Redemption 2",
      price: "1999 ₽",
      imageUrl: "/placeholder.svg",
      tags: ["Открытый мир", "Вестерн"]
    },
    {
      id: "5",
      title: "Call of Duty: Modern Warfare",
      price: "2999 ₽",
      imageUrl: "/placeholder.svg",
      discount: "20",
      tags: ["Шутер", "Экшен"]
    },
    {
      id: "6",
      title: "FIFA 23",
      price: "2499 ₽",
      imageUrl: "/placeholder.svg",
      tags: ["Спорт", "Симулятор"]
    }
  ];

  const newReleases = [
    {
      id: "7",
      title: "Elden Ring",
      price: "3999 ₽",
      imageUrl: "/placeholder.svg",
      tags: ["Ролевая игра", "Экшен"]
    },
    {
      id: "8",
      title: "Horizon Forbidden West",
      price: "3499 ₽",
      imageUrl: "/placeholder.svg",
      discount: "10",
      tags: ["Приключения", "Открытый мир"]
    },
    {
      id: "9",
      title: "God of War Ragnarok",
      price: "3999 ₽",
      imageUrl: "/placeholder.svg",
      tags: ["Экшен", "Приключения"]
    },
    {
      id: "10",
      title: "Dying Light 2",
      price: "2999 ₽",
      imageUrl: "/placeholder.svg",
      discount: "25",
      tags: ["Выживание", "Зомби"]
    },
    {
      id: "11",
      title: "Starfield",
      price: "4499 ₽",
      imageUrl: "/placeholder.svg",
      tags: ["Космос", "Ролевая игра"]
    },
    {
      id: "12",
      title: "Gotham Knights",
      price: "2999 ₽",
      imageUrl: "/placeholder.svg",
      discount: "15",
      tags: ["Экшен", "Супергерои"]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Cyberpunk 2077"
          description="Станьте городской легендой в мире будущего, одержимом властью, гламуром и модификациями тела."
          imageUrl="/placeholder.svg"
        />
        
        <GameGrid title="Популярные игры" games={featuredGames} />
        <GameGrid title="Новые релизы" games={newReleases} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
