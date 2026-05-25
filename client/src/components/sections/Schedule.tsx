export default function Schedule() {
  const schedule = [
    { time: "10:00 – 12:30", name: "Модуль 1", detail: "Оцифруй голову", isBreak: false },
    { time: "12:30 – 13:00", name: "☕ Кофе-брейк", detail: "Перерыв", isBreak: true },
    { time: "13:00 – 15:30", name: "Модуль 2", detail: "Оцифруй присутствие", isBreak: false },
    { time: "15:30 – 16:00", name: "🍽 Обед", detail: "Перерыв", isBreak: true },
    { time: "16:00 – 18:00", name: "Модуль 3", detail: "Оцифруй деньги", isBreak: false },
    { time: "18:00 – 18:30", name: "🔥 Q&A + карта", detail: "Разбор под Ваш бизнес", isBreak: false }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Separator with label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border" />
          <div className="section-label">Расписание дня</div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${
                item.isBreak
                  ? 'bg-card/30 border-border'
                  : 'bg-purple-500/10 border-accent/30'
              }`}
            >
              <div className="text-xs font-bold uppercase text-muted mb-2">
                {item.time}
              </div>
              <div className="text-lg font-bold text-foreground mb-1">
                {item.name}
              </div>
              <div className="text-sm text-muted">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
