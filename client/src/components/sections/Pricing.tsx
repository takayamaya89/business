export default function Pricing() {
  const scrollToRegister = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-green-50 relative overflow-hidden">
      {/* VISIBLE Animated background circles - LARGE and OBVIOUS */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          style={{
            animation: 'fadeInDown 0.8s ease-out'
          }}
        >
          <span className="text-green-600">Инвестиция</span> в систему
        </h2>

        <div 
          className="max-w-2xl mx-auto p-8 md:p-12 bg-white border-2 border-green-500 rounded-lg shadow-lg"
          style={{
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)',
            animation: 'bounceIn 0.8s ease-out 0.2s both'
          }}
        >
          <div className="text-center mb-8">
            <div className="text-6xl md:text-7xl font-bold text-green-600 mb-4">
              20 000 ₽
            </div>
            <div className="text-sm text-gray-600 font-semibold mb-6">
              один раз.
            </div>
            
            {/* Price anchors */}
            <div className="space-y-3 text-gray-700 mb-8 pb-8 border-b-2 border-green-200">
              <p className="text-base">
                <span className="font-bold">Один новый клиент</span> в большинстве бизнесов окупает билет полностью.
              </p>
              <p className="text-base">
                <span className="font-bold">Нейроворонка</span>, которую соберёте за день — работает 24/7 без Вас.
              </p>
              <p className="text-base">
                <span className="font-bold">Сравните:</span> хороший маркетолог стоит 80–150К в месяц. Здесь за 8 часов Вы получаете систему, которая делает его работа — навсегда.
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-8 py-8 border-y-2 border-green-200">
            {[
              "3 блока протокола",
              "Обучающие материалы",
              "Стратегическая сессия",
              "Карта внедрения",
              "Шаблоны и активы",
              "Лучшая библиотека промптов"
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.08 * idx + 0.3}s both`
                }}
              >
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>



          <a
            href="https://course.takayamaya.ru/business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-4 px-6 bg-green-600 text-white font-bold text-lg rounded hover:bg-green-700 transition-all"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
              animation: 'bounceIn 0.8s ease-out 1s both'
            }}
          >
            Занять место на 16 мая →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
