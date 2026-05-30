export default function Venue() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        style={{
          animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        style={{
          animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite 2.5s'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex-1 h-px bg-border" />
            <div className="section-label">Место проведения</div>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Main venue card with premium styling */}
          <div 
            className="relative overflow-hidden rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-card via-background to-card/50 p-12 md:p-16"
            style={{
              boxShadow: '0 0 60px rgba(226, 27, 45, 0.15), inset 0 0 60px rgba(226, 27, 45, 0.05)',
              animation: 'fadeInUp 1s ease-out'
            }}
          >
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent text-lg">✨</span>
              <span className="text-sm font-semibold text-accent">Высокий уровень комфорта</span>
            </div>

            {/* Hotel name with emphasis */}
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-4"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.1s both'
              }}
            >
              Отель <span className="text-accent">«Кортьярд»</span>
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg text-muted mb-12 font-medium"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.2s both'
              }}
            >
              Премиальная площадка для профессионального развития
            </p>

            {/* Address block with grid layout */}
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.3s both'
              }}
            >
              {/* Address */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-accent mt-1">📍</div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-3">Адрес</h3>
                    <div className="space-y-2 text-foreground">
                      <p className="font-semibold text-lg">г. Ростов-на-Дону</p>
                      <p className="font-semibold text-lg">Отель «Кортьярд»</p>
                      <p className="text-base">Ул. Левобережная, 2К</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comfort features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-accent mt-1">⭐</div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-3">Удобства</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Современное оборудование</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Кофе-брейк и обед</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">→</span>
                        <span>Парковка для участников</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Comfort highlights */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.4s both'
              }}
            >
              {[
                { icon: '🏨', title: 'Премиальный зал', desc: 'Просторное помещение с климат-контролем' },
                { icon: '💺', title: 'Эргономичные места', desc: 'Удобные кресла для 8-часовой работы' },
                { icon: '🍽️', title: 'Полный сервис', desc: 'Кофе, чай, закуски и обед включены' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-lg bg-card/50 border border-accent/10 hover:border-accent/30 transition-all"
                  style={{
                    animation: `bounceIn 0.8s ease-out ${0.15 * idx + 0.5}s both`
                  }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div 
            className="text-center mt-12"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.5s both'
            }}
          >
            <p className="text-muted mb-6">
              Идеальное место для интенсивного обучения и практической работы
            </p>
            <a
              href="https://course.takayamaya.ru/business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-white font-bold rounded hover:bg-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Зарегистрироваться и занять место →
            </a>
          </div>
        </div>
      </div>

      <style>{`
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
            opacity: 0.4;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}
