import { Code, Database, Cloud, Palette, Terminal, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    color: 'purple',
  },
  {
    icon: Database,
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
    color: 'blue',
  },
  {
    icon: Cloud,
    title: 'DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    color: 'green',
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Responsive Design', 'Accessibility'],
    color: 'pink',
  },
];

export function SkillsFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <Terminal className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-xl bg-${category.color}-500/10 border border-${category.color}-500/30 backdrop-blur-sm hover:bg-${category.color}-500/20 transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-5 h-5 text-${category.color}-400`} />
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-sm border border-white/10 hover:border-white/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">Currently Learning</h3>
        </div>
        <p className="text-slate-300 text-sm">
          Rust, WebAssembly, Machine Learning, Three.js
        </p>
      </div>
    </div>
  );
}
