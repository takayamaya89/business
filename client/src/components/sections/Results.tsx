export default function Results() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* VISIBLE Animated background circles - LARGE and OBVIOUS */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
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
          <span className="text-green-600">Реальные кейсы</span> предпринимателей
        </h2>

        {/* Main case study */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Metrics */}
            <div className="space-y-6">
              {[
                { amount: '5 000 000 ₽', label: 'за первый месяц', desc: 'Клиентов привлечено через нейроворонку из соцсетей' },
                { amount: '1 месяц', label: 'от запуска до результата', desc: 'Система сработала с первого дня' },
                { amount: '100% ROI', label: 'на рекламный бюджет', desc: 'Каждый рубль в рекламу дал рубль в выручку' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="border-l-4 border-green-600 pl-6 py-4 bg-white rounded shadow-sm hover:shadow-md transition-all"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.2)',
                    animation: `bounceIn 0.8s ease-out ${0.2 * idx}s both`
                  }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
                    {item.amount}
                  </div>
                  <div className="text-sm text-gray-500 font-semibold mb-2">{item.label}</div>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Description */}
            <div 
              style={{
                animation: 'slideInRight 0.8s ease-out'
              }}
            >
              <div className="bg-white border-t-4 border-green-600 p-8 rounded-lg shadow-lg" style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Кейс: Банкротство физических лиц
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-900">Проблема:</span> Юрист с хорошей репутацией, но клиентов не хватало. Реклама не работала, контент был скучный.
                  </p>

                  <p>
                    <span className="font-semibold text-gray-900">Решение:</span> Построили <span className="text-green-600 font-bold">нейроворонку</span> для привлечения клиентов через соцсети.
                  </p>

                  <ul className="space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold flex-shrink-0">→</span>
                      <span>Находит людей с проблемой банкротства</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold flex-shrink-0">→</span>
                      <span>Прогревает их контентом 7–14 дней</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold flex-shrink-0">→</span>
                      <span>Предлагает консультацию в нужный момент</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold flex-shrink-0">→</span>
                      <span>Закрывает сделку автоматически</span>
                    </li>
                  </ul>

                  <p className="pt-4 border-t border-gray-200">
                    <span className="font-semibold text-green-600">Результат:</span> За месяц получил клиентов на <span className="text-green-600 font-bold">5 млн рублей</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Key takeaway */}
        <div 
          className="bg-green-50 border-l-4 border-green-600 p-8 md:p-12 max-w-3xl mx-auto rounded-lg"
          style={{
            boxShadow: 'inset 0 0 20px rgba(34, 197, 94, 0.1)',
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}
        >
          <p className="text-lg md:text-xl font-semibold text-center text-gray-900 leading-relaxed">
            Это не инфопродукты. Это <span className="text-green-600 font-bold">реальные бизнесы</span> — юристы, магазины, консультанты. Люди, которые <span className="text-green-600 font-bold">зарабатывают деньги</span>.
          </p>
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
