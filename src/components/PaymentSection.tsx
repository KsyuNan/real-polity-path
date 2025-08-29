import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, CheckCircle } from "lucide-react";

const PaymentSection = () => {
  const handlePayment = (type: string) => {
    // This would integrate with WayForPay or LiqPay
    console.log(`Initiating ${type} payment`);
    // For now, just show a placeholder
    alert(`Оплата ${type} буде доступна після підключення платіжної системи`);
  };

  return (
    <section id="payment" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-4">
              Оплата курсу
            </h2>
            <p className="text-lg text-muted-foreground">
              Оберіть зручний для вас варіант оплати
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Payment */}
            <Card className="border border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-montserrat text-brand-navy">
                  Стандартна оплата
                </CardTitle>
                <CardDescription>
                  Місячна підписка на курс
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-navy">
                    820 <span className="text-lg font-normal text-muted-foreground">грн</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">за місяць навчання</p>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    Доступ до всіх матеріалів
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    Практичні завдання
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    Підтримка викладачів
                  </li>
                </ul>

                <Button 
                  onClick={() => handlePayment('standard')}
                  variant="outline" 
                  className="w-full"
                  size="lg"
                >
                  Оплатити курс
                </Button>
              </CardContent>
            </Card>

            {/* Military Discount */}
            <Card className="border-2 border-brand-gold hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white">
                Військова знижка
              </Badge>
              
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-gold" />
                </div>
                <CardTitle className="text-xl font-montserrat text-brand-navy">
                  Для військових та ветеранів
                </CardTitle>
                <CardDescription>
                  Спеціальна знижка 50%
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">
                    410 <span className="text-lg font-normal text-muted-foreground">грн</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    замість <span className="line-through text-red-500">820 грн</span>
                  </p>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    Доступ до всіх матеріалів
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    Практичні завдання
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    Підтримка викладачів
                  </li>
                  <li className="flex items-center text-sm">
                    <Shield className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                    Пільгова ціна
                  </li>
                </ul>

                <Button 
                  onClick={() => handlePayment('military')}
                  variant="hero" 
                  className="w-full"
                  size="lg"
                >
                  Оплатити зі знижкою
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Special Offer */}
          <div className="mt-12 bg-gradient-to-r from-brand-gold/10 to-brand-blue/10 rounded-xl p-8 border border-brand-gold/30 text-center">
            <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-4">
              Акція "2 = 1" — заплатіть за 2 місяці, отримайте 3!
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handlePayment('special-standard')}
                variant="outline" 
                size="lg"
                className="px-8"
              >
                1640 грн (3 місяці)
              </Button>
              <Button 
                onClick={() => handlePayment('special-military')}
                variant="hero" 
                size="lg"
                className="px-8"
              >
                820 грн для військових (3 місяці)
              </Button>
            </div>
          </div>

          {/* Payment Methods Note */}
          <div className="mt-8 text-center p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Способи оплати:</strong> Банківська картка, WayForPay, LiqPay
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Всі платежі захищені SSL-шифруванням
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;