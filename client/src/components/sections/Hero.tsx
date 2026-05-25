export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background relative overflow-hidden">
      {/* Red premium animated background */}
      <div 
        className="absolute top-10 right-10 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        className="absolute -bottom-20 left-10 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
              className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight"
              style={{
                animation: 'fadeInDown 0.8s ease-out'
              }}
            >
              ПРОТОКОЛ<br />
              <span className="text-accent">ВНЕДРЕНИЯ ИИ</span><br />
              В БИЗНЕС
            </h2>

            {/* Badge */}
            <div 
              className="inline-block mb-8 px-4 py-2 text-xs font-semibold tracking-wide text-accent border border-accent/50 bg-card rounded-full"
              style={{
                animation: 'fadeInDown 0.8s ease-out 0.1s both'
              }}
            >
              REACTOR CLUB × МАЙЯ ГАЛИЦКАЯ · ОНЛАЙН
            </div>

            {/* Main heading - NEW POSITIONING */}
            <div 
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Практический мастер-класс для предпринимателей и руководителей: создаём промпты, ИИ-ассистентов, агентов и ботов, которые помогают автоматизировать рабочие процессы, продажи, клиентские коммуникации и работу команды.
              </h1>
            </div>

            {/* Subheading - NEW */}
            <p 
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}
            >
              Вы уйдёте не с конспектом, а с понятной системой: какие процессы автоматизировать, каких ассистентов создать, как использовать Claude, как проектировать ИИ-агентов и как применять ИИ-ботов для Авито, MAX и маркетплейсов.
            </p>

            {/* CTA Button */}
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
                className="inline-block px-8 py-4 bg-accent text-white font-bold rounded hover:bg-red-600 transition-all shadow-lg hover:shadow-xl"
              >
                Зарегистрироваться на мастер-класс →
              </a>
            </div>

            {/* Subtext under button */}
            <p className="text-sm text-muted mb-8 italic">
              Лучше приходить с ноутбуком и реальными задачами вашего бизнеса. Будем не вдохновляться, а собирать. Редкое явление, почти как честный дедлайн.
            </p>

            {/* Event details strip */}
            <div 
              className="grid grid-cols-2 gap-6 py-6 border-t border-border"
              style={{
                animation: 'fadeIn 1s ease-out 0.8s both'
              }}
            >
              {[
                { label: 'Дата', value: '6 июня' },
                { label: 'Формат', value: 'Онлайн · практическая работа' },
                { label: 'Для кого', value: 'Предприниматели и руководители' },
                { label: 'Результат', value: 'Рабочая система' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="text-left"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${0.1 * idx + 0.9}s both`
                  }}
                >
                  <div className="text-xs font-semibold tracking-wide text-accent mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663142814497/rRZZKgPLjdZEdYLG.png"
              alt="Майя Галицкая"
              className="max-w-sm md:max-w-md w-full h-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(226, 27, 45, 0.15))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
