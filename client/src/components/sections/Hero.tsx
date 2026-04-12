export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white relative overflow-hidden">
      {/* VISIBLE Animated background circles - LARGE and OBVIOUS */}
      <div 
        className="absolute top-10 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        className="absolute -bottom-20 left-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Main Protocol Title */}
            <h2 
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight"
              style={{
                animation: 'fadeInDown 0.8s ease-out'
              }}
            >
              ПРОТОКОЛ<br />
              <span className="text-green-600">ВНЕДРЕНИЯ ИИ</span><br />
              В БИЗНЕС
            </h2>

            {/* Badge */}
            <div 
              className="inline-block mb-8 px-4 py-2 text-xs font-semibold tracking-wide text-green-700 border-2 border-green-500 bg-green-50 rounded-full"
              style={{
                animation: 'fadeInDown 0.8s ease-out 0.1s both'
              }}
            >
              REACTOR CLUB × МАЙЯ ГАЛИЦКАЯ · ОФЛАЙН-ВОРКШОП
            </div>

            {/* Main heading - NEW */}
            <div 
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                За <span className="text-green-600">7 часов</span> — рабочая <span className="text-green-600">AI-система</span>, которая приносит <span className="text-green-600">заявки и освобождает время</span>
              </h1>
            </div>

            {/* Subheading - NEW */}
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}
            >
              Без хаоса из инструментов. <span className="text-green-600 font-bold">Готовые связки, реальные кейсы, рабочие промпты</span> — собранные в систему, которая масштабируется.
            </p>

            {/* Buttons - UNIFIED CTA */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              style={{
                animation: 'fadeInUp 1s ease-out 0.6s both'
              }}
            >
              <a
                href="https://course.takayamaya.ru/business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                Занять место на 16 мая →
              </a>
            </div>

            {/* Event strip */}
            <div 
              className="grid grid-cols-2 gap-6 py-6 border-t-2 border-green-500"
              style={{
                animation: 'fadeIn 1s ease-out 0.8s both'
              }}
            >
              {[
                { label: 'Дата', value: '16 мая' },
                { label: 'Формат', value: 'Офлайн · 7 часов' },
                { label: 'Для кого', value: 'Предприниматели с командой' },
                { label: 'Результат', value: 'Рабочая система' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="text-center"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${0.1 * idx + 0.9}s both`
                  }}
                >
                  <div className="text-xs font-semibold tracking-wide text-green-600 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div 
            className="flex justify-center"
            style={{
              animation: 'slideInRight 1s ease-out 0.3s both'
            }}
          >
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663142814497/Gf8jYSBvKjeB3PqJpdkLs8/DSCF8181-2-nobg_89841280.png"
              alt="Майя Галицкая"
              className="max-w-sm md:max-w-md w-full h-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(34, 197, 94, 0.15))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
