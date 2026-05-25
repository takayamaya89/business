export default function Implementation() {
  const blocks = [
    {
      num: "1",
      title: "Первоклассные промпты для бизнес-задач",
      description: "Вы научитесь создавать промпты не уровня 'напиши мне пост', а уровня управляемой инструкции для сильного специалиста.",
      details: [
        "как ставить задачу ИИ так, чтобы он понимал контекст бизнеса;",
        "как прописывать роль, цель, ограничения и критерии качества;",
        "как получать не случайный ответ, а предсказуемый результат;",
        "как создавать промпты для продаж, маркетинга, контента, документов, аналитики и управления;",
        "как собрать библиотеку промптов под повторяющиеся задачи компании."
      ],
      benefit: "Вы перестаёте каждый раз объяснять задачу с нуля и получаете систему промптов, которая экономит время вам и команде."
    },
    {
      num: "2",
      title: "Claude, проекты и скиллсы",
      description: "Разберём, как использовать Claude как рабочую среду для бизнеса.",
      details: [
        "установим и настроим Claude;",
        "разберём, чем он полезен для предпринимателей и команд;",
        "создадим проекты;",
        "настроим скиллсы под повторяющиеся задачи;",
        "загрузим контекст, правила, документы, стиль и инструкции;",
        "разберём, как использовать Claude для подготовки КП, регламентов, текстов, аналитики, стратегий и рабочих материалов."
      ],
      benefit: "Claude становится не 'ещё одним чатом', а хранилищем контекста и рабочей средой, где можно создавать стабильные бизнес-результаты."
    },
    {
      num: "3",
      title: "ИИ-ассистенты под функции бизнеса",
      description: "Создадим ИИ-ассистентов под конкретные роли, которые могут разгрузить собственника и команду.",
      details: [
        "ассистент по маркетингу;",
        "ассистент по продажам;",
        "ассистент по контенту;",
        "ассистент по созданию коммерческих предложений;",
        "ассистент по анализу клиентов и конкурентов;",
        "ассистент для отдела поддержки;",
        "ассистент для регламентов и внутренних инструкций;",
        "ассистент для руководителя."
      ],
      benefit: "Вы начинаете создавать цифровых специалистов, которые работают по вашим правилам, знают контекст и помогают выполнять повторяющиеся задачи быстрее."
    },
    {
      num: "4",
      title: "ИИ-агенты для процессов",
      description: "Разберём, как проектировать ИИ-агентов.",
      details: [
        "разберём, что такое агент;",
        "поймём, какие процессы можно отдавать агентам;",
        "спроектируем логику агента;",
        "разберём сценарии для маркетинга, продаж, документов, аналитики и операционных задач;",
        "покажем, как агентная логика помогает автоматизировать повторяющиеся действия."
      ],
      benefit: "Вы начинаете видеть бизнес не как набор ручных задач, а как систему процессов, которые можно усиливать и частично автоматизировать.",
      note: "ИИ-ассистент помогает выполнить отдельную задачу. ИИ-агент помогает вести процесс: проходит по шагам, проверяет результат, предлагает следующий ход и может быть встроен в рабочую цепочку."
    },
    {
      num: "5",
      title: "ИИ-боты для Авито, MAX и маркетплейсов",
      description: "Разберём, как ИИ-боты могут помогать бизнесу на площадках, где уже есть клиенты и заявки.",
      details: [
        "как бот может отвечать на типовые вопросы клиентов;",
        "как бот может квалифицировать заявку;",
        "как бот может собирать данные клиента;",
        "как бот может передавать горячие заявки менеджеру;",
        "как бот может помогать с подбором товара или услуги;",
        "как бот может снижать нагрузку на менеджеров;",
        "как бот может работать не вместо отдела продаж, а как первый фильтр и усилитель;",
        "как проектировать сценарии бота под реальные вопросы клиентов."
      ],
      benefit: "Вы получаете конкретный коммерческий сценарий, который сразу начинает работать на ваши продажи и клиентские коммуникации.",
      scenarios: [
        "бот для Авито: отвечает на вопросы, уточняет потребность, собирает контакт, передаёт заявку менеджеру;",
        "бот для MAX: помогает вести коммуникацию с клиентом, выдаёт материалы, собирает заявки, напоминает о следующем шаге;",
        "бот для маркетплейса: помогает с выбором товара, объясняет отличия, отвечает на частые вопросы, снижает нагрузку на поддержку;",
        "бот для B2B-продаж: квалифицирует клиента, собирает вводные, предлагает решение, передаёт в CRM."
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Что вы начнёте <span className="text-accent">внедрять</span> на мастер-классе
          </h2>
          <p className="text-lg text-muted">
            Пять практических блоков, каждый из которых решает конкретную задачу вашего бизнеса:
          </p>
        </div>

        {/* Implementation blocks */}
        <div className="space-y-12">
          {blocks.map((block, idx) => (
            <div 
              key={idx} 
              className="border border-accent/35 bg-card rounded-lg p-8 hover:border-accent hover:border-opacity-60 transition-all duration-300"
            >
              {/* Block number and title */}
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 border border-accent/50">
                    <span className="text-2xl font-bold text-accent">{block.num}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{block.title}</h3>
                  <p className="text-lg text-muted">{block.description}</p>
                </div>
              </div>

              {/* Details list */}
              <div className="mb-6 ml-18 pl-6 border-l border-accent/35">
                <p className="text-sm font-semibold text-accent mb-3">На практике:</p>
                <ul className="space-y-2">
                  {block.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted text-sm">
                      <span className="text-accent mt-1">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefit box */}
              <div className="bg-background rounded p-4 border border-accent/20 mb-6">
                <p className="text-sm font-semibold text-accent mb-2">Предпринимательская выгода:</p>
                <p className="text-foreground text-sm">{block.benefit}</p>
              </div>

              {/* Additional note if exists */}
              {block.note && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/35 rounded">
                  <p className="text-sm text-foreground italic">{block.note}</p>
                </div>
              )}

              {/* Scenarios if exists */}
              {block.scenarios && (
                <div className="ml-18 pl-6 border-l border-accent/35">
                  <p className="text-sm font-semibold text-accent mb-3">Примеры сценариев:</p>
                  <ul className="space-y-2">
                    {block.scenarios.map((scenario, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
