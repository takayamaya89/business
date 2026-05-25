export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 md:py-20 relative overflow-hidden">
      {/* Background animation */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-gray-700">
            {/* Left: Event info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">REACTOR CLUB × МАЙЯ ГАЛИЦКАЯ</h3>
              <p className="text-gray-400 mb-2">
                Воркшоп «Протокол внедрения ИИ в бизнес»
              </p>
              <p className="text-gray-400 mb-4">
                6 июня 2025 · Офлайн · 8 часов (10:00-19:00, с перерывом)
              </p>
              <p className="text-sm text-gray-500 italic">
                Инструменты меняются. Система — работает всегда.
              </p>
            </div>

            {/* Right: Legal info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Реквизиты</h4>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Индивидуальный предприниматель</p>
                  <p className="text-white font-semibold">Галицкая Майя Вячеславовна</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">ИНН</p>
                  <p className="text-white font-mono">615490332205</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Юридический адрес</p>
                  <p className="text-white">
                    347927, Россия, Ростовская обл.,<br />
                    г. Ростов-на-Дону, ул. Варфоломеева 274, кв. 9
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-700">
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Документы</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#privacy-policy" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a 
                    href="#offer-agreement" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    Договор оферты
                  </a>
                </li>
                <li>
                  <a 
                    href="#terms" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Контакты</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:mayayellow@mail.ru" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    mayayellow@mail.ru
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+79614335522" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    +7 (961) 433-55-22
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Соцсети</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.instagram.com/takaya_maya/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/mayaneiro" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: Copyright and legal notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              © 2025 Reactor Club & Майя Галицкая. Все права защищены.
            </p>
            <p className="text-xs text-muted">
              Воркшоп проводится в соответствии с действующим законодательством Российской Федерации.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </footer>
  );
}
