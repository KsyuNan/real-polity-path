import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const ContactsSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-4">
              Контакти
            </h2>
            <p className="text-lg text-muted-foreground">
              Зв'яжіться з нами для отримання додаткової інформації
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border border-border/50 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  info@churchill-school.ua
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">Телефон</h3>
                <p className="text-sm text-muted-foreground">
                  +38 (044) 123-45-67
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">Telegram</h3>
                <p className="text-sm text-muted-foreground">
                  @churchill_school
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">Адреса</h3>
                <p className="text-sm text-muted-foreground">
                  м. Київ, вул. Хрещатик, 1
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('mailto:info@churchill-school.ua', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Зв'язатися з нами
            </Button>
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-montserrat font-semibold text-xl text-brand-navy mb-6">
              Слідкуйте за нами в соціальних мережах
            </h3>
            <div className="flex justify-center space-x-6">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('#', '_blank')}
              >
                Facebook
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('#', '_blank')}
              >
                Instagram
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('#', '_blank')}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('#', '_blank')}
              >
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;