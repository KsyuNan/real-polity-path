import { CheckCircle } from "lucide-react";

const CourseContentSection = () => {
  const topics = [
    "В чому секрет перемоги без значного бюджету",
    "Як формуються і витрачаються фонди",
    "Як домовлятися з партіями і не бути їм винним",
    "Як працювати з медіа, блогерами та лідерами думок",
    "Як створити і зберегти спільноту прихильників",
    "Технології роботи на окрузі",
    "Як стати незалежним депутатом",
    "Як будувати персональний бренд і репутацію",
    "Як працювати з виборцями, щоб не втратити себе",
    "та інше, чого не пишуть у книжках"
  ];

  return (
    <section id="course" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-12 text-center">
            Що ви дізнаєтесь на курсі
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{topic}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground italic">
              Реальні знання від практика з багаторічним досвідом
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;