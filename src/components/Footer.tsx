import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О проекте */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-historian" />
              <span className="text-xl font-serif font-bold">МироваяИстория</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Исследуйте историю мира от Древнего Египта до современности. 
              Наша миссия — сделать исторические знания доступными и увлекательными для всех.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Исследуйте</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/eras" className="text-muted-foreground hover:text-foreground">
                  Исторические эпохи
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground">
                  Важные события
                </Link>
              </li>
              <li>
                <Link to="/figures" className="text-muted-foreground hover:text-foreground">
                  Исторические личности
                </Link>
              </li>
              <li>
                <Link to="/artifacts" className="text-muted-foreground hover:text-foreground">
                  Артефакты и находки
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground">
                  Магазин
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты и информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground">
                  Справка
                </Link>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mirovayaistoriya.ru" className="hover:text-foreground">
                  info@mirovayaistoriya.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2023 МироваяИстория. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;