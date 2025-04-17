import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Социальные сети */}
          <div className="mb-8 md:mb-0">
            <div className="flex space-x-4 mb-6">
              <Link to="#" className="hover:text-white">
                <Facebook size={24} />
              </Link>
              <Link to="#" className="hover:text-white">
                <Twitter size={24} />
              </Link>
              <Link to="#" className="hover:text-white">
                <Youtube size={24} />
              </Link>
              <Link to="#" className="hover:text-white">
                <Instagram size={24} />
              </Link>
            </div>
            <p>© 2023 Все права защищены.</p>
          </div>
          
          {/* Ссылки */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Компания</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-white">О нас</Link></li>
                <li><Link to="#" className="hover:text-white">Вакансии</Link></li>
                <li><Link to="#" className="hover:text-white">Новости</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-white">Поддержка</Link></li>
                <li><Link to="#" className="hover:text-white">Правовая информация</Link></li>
                <li><Link to="#" className="hover:text-white">Условия использования</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Магазин</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-white">Распродажи</Link></li>
                <li><Link to="#" className="hover:text-white">Бесплатные игры</Link></li>
                <li><Link to="#" className="hover:text-white">Подписка</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
