export default function Format() {
  const metrics = [
    { number: "7", label: "часов практики без воды" },
    { number: "3", label: "этапа протокола от старта до денег" },
    { number: "16", label: "мая, дата проведения" },
    { number: "0", label: "теории ради теории" }
  ];

  return (
    <section className="py-20 md:py-32 bg-green-50 section-bg-animated relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="card-premium text-center hover-lift border-t-4 border-green-500 card-entrance glow-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4 number-animate">
                {metric.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
