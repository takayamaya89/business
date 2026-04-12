export default function Assets() {
  const assets = [
    {
      title: "Личный бизнес-ассистент",
      description: "Настройка + что загружить + как ставить задачи. Работает как Ваш лучший сотрудник."
    },
    {
      title: "Команда ассистентов по ролям",
      description: "Маркетинг / Аналитика / Стратегия / Копирайт / Продажи / PM — 5–7 узких специалистов."
    },
    {
      title: "Паспорт проекта",
      description: "Контекст, чтобы ИИ работал «как Вы» + чек-лист качества выходных материалов."
    },
    {
      title: "Контент-план на 14 дней",
      description: "Готовый к запуску. Под Вашу цель и аудиторию — не шаблон, а рабочий документ."
    },
    {
      title: "Матрица омниканальности",
      description: "Технология «1 единица → 16 единиц контента» для всех платформ разом."
    },
    {
      title: "Схема нейроворонки",
      description: "Рост подписчиков → тёплая комната → заявка. С логикой сообщений и картой автоматизации."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white section-bg-animated relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 fade-in">
          <span className="text-green-600 shimmer-text">Активы</span>, не слайды
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 fade-in-up">
          Не записи, не «вдохновение», не «знания». <span className="highlight-green">Готовые рабочие файлы и шаблоны</span>, которые можно применить в тот же вечер.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset, index) => (
            <div 
              key={index} 
              className="card-premium hover-lift border-t-4 border-green-500 card-entrance glow-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {asset.title}
              </h3>
              <p className="text-gray-600">
                {asset.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
