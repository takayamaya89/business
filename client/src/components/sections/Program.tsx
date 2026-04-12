import { useState } from "react";

export default function Program() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      number: "01",
      title: "«Оцифруй голову»",
      subtitle: "Личный бизнес-ассистент + команда из 5–7 специалистов за 60–90 минут настройки. ИИ перестаёт быть чужим и начинает работать как сотрудник — потому что Вы даёте ему контекст, правила и роль.",
      whatYouDo: [
        "Соберёте ядро контекста — что «скормить» ИИ, чтобы он говорил Вашим языком",
        "Настроите личного бизнес-ассистента: планирование, анализ, «второй мозг»",
        "Соберёте команду по ролям: не «один чатик на всё», а 5–7 узких специалистов",
        "Освоите промпт-логику, которая даёт качество топ-специалиста, а не шаблонный текст"
      ],
      whatYouGet: [
        "«Паспорт проекта» — контекст для ИИ, который работает вместо брифа",
        "Набор ролей: Маркетолог / Аналитик / Стратег / Копирайтер / Продажник / PM",
        "Чек-лист: как понимать, что ИИ делает норму, а не мусор"
      ],
      effect: "⚡ Эффект: минус рутина, плюс скорость, плюс качество решений. Это база, на которой строятся следующие два уровня.",
      caseTitle: "840 000 ₽ с первого запуска. За 3 дня вместо 12 недель.",
      caseSubtitle: "Финансовый эксперт, первый инфопродукт. Обычно это 10–12 недель работы. С системой ИИ-ассистентов — три дня.",
      caseMetrics: [
        { value: "3 дня", label: "вместо 12 недель", color: "green" },
        { value: "840 000 ₽", label: "с первого запуска", color: "purple" },
        { value: "×4", label: "быстрее конкурентов", color: "white" }
      ],
      caseStory: "День 1 — ассистент-аналитик: анализ рынка, конкуренты, карта позиционирования.\nДень 2 — ассистент-стратег: три варианта программы под разные сегменты.\nДень 3 — ассистент-копирайтер: продающий текст, цепочка писем, сценарий вебинара.\n\nНе потому что он умнее. А потому что у него была система."
    },
    {
      id: 2,
      number: "02",
      title: "«Оцифруй присутствие»",
      subtitle: "Стратегия взрывного роста + омниканальность без выгорания. Вы перестаёте быть «создателем контента» и становитесь владельцем системы, где один смысл превращается в поток из 16 единиц.",
      whatYouDo: [
        "Выберете позиционирование и угол, чтобы контент вёл к заявкам, а не к лайкам",
        "Проведёте быстрый анализ ЦА и конкурентов через ИИ — без «женщина 25–35»",
        "Соберёте «паутины контента» — матрицу тем, форматов и каналов",
        "Освоите технологию: 1 единица → 16 единиц контента",
        "Построите «тёплую комнату», куда переводить аудиторию, чтобы продажи стали возможны"
      ],
      whatYouGet: [
        "Контент-план на 14 дней под Вашу цель — готовый к запуску",
        "Шаблон матрицы омниканальности",
        "Список контент-триггеров, которые создают спрос"
      ],
      effect: "⚡ Эффект: стабильно растёт аудитория и количество входящих касаний. Без состояния «сегодня я в ресурсе» или «сегодня ничего не выложил».",
      caseTitle: "С мёртвого аккаунта к 1,5 млн просмотров за 8 дней",
      caseSubtitle: "Реальный результат клиентки. До внедрения: мёртвый аккаунт, отсутствие трафика и продаж, контент ради контента.",
      caseMetrics: [
        { value: "1,5 млн", label: "просмотров первого ролика", color: "green" },
        { value: "+7 000", label: "новых подписчиков", color: "purple" },
        { value: "$50 000", label: "заявок в работу", color: "white" }
      ],
      caseStory: "Если у Вас есть Instagram, Telegram и email — умножайте эффект на три. Это уже совсем другая жизнь бизнеса."
    },
    {
      id: 3,
      number: "03",
      title: "«Оцифруй деньги»",
      subtitle: "Нейроворонка и автоматизация CJM. Вы перестаёте надеяться, что «контент когда-нибудь продаст», и собираете путь клиента так, чтобы продажа стала логическим финалом.",
      whatYouDo: [
        "Соберёте Customer Journey Map под Ваш бизнес",
        "Настроите сегментацию аудитории — чтобы каждый получал нужное",
        "Соберёте механику прогрева: ценность → кейсы → закрытие возражений → предложение",
        "Получите примеры нейроворонок — с логикой сообщений и триггерами"
      ],
      whatYouGet: [
        "Схема нейроворонки с логикой и ветвлением",
        "Готовая карта автоматизации под Ваш проект",
        "Структура сообщений, которые закрывают возражения"
      ],
      effect: "⚡ Эффект: трафик и внимание перестают быть красивыми цифрами — и начинают превращаться в деньги круглосуточно.",
      caseTitle: "4 300 000 ₽ без запусков, вебинаров и выгорания",
      caseSubtitle: "Онлайн-школа в нише нутрициологии. Раньше: запуск каждые полгода = стресс, команда, реклама, выгорание. После внедрения нейроворонки — всё изменилось.",
      caseMetrics: [
        { value: "4 300 000 ₽", label: "выручки за 6 месяцев", color: "green" },
        { value: "Каждый день", label: "продажи без запусков", color: "purple" },
        { value: "0", label: "вебинаров и стресса", color: "white" }
      ],
      caseStory: "Воронка начала работать постоянно. Новые подписчики попадали в автоматическую прогревающую последовательность. Серия сообщений. Ценность. Кейсы. Закрытие возражений. Через 7–14 дней — предложение.\n\nПродажи происходят каждый день. Без неё."
    }
  ];

  return (
    <section id="program" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="section-label text-center mb-4">Программа</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6">
          3 урока = 3 рывка.<br />
          После каждого ИИ становится частью системы
        </h2>

        {/* Subheading */}
        <p className="text-center text-lg text-muted max-w-2xl mx-auto mb-16">
          Никакой теории про нейросети. Только механизм + шаблоны + сборка под Ваш бизнес.
          Чтобы сделать в тот же день.
        </p>

        {/* Modules */}
        <div className="space-y-8">
          {modules.map((module) => (
            <div key={module.id} className="border border-border rounded-2xl overflow-hidden bg-card">
              {/* Module header */}
              <button
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                className="w-full p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-card/80 transition-colors text-left"
              >
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-3">
                    Урок {module.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {module.title}
                  </h3>
                  <p className="text-muted text-base md:text-lg">
                    {module.subtitle}
                  </p>
                </div>
                <div className="text-2xl text-muted flex-shrink-0">
                  {expandedModule === module.id ? '−' : '+'}
                </div>
              </button>

              {/* Expanded content */}
              {expandedModule === module.id && (
                <div className="px-6 md:px-8 pb-8 border-t border-border">
                  {/* Two columns: What you do & What you get */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4">Что Вы сделаете</h4>
                      <ul className="space-y-3">
                        {module.whatYouDo.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-muted">
                            <span className="text-accent flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4">Что у Вас будет на выходе</h4>
                      <ul className="space-y-3">
                        {module.whatYouGet.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-muted">
                            <span className="text-green-500 flex-shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Effect block */}
                  <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
                    <p className="text-foreground">{module.effect}</p>
                  </div>

                  {/* Case study */}
                  <div className="border-t border-border pt-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {module.caseTitle}
                    </h4>
                    <p className="text-muted mb-6">{module.caseSubtitle}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {module.caseMetrics.map((metric, idx) => (
                        <div key={idx} className="bg-card/50 border border-border rounded-xl p-4">
                          <div className={`text-2xl font-bold mb-1 ${
                            metric.color === 'green' ? 'text-green-500' :
                            metric.color === 'purple' ? 'text-accent' :
                            'text-white'
                          }`}>
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Story */}
                    <p className="text-foreground whitespace-pre-line">
                      {module.caseStory}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
