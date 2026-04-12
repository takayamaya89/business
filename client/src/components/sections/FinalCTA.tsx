export default function FinalCTA() {
  const scrollToRegister = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-green-50 section-bg-animated relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Self-identification section */}
        <div className="max-w-3xl mx-auto mb-16 fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Если это про Вас:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Уже используете AI, но денег от него нет",
              "Хотите убрать себя из операционки",
              "Нужны готовые связки, не теория",
              "Готов внедрить систему в команду"
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-green-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * idx}s both`
                }}
              >
                <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 leading-tight fade-in">
          Это <span className="text-green-600 shimmer-text">Ваш день</span>.
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="font-bold text-green-600">16 мая</span> собираем систему, которая приносит заявки и освобождает время.
        </p>



        <div className="text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://course.takayamaya.ru/business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold text-lg rounded hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
            }}
          >
            Занять место на 16 мая →
          </a>
        </div>
      </div>
    </section>
  );
}
