import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu, X, Globe, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-black text-white">
      {/* Верхняя навигация */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Мобильное меню */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Логотип */}
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <img src="/logo-b.svg" alt="Логотип" className="h-10" />
          </Link>
          
          {/* Основное меню (только для десктопа) */}
          <nav className="hidden lg:flex space-x-6">
            <Link to="/store" className="hover:text-gray-300 font-medium">МАГАЗИН</Link>
            <Link to="/faq" className="hover:text-gray-300 font-medium">FAQ</Link>
            <Link to="/help" className="hover:text-gray-300 font-medium">ПОДДЕРЖКА</Link>
          </nav>
        </div>

        {/* Правая часть меню */}
        <div className="flex items-center space-x-4">
          {/* Строка поиска (переключаемая на мобильных) */}
          {isSearchOpen ? (
            <div className="absolute left-0 top-0 w-full bg-black p-4 lg:relative lg:w-auto lg:bg-transparent lg:p-0">
              <div className="flex items-center">
                <Input 
                  placeholder="Поиск в магазине" 
                  className="bg-gray-800 border-none text-white" 
                  autoFocus 
                />
                <Button variant="ghost" size="icon" onClick={toggleSearch} className="text-white ml-2 lg:hidden">
                  <X size={20} />
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="text-white">
              <Search size={20} />
            </Button>
          )}
          
          {/* Иконки */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <Globe size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <User size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <ShoppingCart size={20} />
            </Button>
          </div>
          
          {/* Кнопка загрузки (только для десктопа) */}
          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700">
            Загрузить
          </Button>
        </div>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/store" className="hover:text-gray-300 py-2 font-medium">МАГАЗИН</Link>
              <Link to="/faq" className="hover:text-gray-300 py-2 font-medium">FAQ</Link>
              <Link to="/help" className="hover:text-gray-300 py-2 font-medium">ПОДДЕРЖКА</Link>
              <div className="pt-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Загрузить
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
