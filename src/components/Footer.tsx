import { Instagram, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40">
            © 2026 Team Souls. Building with soul.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/team.souls.ts?igsh=dzRkOGJvdzVhdXRj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/team-souls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
