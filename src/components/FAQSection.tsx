import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Чи це політична агітація?",
      answer: "Ні. Ми не підтримуємо жодну партію чи кандидата. Це навчання для всіх, хто хоче залишатися незалежним та ефективно представляти інтереси виборців."
    },
    {
      question: "Якщо виборів зараз немає, навіщо проходити курс?",
      answer: "Вибори відбудуться. Хто підготується заздалегідь, отримає значну перевагу. Крім того, ці навички корисні вже зараз у громадській діяльності та роботі з людьми."
    },
    {
      question: "Чи зможу використати знання, якщо не планую балотуватися найближчим часом?",
      answer: "Так, ці навички допоможуть у комунікаціях, роботі з медіа, побудові персонального бренду та роботі з громадою. Вони цінні для будь-якої лідерської позиції."
    },
    {
      question: "Чи потрібен великий бюджет, щоб застосувати знання?",
      answer: "Ні. Ми навчаємо технологіям перемоги без великих грошей. Основний фокус – на ефективних та доступних методах роботи з виборцями."
    },
    {
      question: "Чому акцент на ветеранах та оборонцях?",
      answer: "Бо ці люди довели відданість Україні й готовність брати відповідальність. Вони мають довіру суспільства. Але курс відкритий для всіх активних громадян, які прагнуть служити людям."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-12 text-center">
            Часто задавані питання
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-brand-navy hover:text-brand-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;