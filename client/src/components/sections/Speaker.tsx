export default function Speaker() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* VISIBLE Animated background circles */}
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
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
          style={{
            animation: 'fadeInDown 0.8s ease-out'
          }}
        >
          <span className="text-accent">Спикер</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div 
            className="flex justify-center"
            style={{
              animation: 'slideInLeft 1s ease-out 0.2s both'
            }}
          >
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663142814497/Gf8jYSBvKjeB3PqJpdkLs8/DSCF8094-nobg_c1a04151.png" 
              alt="Майя Галицкая" 
              className="max-w-sm md:max-w-md w-full h-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(34, 197, 94, 0.15))'
              }}
            />
          </div>

          {/* Info */}
          <div>
            <h3 
              className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              style={{
                animation: 'fadeInUp 0.8s ease-out'
              }}
            >
              Майя Галицкая
            </h3>
            <p 
              className="text-lg font-semibold text-accent mb-6"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.1s both'
              }}
            >
              Эксперт внедрению ИИ в бизнес
            </p>

            {/* Bio highlights */}
            <div className="space-y-3 mb-8">
              {[
                { text: 'Увеличиваю прибыль бизнесам', desc: 'за счет внедрения ИИ инструментов' },
                { text: 'Преподаватель', desc: 'ДГТУ, РАНХиГС и ЮФУ' },
                { text: 'Спикер государственных форумов', desc: '(МинЭК)' },
                { text: 'Тренер', desc: 'MBA' },
                { text: 'Руководитель', desc: 'AI-агентства' },
                { text: 'Создатель обучающих программ', desc: 'по ИИ и нейросетям' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex gap-3"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.08 * idx + 0.2}s both`
                  }}
                >
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span className="text-gray-700"><span className="font-bold text-accent">{item.text}</span> {item.desc}</span>
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div 
              className="grid grid-cols-2 gap-4"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.6s both'
              }}
            >
              {[
                { value: '500+', label: 'компаний обучено' },
                { value: '70M ₽+', label: 'выручки клиентов' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 border-2 border-green-200 bg-card rounded hover:shadow-lg transition-all"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.1)',
                    animation: `bounceIn 0.8s ease-out ${0.1 * idx + 0.7}s both`
                  }}
                >
                  <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
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
