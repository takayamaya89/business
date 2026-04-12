export default function Speakers() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="section-label text-center mb-4">Спикеры</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16">
          Кто проводит воркшоп
        </h2>

        {/* Speakers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Speaker 1 - Майя Галицкая */}
          <div className="card-hover p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-4xl font-bold mb-6">
              М
            </div>

            {/* Name and role */}
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Майя Галицкая
            </h3>
            <p className="text-accent-light font-semibold mb-4">
              Маркетолог · AI-стратег · Основатель PROMPTHUB
            </p>

            {/* Bio */}
            <p className="text-muted mb-6 leading-relaxed">
              15 лет в маркетинге. Специалист по внедрению ИИ в бизнес-процессы,
              построению нейроворонок и автоматизированных систем продаж.
              Создаёт «суперспециалистов новой эры» — тех, кто мыслит
              не инструментами, а архитектурой.
              Каждую связку из этого протокола протестировала на себе и на клиентах,
              Прежде чем показать Вам.
            </p>

            {/* Stats */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">15 лет</span>
                <span className="text-foreground font-semibold">в маркетинге</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Нейромастер 5.0</span>
                <span className="text-foreground font-semibold">авторский курс</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">PROMPTHUB</span>
                <span className="text-foreground font-semibold">клуб практиков ИИ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">B2B / B2C</span>
                <span className="text-foreground font-semibold">опыт внедрений</span>
              </div>
            </div>
          </div>

          {/* Speaker 2 - Reactor Club */}
          <div className="card-hover p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-light to-purple-400 flex items-center justify-center text-white text-4xl font-bold mb-6">
              R
            </div>

            {/* Name and role */}
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Reactor Club
            </h3>
            <p className="text-accent-light font-semibold mb-4">
              Бизнес-клуб для предпринимателей нового времени
            </p>

            {/* Bio */}
            <p className="text-muted mb-6 leading-relaxed">
              Reactor Club — это сообщество предпринимателей, которые не ждут,
              пока рынок изменится. Они меняют рынок сами.
              Организуем практические мероприятия, которые дают не теорию,
              а конкретные инструменты роста.
            </p>

            {/* Stats */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Сообщество</span>
                <span className="text-foreground font-semibold">предпринимателей</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Практические</span>
                <span className="text-foreground font-semibold">мероприятия</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Инструменты</span>
                <span className="text-foreground font-semibold">роста</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Новое время</span>
                <span className="text-foreground font-semibold">предпринимательства</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
