export default function Solution() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="section-label text-center mb-4">Разворот мышления</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6">
          Один вопрос, который меняет всё
        </h2>

        {/* Body text */}
        <p className="text-center text-lg text-muted max-w-2xl mx-auto mb-12">
          Стартапы Силиконовой долины не гоняются за каждой новой нейросетью.
          Они задают один вопрос — и именно он приносит деньги:
        </p>

        {/* Quote block with accent border */}
        <div className="bg-card border-2 border-accent rounded-2xl p-8 md:p-12 mb-12 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-center text-foreground">
            «Какой процесс я меняю в бизнесе<br />
            и как ИИ даст измеримый эффект?»
          </p>
        </div>

        {/* Explanation text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-muted mb-6">
            Не «какую нейросеть попробовать». А «куда встроить ИИ, чтобы он усилил
            меня в 10–20 раз". Когда Вы начинаете смотреть именно так — нейросети
            перестают быть набором игрушек. Они превращаются в архитектуру усиления.
          </p>
          <p className="text-base md:text-lg text-muted">
            Именно из этого понимания родился Протокол внедрения ИИ.
          </p>
        </div>
      </div>
    </section>
  );
}
