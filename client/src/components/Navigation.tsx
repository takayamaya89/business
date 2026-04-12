export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-sm font-semibold tracking-wide text-gray-900">
          REACTOR CLUB × МАЙЯ ГАЛИЦКАЯ
        </div>

        {/* Center info */}
        <div className="hidden md:flex text-sm font-medium text-gray-600">
          16 мая
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('pricing')}
          className="btn-primary text-xs"
        >
          ЗАНЯТЬ МЕСТО
        </button>
      </div>
    </nav>
  );
}
