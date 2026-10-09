import { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';

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
  const [isDark, setIsDark] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle Scroll
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
        scrolled ? 'bg-bg-nav backdrop-blur-md border-b border-border-subtle shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="group/brand inline-flex items-center gap-3 rounded-sm py-1 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label="Prosper Home"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 36 36"
                className="size-9 shrink-0 rounded-lg bg-[#237A57] p-1.5 shadow-sm transition-transform duration-250 ease-out group-hover/brand:-translate-y-0.5 group-hover/brand:rotate-3 group-focus-visible/brand:-translate-y-0.5 group-focus-visible/brand:rotate-3 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <path
                  d="M11 26V10h7a5 5 0 0 1 0 10h-7"
                  fill="none"
                  stroke="#F8F7F2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
              <span className="relative text-2xl font-bold tracking-widest text-text-main transition-colors duration-250 ease-out group-hover/brand:text-accent group-focus-visible/brand:text-accent motion-reduce:transition-none">
                PROSPER
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-[width] duration-250 ease-out group-hover/brand:w-8 group-focus-visible/brand:w-8 motion-reduce:transition-none"
                />
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6 items-center">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="relative group text-sm font-medium text-text-main hover:text-accent hover:no-underline transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent rounded-sm py-1"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4 border-l border-border-subtle pl-4 ml-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-text-main hover:text-accent hover:bg-bg-hover rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent cursor-pointer"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
              </button>

              <a 
                href="#cv-placeholder"
                className="inline-flex items-center gap-2 bg-accent text-accent-text px-5 py-2.5 rounded-md font-medium text-sm hover:bg-accent-hover hover:no-underline hover:-translate-y-0.5 motion-reduce:transform-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-sm"
                aria-label="Download CV (Placeholder)"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-main hover:text-accent hover:bg-bg-hover rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-main hover:bg-bg-hover transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent"
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
          isOpen ? 'max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100 border-b border-border-subtle bg-bg-main shadow-lg' : 'max-h-0 overflow-hidden opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          <ul className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-text-main hover:bg-bg-hover hover:text-accent rounded-md transition-colors duration-300 hover:no-underline focus-visible:outline-2 focus-visible:outline-accent"
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
              className="flex w-full items-center justify-center gap-2 bg-accent text-accent-text px-5 py-3 rounded-md font-medium hover:bg-accent-hover hover:no-underline transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-sm"
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
