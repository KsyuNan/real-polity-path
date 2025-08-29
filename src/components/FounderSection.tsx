const FounderSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-12 text-center">
            Про засновника і лектора
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 rounded-2xl p-8 shadow-lg">
                <div className="w-64 h-64 bg-muted rounded-xl mx-auto flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Фото Володимира Курінного</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-2">
                  Володимир Курінний
                </h3>
                <p className="text-brand-blue font-medium mb-4">
                  Народний депутат 5, 7 та 8 скликань
                </p>
              </div>
              
              <div className="space-y-4 text-foreground">
                <p className="text-lg leading-relaxed">
                  Досвідчений політик і політтехнолог з багаторічним досвідом роботи 
                  у Верховній Раді України.
                </p>
                
                <p className="leading-relaxed">
                  Володимир Курінний знає зсередини, як працює українська політична система, 
                  які виклики стоять перед незалежними депутатами, і що потрібно для 
                  успішного проходження виборчого процесу.
                </p>
                
                <p className="leading-relaxed">
                  Його досвід охоплює не лише законодавчу роботу, а й практичні аспекти 
                  виборчих кампаній, роботи з громадськістю та побудови політичної кар'єри 
                  без залежності від великих партійних машин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;