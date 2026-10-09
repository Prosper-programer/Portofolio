import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a slight shadow/border when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-ivory/90 backdrop-blur-md border-b border-soft-sage shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-widest text-emerald hover:text-emerald transition-colors" aria-label="Prosper Home">
              PROSPER
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-deep-charcoal hover:text-emerald hover:no-underline transition-colors focus-visible:outline-2 focus-visible:outline-emerald rounded-sm px-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#cv-placeholder"
              className="inline-flex items-center gap-2 bg-emerald text-warm-ivory px-5 py-2.5 rounded-md font-medium text-sm hover:bg-emerald/90 hover:no-underline hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              aria-label="Download CV (Placeholder)"
            >
              <Download size={16} />
              <span >Download CV</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-deep-charcoal hover:bg-soft-sage/50 transition-colors focus-visible:outline-2 focus-visible:outline-emerald"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100 border-b border-soft-sage bg-warm-ivory' : 'max-h-0 overflow-hidden opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          <ul className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-deep-charcoal hover:bg-soft-sage/40 hover:text-emerald rounded-md transition-colors hover:no-underline focus-visible:outline-2 focus-visible:outline-emerald"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 px-3">
            <a 
              href="#cv-placeholder"
              className="flex w-full items-center justify-center gap-2 bg-emerald text-warm-ivory px-5 py-3 rounded-md font-medium hover:bg-emerald/90 hover:no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              onClick={() => setIsOpen(false)}
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
