export default function ChaosAI() {
  const problems = [
    "Команда не понимает, где применять ИИ",
    "Промпты дают нестабильный результат",
    "Знания остаются в голове собственника",
    "Менеджеры продолжают вручную отвечать на одинаковые вопросы",
    "Заявки с Авито, маркетплейсов и мессенджеров обрабатываются медленно",
    "Контент, документы, скрипты и регламенты создаются каждый раз с нуля",
    "ИИ используется как игрушка, а не как часть бизнес-процесса"
  ];

  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative red lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            ИИ уже есть в бизнесе. Но чаще всего он внедрён <span className="text-accent">хаотично</span>
          </h2>

          {/* Intro text */}
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Многие предприниматели уже пробовали ChatGPT, Claude или другие нейросети. Кто-то генерирует тексты. Кто-то просит написать пост. Кто-то дал менеджерам "пользоваться ИИ", и теперь каждый делает что-то своё.
          </p>

          <p className="text-lg text-muted mb-12 leading-relaxed">
            Но для бизнеса этого мало.
          </p>

          {/* Problem statement */}
          <div className="mb-12 p-6 border border-accent/35 bg-background rounded-lg">
            <p className="text-lg text-foreground font-semibold mb-4">
              Проблема не в том, что нейросетей нет. Проблема в том, что нет системы:
            </p>
            
            <ul className="space-y-3">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-muted">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key message */}
          <div className="p-6 border-l-4 border-accent bg-background rounded-r-lg">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold text-accent">На мастер-классе мы будем не "изучать нейросети"</span>, а разбирать, как встроить ИИ в реальные задачи бизнеса: продажи, маркетинг, клиентские коммуникации, аналитику, документы и операционку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
