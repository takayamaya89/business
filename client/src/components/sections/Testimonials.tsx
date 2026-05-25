export default function Testimonials() {
  const testimonials = [
    {
      name: "Алексей К.",
      role: "Основатель SaaS, 5M ₽ MRR",
      text: "Внедрили ИИ-ассистентов для поддержки клиентов. Сэкономили 500K ₽ в месяц на найме специалистов. Качество обслуживания улучшился, клиенты довольны.",
      result: "+35% эффективность"
    },
    {
      name: "Елена М.",
      role: "Директор маркетинга, B2B компания",
      text: "Система для создания контента сэкономила 40 часов в месяц. Лиды стали дешевле на 30%, конверсия выросла на 25%. Реальный результат за 2 месяца.",
      result: "+25% конверсия"
    },
    {
      name: "Дмитрий Р.",
      role: "Предприниматель, e-commerce",
      text: "Автоматизировали обработку заказов и аналитику. Выручка выросла с 500K до 1.2M за год. Не нанимал людей, просто внедрил систему. Работает.",
      result: "500K → 1.2M за год"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* VISIBLE Animated background circles */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
          style={{
            animation: 'fadeInDown 0.8s ease-out'
          }}
        >
          <span className="text-accent">Результаты</span> предпринимателей
        </h2>

        <p 
          className="text-center text-lg text-muted max-w-2xl mx-auto mb-16"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}
        >
          Не обещания. <span className="font-bold text-accent">Реальные цифры</span> от предпринимателей, которые внедрили протокол.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border-t-4 border-accent rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
              style={{
                boxShadow: '0 0 15px rgba(34, 197, 94, 0.1)',
                animation: `bounceIn 0.8s ease-out ${0.1 * index}s both`
              }}
            >
              {/* Result badge */}
              <div 
                className="inline-block mb-4 px-3 py-1 bg-green-100 border border-green-300 text-xs font-bold text-green-700 rounded"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index + 0.1}s both`
                }}
              >
                {testimonial.result}
              </div>

              {/* Testimonial text */}
              <p 
                className="text-gray-700 mb-6 leading-relaxed italic"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index + 0.2}s both`
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div 
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index + 0.3}s both`
                }}
              >
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div 
          className="max-w-3xl mx-auto bg-card border border-green-200 rounded-lg p-8 text-center"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}
        >
          <p className="text-gray-700 mb-6">
            <span className="font-bold text-lg text-accent">200+</span> предпринимателей внедрили протокол
          </p>
          <p className="text-gray-700">
            <span className="font-bold text-lg text-accent">5B ₽+</span> совокупной выручки клиентов, которые используют систему
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
