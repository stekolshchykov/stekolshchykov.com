import { Folder, ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with payment integration and admin dashboard',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    stars: 234,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    tech: ['Next.js', 'Socket.io', 'MongoDB'],
    stars: 187,
  },
  {
    title: 'AI Content Generator',
    description: 'Smart content creation tool powered by GPT API',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    stars: 456,
  },
  {
    title: 'Portfolio Builder',
    description: 'No-code platform for creating stunning developer portfolios',
    tech: ['Vue.js', 'Firebase', 'Tailwind'],
    stars: 312,
  },
];

export function ProjectsFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <Folder className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-white/10 rounded transition-colors">
                  <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                </button>
                <button className="p-1 hover:bg-white/10 rounded transition-colors">
                  <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                </button>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs">{project.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
