import { Folder, ExternalLink, Github, Star, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Dashboard Platform',
    description: 'Real-time analytics dashboard for financial data with advanced charting and AI predictions',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TensorFlow'],
    stars: 1234,
    image: '💹',
    metrics: { users: '50K+', uptime: '99.9%' }
  },
  {
    title: 'E-Commerce Marketplace',
    description: 'Full-featured marketplace with payment processing, inventory management, and vendor portal',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'AWS'],
    stars: 856,
    image: '🛒',
    metrics: { users: '100K+', revenue: '$2M+' }
  },
  {
    title: 'AI Content Generator',
    description: 'Smart content creation platform powered by GPT-4 with custom fine-tuning and SEO optimization',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI', 'Docker'],
    stars: 2145,
    image: '🤖',
    metrics: { users: '25K+', content: '1M+' }
  },
  {
    title: 'Real-Time Collaboration Suite',
    description: 'Team collaboration tool with video conferencing, document editing, and project management',
    tech: ['Vue.js', 'WebRTC', 'Socket.io', 'Kubernetes'],
    stars: 678,
    image: '👥',
    metrics: { users: '30K+', sessions: '500K+' }
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with telemedicine capabilities',
    tech: ['Next.js', 'PostgreSQL', 'AWS', 'FHIR'],
    stars: 432,
    image: '🏥',
    metrics: { hospitals: '50+', patients: '200K+' }
  },
  {
    title: 'IoT Monitoring Dashboard',
    description: 'Industrial IoT platform for real-time sensor data monitoring and predictive maintenance',
    tech: ['React', 'MQTT', 'InfluxDB', 'Grafana'],
    stars: 589,
    image: '📡',
    metrics: { devices: '10K+', datapoints: '100M+' }
  },
];

export function ProjectsFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-8">
        <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/40 rounded-full backdrop-blur-xl mb-6">
          <span className="text-green-300 text-sm font-semibold tracking-widest">FEATURED PROJECTS</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-5 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl">{project.image}</div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                </button>
              </div>
            </div>

            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-300 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-green-500/10 text-green-300 rounded-lg text-xs border border-green-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{project.stars}</span>
                </div>
                <div className="text-slate-400">
                  {Object.entries(project.metrics)[0][0]}: <span className="text-white font-semibold">{Object.entries(project.metrics)[0][1]}</span>
                </div>
              </div>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
