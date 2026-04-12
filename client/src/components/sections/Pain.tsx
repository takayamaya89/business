export default function Pain() {
  const pains = [
    "Инструменты есть — системы нет",
    "AI внедрили, но работаете руками по-прежнему",
    "Результаты точечные, нестабильные — зависят от Вас лично",
    "Команда не использует AI или использует хаотично",
    "Потратили деньги на курсы и подписки — ROI непонятен",
    "Масштабироваться хотите, но не знаете за что тянуть"
  ];

  return (
    <section className="py-20 md:py-32 bg-green-50 section-bg-animated relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 fade-in">
          Это не для тех, кто только слышал про ChatGPT.
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Это для предпринимателей, которые уже используют AI — но до сих пор делают это <span className="text-green-600 font-bold">руками, по одному инструменту, без связки между ними</span>.
        </p>

        {/* Anti-list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="card-premium hover-lift border-l-4 border-green-500 card-entrance glow-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-base text-gray-700 leading-relaxed">
                {pain}
              </p>
            </div>
          ))}
        </div>

        {/* "For whom" block */}
        <div className="bg-white border-l-4 border-green-600 p-8 md:p-12 max-w-3xl mx-auto rounded-lg fade-in-up hover-lift border-glow mb-12" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Приходи, если:</h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">—</span>
              <span>AI уже есть в арсенале, но денег от него нет</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">—</span>
              <span>Хотите убрать себя из операционки через автоматизацию</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-4">—</span>
              <span>Нужны готовые связки — не теория, а то, что уже принесло результат</span>
            </li>
          </ul>
        </div>

        {/* Quote block */}
        <div className="bg-white border-l-4 border-green-600 p-8 md:p-12 max-w-3xl mx-auto rounded-lg fade-in-up hover-lift border-glow" style={{ animationDelay: '0.5s' }}>
          <p className="text-xl md:text-2xl font-semibold text-center text-gray-900 leading-relaxed">
            Большинство курсов учат пользоваться <span className="highlight-green">инструментами</span>. Это как учить человека дрелью и болгаркой — и не объяснить, как <span className="highlight-green">построить дом</span>. Инструменты знает. Дом не появится никогда.
          </p>
        </div>
      </div>
    </section>
  );
}
