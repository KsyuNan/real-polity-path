import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock } from "lucide-react";

const PricingSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-12 text-center">
            Вартість і знижки
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Regular Price */}
            <div className="bg-card rounded-xl p-8 border border-border/50 relative">
              <div className="text-center mb-6">
                <h3 className="font-montserrat font-semibold text-xl text-brand-navy mb-2">
                  Стандартна ціна
                </h3>
                <div className="text-3xl font-bold text-brand-navy">
                  820 <span className="text-lg font-normal text-muted-foreground">грн/міс</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                  Повний доступ до всіх модулів
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                  Інтерактивні завдання
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                  Сертифікат про закінчення
                </li>
              </ul>
              
              <Button 
                onClick={() => scrollToSection('payment')}
                className="w-full" 
                variant="outline"
              >
                Обрати план
              </Button>
            </div>

            {/* Discounted Price */}
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-gold/5 rounded-xl p-8 border-2 border-brand-gold relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white">
                Знижка 50%
              </Badge>
              
              <div className="text-center mb-6">
                <h3 className="font-montserrat font-semibold text-xl text-brand-navy mb-2">
                  Для військових та ветеранів
                </h3>
                <div className="text-3xl font-bold text-brand-blue">
                  410 <span className="text-lg font-normal text-muted-foreground">грн/міс</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Замість <span className="line-through">820 грн</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                  Повний доступ до всіх модулів
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                  Інтерактивні завдання
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                  Сертифікат про закінчення
                </li>
                <li className="flex items-center text-sm">
                  <Shield className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                  Спеціальна знижка для захисників
                </li>
              </ul>
              
              <Button 
                onClick={() => scrollToSection('payment')}
                className="w-full" 
                variant="hero"
              >
                Отримати знижку
              </Button>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-brand-gold/10 to-brand-blue/10 rounded-xl p-8 border border-brand-gold/30 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-brand-gold mr-2" />
              <Badge variant="secondary" className="bg-brand-gold text-white">
                Обмежена пропозиція
              </Badge>
            </div>
            
            <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-4">
              Акція "2 = 1"
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Заплатіть за два місяці навчання і отримайте третій безкоштовно. 
              Ідеально для тих, хто хоче пройти повний курс з максимальною економією.
            </p>
            
            <Button 
              onClick={() => scrollToSection('payment')}
              variant="hero" 
              size="lg"
              className="px-12"
            >
              Встигнути за акцією — 2=1
            </Button>
          </div>

          {/* Start Date Note */}
          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">
              <strong>Дата початку курсу:</strong> Можливість зміни дати початку курсу за домовленістю
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;