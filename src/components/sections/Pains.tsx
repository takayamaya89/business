export default function Pains() {
  const pains = [
    "Сохранили десятки «топ-промптов», но используете 2–3",
    "Скачал гайды, а руки так и не дошли попробовать",
    "Открыл ChatGPT → потыкал → закрыл. Снова.",
    "Ускорился по мелочам, но в деньгах ничего не изменилось",
    "Стал делать больше задач, но легче не стало — появилось ещё больше",
    "Идей куча, ощущения контроля — ноль. Хаос стал цифровым."
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="section-label text-center mb-4">Узнайте себя</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6">
          Вы уже пробовали ИИ. Но что-то пошло не так
        </h2>

        {/* Subheading */}
        <p className="text-center text-lg text-muted max-w-2xl mx-auto mb-12">
          Если хотя бы два пункта — Ваше, значит Вы движетесь
          по самому дорогому маршруту: время тратите, результата нет.
        </p>

        {/* Pain cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="card-hover p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <div className="flex gap-4">
                <span className="text-accent text-2xl font-bold flex-shrink-0">—</span>
                <p className="text-base md:text-lg text-foreground">{pain}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-xl md:text-2xl font-bold text-center text-foreground">
            Вы не получаете результат от ИИ не потому,<br />
            что <span className="text-accent-light">плохо пишете промпты</span>.
          </p>
        </div>

        {/* Explanation text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-muted mb-6">
            Вам показывали инструменты — а Вам нужна была система внедрения.
            Это как обучить человека пользоваться дрелью, болгаркой и уровнем — и не
            объяснить, как построить дом. Инструменты знаете. Дом не появится.
          </p>
          <p className="text-base md:text-lg text-muted">
            Большинство курсов учат именно этому: сервисы, нейронки, WOW-эффекты.
            Никто не учит строить архитектуру, которая даёт измеримый результат в деньгах.
          </p>
        </div>
      </div>
    </section>
  );
}
