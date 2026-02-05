import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactFace() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-6">
        <a
          href="mailto:alex.morgan@example.com"
          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group"
        >
          <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="text-slate-300 text-sm">alex.morgan@example.com</span>
        </a>
        
        <a
          href="tel:+1234567890"
          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 group"
        >
          <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-slate-300 text-sm">+1 (234) 567-890</span>
        </a>
        
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-purple-500/10 border border-green-500/30">
          <MapPin className="w-5 h-5 text-green-400" />
          <span className="text-slate-300 text-sm">San Francisco, CA</span>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 text-blue-400" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-500/20 border border-slate-500/40 hover:bg-slate-500/30 transition-all duration-300"
        >
          <Github className="w-5 h-5 text-slate-400" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-500/20 border border-sky-500/40 hover:bg-sky-500/30 transition-all duration-300"
        >
          <Twitter className="w-5 h-5 text-sky-400" />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors text-sm"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors text-sm"
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm"
          required
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50"
        >
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
