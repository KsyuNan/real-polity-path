import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Gift, Mail } from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Реєстрація успішна!",
        description: "Інформаційний подарунок надіслано на вашу пошту",
      });
      setFormData({ name: "", email: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="registration" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-4">
              Приєднайтеся до курсу
            </h2>
            <p className="text-lg text-muted-foreground">
              Зареєструйтеся зараз та отримайте безкоштовний інформаційний подарунок
            </p>
          </div>

          <Card className="border border-border/50 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-brand-gold" />
              </div>
              <CardTitle className="text-2xl font-montserrat text-brand-navy">
                Реєстрація на курс
              </CardTitle>
              <CardDescription className="text-base">
                Заповніть форму нижче, щоб розпочати навчання
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-brand-navy">
                    Повне ім'я *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Введіть ваше повне ім'я"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-brand-navy">
                    Електронна пошта *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full h-12 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Обробка..."
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Приєднатися до курсу
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Після реєстрації ви отримаєте інформаційний подарунок на пошту
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;