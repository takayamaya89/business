import { useState } from "react";

export default function Objections() {
  const [expandedObjection, setExpandedObjection] = useState<number | null>(null);

  const objections = [
    {
      question: "«Я не технарь — мне это не зайдёт»",
      answer: "Технарей здесь нет. Здесь — предприниматели, эксперты, специалисты. Всё, что нужно: понимать свой бизнес. ИИ — это не программирование, это мышление. А мыслить Вы умеете."
    },
    {
      question: "«Я уже проходил курсы по ChatGPT — не помогло»",
      answer: "Именно поэтому Вы здесь. Это не курс по ChatGPT. Это система внедрения в процессы. Разница — как между «знать, что такое Excel» и «построить финансовую модель»."
    },
    {
      question: "«У меня нет времени на внедрение»",
      answer: "Именно потому что нет времени — Вам нужна эта система. Вы продолжаете работать руками то, что ИИ сделает за 3 минуты. Один день инвестиций → месяцы высвобожденного времени."
    },
    {
      question: "«Сначала посмотрю — потом куплю»",
      answer: "Именно это делает большинство уже год. «Посмотрю, подожду, изучу». Пока конкуренты строят системы, Вы изучаете теорию. Разрыв растёт каждый месяц."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="section-label text-center mb-4">Ответы на вопросы</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12">
          Уже слышу возражения
        </h2>

        {/* Objections list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {objections.map((objection, index) => (
            <button
              key={index}
              onClick={() => setExpandedObjection(expandedObjection === index ? null : index)}
              className="w-full card-hover p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-left transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {objection.question}
                  </h3>
                  {expandedObjection === index && (
                    <p className="text-muted text-base mt-4">
                      {objection.answer}
                    </p>
                  )}
                </div>
                <div className="text-2xl text-muted flex-shrink-0">
                  {expandedObjection === index ? '−' : '+'}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
