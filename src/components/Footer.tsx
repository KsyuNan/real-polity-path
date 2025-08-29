const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">
              Школа Реальної Політики
            </h3>
            <p className="text-white/80 leading-relaxed">
              Навчаємо нове покоління громадських і політичних діячів перемагати 
              на виборах самостійно і ставати незалежними депутатами.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Контакти</h4>
            <div className="space-y-2 text-white/80">
              <p>Email: info@churchill-school.ua</p>
              <p>Телефон: +38 (044) 123-45-67</p>
              <p>Telegram: @churchill_school</p>
              <p>м. Київ, вул. Хрещатик, 1</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Соціальні мережі</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© 2024 Школа Реальної Політики ім. Уінстона Черчилля. Всі права захищені.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;