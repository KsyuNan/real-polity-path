const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-8">
            Про школу
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Школа Реальної Політики ім. Уінстона Черчилля створена для того, щоб навчити 
              нове покоління громадських і політичних діячів – ветеранів, оборонців, волонтерів 
              та інших активних громадян – перемагати на виборах самостійно і ставати 
              незалежними депутатами.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Ми не займаємося політичною агітацією і не підтримуємо жодну конкретну партію чи кандидата. 
              Наша мета – дати вам знання й інструменти для незалежної політичної роботи, 
              щоб ви могли представляти інтереси своїх виборців, а не політичних боссів.
            </p>
            
            <p className="text-lg leading-relaxed">
              Ми вчимо реальним технологіям, які працюють у сучасних українських реаліях, 
              і показуємо, як досягти успіху навіть без значних фінансових ресурсів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;