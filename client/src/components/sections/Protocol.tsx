export default function Protocol() {
  const steps = [
    {
      number: "01",
      title: "Оцифруй голову",
      description: "Выгружаешь мышление в нейросеть. Личный бизнес-ассистент + команда ассистентов по ролям за 60–90 минут.",
      items: [
        "Паспорт проекта",
        "5–7 узких ассистентов: маркетолог, аналитик, стратег, копирайтер, продажник, PM",
        "Промпт-логика уровня топ-специалиста"
      ]
    },
    {
      number: "02",
      title: "Оцифруй присутствие",
      description: "Контент-машина. Один смысл → 16 единиц контента. Без выгорания и «сегодня не в ресурсе».",
      items: [
        "Анализ ЦА через ИИ без «женщина 25–35»",
        "Технология 1→16 единиц контента",
        "«Тёплая комната» — куда переводить трафик для продаж"
      ]
    },
    {
      number: "03",
      title: "Оцифруй деньги",
      description: "Нейроворонка. Продажа как логический финал пути клиента. Работает 24/7.",
      items: [
        "Customer Journey Map под Ваш бизнес",
        "Механика прогрева: касания → предложение → сделка",
        "Карта автоматизации"
      ]
    }
  ];

  return (
    <section id="protocol" className="py-20 md:py-32 bg-background section-bg-animated relative">
      {/* Animated background circles */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-card rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Intro text */}
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Никаких объяснений с нуля.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Только <span className="text-accent font-bold">готовые связки, которые уже работают</span> — в кейсах, цифрах и схемах.
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground fade-in">
          Что такое <span className="text-accent shimmer-text">протокол</span>
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start fade-in-up card-entrance"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="md:col-span-2 slide-in-left">
                <div className="text-5xl font-bold text-accent number-animate">{step.number}</div>
              </div>

              <div className="md:col-span-10 card-premium border-l-4 border-accent hover-lift glow-pulse">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-muted stagger-item">
                      <span className="text-green-500 flex-shrink-0 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
