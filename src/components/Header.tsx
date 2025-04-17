import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, BookOpen, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Перенаправить на страницу поиска с запросом
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип и название */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-historian" />
            <span className="text-xl font-serif font-bold hidden sm:inline">МироваяИстория</span>
          </Link>

          {/* Поисковая строка - скрыта на мобильных */}
          <form 
            onSubmit={handleSearch} 
            className="hidden md:flex items-center flex-grow mx-6 max-w-xl"
          >
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Поиск исторических событий, личностей, эпох..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Навигация - видна на десктопе */}
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/eras" className="hover:text-primary">Эпохи</Link>
            <Link to="/events" className="hover:text-primary">События</Link>
            <Link to="/shop" className="hover:text-primary">Магазин</Link>
            <Link to="/account">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </nav>

          {/* Мобильные кнопки */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="outline" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Поиск в истории..."
                  className="w-full pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </form>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/eras" 
                className="px-2 py-1 hover:bg-secondary rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Эпохи
              </Link>
              <Link 
                to="/events" 
                className="px-2 py-1 hover:bg-secondary rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                События
              </Link>
              <Link 
                to="/shop" 
                className="px-2 py-1 hover:bg-secondary rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Магазин
              </Link>
              <Link 
                to="/account" 
                className="px-2 py-1 hover:bg-secondary rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Личный кабинет
              </Link>
              <Link 
                to="/cart" 
                className="px-2 py-1 hover:bg-secondary rounded flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-4 w-4" />
                Корзина
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;