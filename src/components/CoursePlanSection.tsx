import { BookOpen, Users, Megaphone, Target, TrendingUp, Shield, Award } from "lucide-react";

const CoursePlanSection = () => {
  const modules = [
    {
      icon: Target,
      title: "Модуль 1: Стратегія перемоги",
      topics: [
        "Секрети перемоги без великого бюджету",
        "Аналіз виборчого округу",
        "Побудова виборчої стратегії"
      ]
    },
    {
      icon: TrendingUp,
      title: "Модуль 2: Фінанси кампанії",
      topics: [
        "Формування та витрачання фондів",
        "Прозорість фінансування",
        "Оптимізація витрат"
      ]
    },
    {
      icon: Users,
      title: "Модуль 3: Робота з партіями",
      topics: [
        "Домовленості з політичними силами",
        "Збереження незалежності",
        "Переговорні процеси"
      ]
    },
    {
      icon: Megaphone,
      title: "Модуль 4: Медіа та комунікації",
      topics: [
        "Робота з журналістами та блогерами",
        "Взаємодія з лідерами думок",
        "Кризові комунікації"
      ]
    },
    {
      icon: BookOpen,
      title: "Модуль 5: Спільнота прихильників",
      topics: [
        "Створення бази підтримки",
        "Утримання прихильників",
        "Волонтерські програми"
      ]
    },
    {
      icon: Shield,
      title: "Модуль 6: Робота на окрузі",
      topics: [
        "Технології роботи з виборцями",
        "Організація роботи штабу",
        "Моніторинг виборів"
      ]
    },
    {
      icon: Award,
      title: "Модуль 7: Депутатська діяльність",
      topics: [
        "Незалежність у роботі",
        "Персональний бренд",
        "Довгострокове планування кар'єри"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-12 text-center">
            План курсу
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-blue/20 transition-colors">
                    <module.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="text-sm font-medium text-brand-blue">
                    Модуль {index + 1}
                  </div>
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-brand-navy mb-4">
                  {module.title}
                </h3>
                
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePlanSection;