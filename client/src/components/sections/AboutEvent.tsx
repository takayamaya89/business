export default function AboutEvent() {
  return (
    <section className="py-20 md:py-32 bg-white section-bg-animated relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 fade-in">
          <span className="text-green-600">REACTOR CLUB</span> × <span className="text-green-600">Майя Галицкая</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center fade-in-up card-premium border-l-4 border-green-500 hover-lift glow-pulse">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Совместный формат, объединяет экспертизу REACTOR CLUB в работе с предпринимателями и 15-летний опыт Майи Галицкой в маркетинге и внедрении AI. <span className="highlight-green">Один день, максимальный результат.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
