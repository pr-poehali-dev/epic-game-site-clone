import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface Game {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  discount?: string;
  tags?: string[];
}

interface GameGridProps {
  title: string;
  games: Game[];
}

const GameGrid = ({ title, games }: GameGridProps) => {
  return (
    <section className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id}>
              <Card className="bg-gray-800 border-none hover:transform hover:scale-105 transition-transform duration-200">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={game.imageUrl || "/placeholder.svg"} 
                      alt={game.title}
                      className="w-full aspect-[3/4] object-cover rounded-t-lg"
                    />
                    {game.discount && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-sm font-bold">
                        -{game.discount}%
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    {game.tags && game.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {game.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <h3 className="text-white font-medium truncate">{game.title}</h3>
                    <p className="text-white font-bold mt-2">{game.price}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
