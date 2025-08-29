import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: "Практика замість теорії"
    },
    {
      icon: Target,
      text: "Як перемагати без великих бюджетів"
    },
    {
      icon: Users,
      text: "Незалежність від партій"
    },
    {
      icon: TrendingUp,
      text: "Інструменти, які реально працюють"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-gold/10"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-brand-navy mb-6 leading-tight">
            Школа Реальної Політики<br />
            <span className="text-brand-blue">ім. Уінстона Черчилля</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            «Наша місія – навчити нове покоління громадських і політичних діячів 
            перемагати на виборах самостійно і ставати незалежними депутатами».
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <benefit.icon className="w-8 h-8 text-brand-blue mb-3" />
                <p className="text-sm font-medium text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('registration')}
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              Зареєструватися зараз
            </Button>
            <Button 
              onClick={() => scrollToSection('registration')}
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              Отримати інформаційний подарунок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;