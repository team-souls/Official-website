import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );


      alert("Thanks for reaching out! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Let's Collaborate</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have an idea that excites you? We want to hear about it. 
            If it excites us too, we\'ll build it with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Alex Chen"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="alex@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                  Your Idea / Requirement
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project, what you're building, or what you need help with..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl mb-3">What We Look For</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-1">→</span>
                  <span>Projects that solve real problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-1">→</span>
                  <span>Teams who value collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-1">→</span>
                  <span>Ideas that push us to learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-1">→</span>
                  <span>Founders building for the long term</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl mb-3">Our Process</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white mb-1">1. Initial Chat</p>
                  <p className="text-white/60">We talk about your idea and see if we're aligned</p>
                </div>
                <div>
                  <p className="text-white mb-1">2. Scope & Timeline</p>
                  <p className="text-white/60">Define what we're building and how long it takes</p>
                </div>
                <div>
                  <p className="text-white mb-1">3. Build Together</p>
                  <p className="text-white/60">Regular updates, open communication, fast iterations</p>
                </div>
                <div>
                  <p className="text-white mb-1">4. Ship & Support</p>
                  <p className="text-white/60">Launch the product and continue improving</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5">
              <p className="text-sm text-yellow-400/90">
                We\'re selective about projects. Not because we\'re exclusive, but because 
                we want to give every project the attention it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="text-white/60 mb-4">Prefer a different way to reach out?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:hello@teamsouls.co" className="text-white/80 hover:text-white transition-colors underline">
              hello@teamsouls.co
            </a>
            <span className="text-white/30">·</span>
            <a href="#" className="text-white/80 hover:text-white transition-colors underline">
              @teamsouls on Instagram
            </a>
            <span className="text-white/30">·</span>
            <a href="#" className="text-white/80 hover:text-white transition-colors underline">
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}