import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';

export function ContactFace() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-8">
        <div className="inline-block px-6 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full backdrop-blur-xl mb-6">
          <span className="text-orange-300 text-sm font-semibold tracking-widest">GET IN TOUCH</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Left Column - Contact Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
          
          <div className="space-y-3">
            <a
              href="mailto:alex.morgan@example.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Email</div>
                <div className="text-white font-semibold">alex.morgan@example.com</div>
              </div>
            </a>
            
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Phone</div>
                <div className="text-white font-semibold">+1 (234) 567-890</div>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Location</div>
                <div className="text-white font-semibold">San Francisco, CA</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="text-sm text-slate-400 mb-3">Connect on social media</div>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-500/20 border border-slate-500/40 hover:bg-slate-500/30 hover:border-slate-400/60 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/20 border border-sky-500/40 hover:bg-sky-500/30 hover:border-sky-400/60 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-sky-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">Schedule a Meeting</span>
            </div>
            <p className="text-sm text-slate-400 mb-3">Book a 30-minute consultation call</p>
            <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 disabled:from-green-600 disabled:to-green-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 disabled:cursor-not-allowed"
            >
              {status === 'idle' && (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
              {status === 'sending' && <span>Sending...</span>}
              {status === 'sent' && <span>✓ Message Sent!</span>}
            </button>
          </form>

          {status === 'sent' && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/40 rounded-xl text-green-300 text-sm text-center">
              Thank you! I'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
