import React, { useState } from "react";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Problem Solving", href: "#problem-solving" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold flex items-center gap-2 text-blue-400 font-mono"
        >
          <span>&lt;Sojib /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                activeSection === item.href.slice(1)
                  ? "text-blue-400"
                  : "text-gray-400"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`block py-2 text-base font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-400"
                    : "text-gray-400"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-full text-base font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
