import React from "react";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold flex items-center gap-2 text-cyan-400 font-mono tracking-tight"
        >
          <span>&lt;Sojib /&gt;</span>
        </a>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm font-medium">
          Designed & Built by Kamrul Hasan Sojib. © {new Date().getFullYear()}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/kamrulhasansojib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kamrul-hasan-sojib-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/kamrulhasansojib.19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:kamrulhasansojib1931@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
