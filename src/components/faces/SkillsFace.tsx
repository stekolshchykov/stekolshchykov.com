import { Code, Database, Cloud, Palette, Terminal, Cpu, Smartphone, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 85 },
    ],
    color: 'purple',
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Python', level: 88 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 87 },
      { name: 'GraphQL', level: 85 },
    ],
    color: 'blue',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', level: 88 },
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 90 },
      { name: 'Terraform', level: 75 },
    ],
    color: 'green',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Other',
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'REST APIs', level: 95 },
      { name: 'WebSockets', level: 88 },
      { name: 'WebGL/Three.js', level: 80 },
    ],
    color: 'pink',
  },
];

export function SkillsFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-8">
        <div className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full backdrop-blur-xl mb-6">
          <span className="text-blue-300 text-sm font-semibold tracking-widest">TECHNICAL SKILLS</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl text-center">
          <Terminal className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">10+</div>
          <div className="text-xs text-slate-400">Languages</div>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl text-center">
          <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">25+</div>
          <div className="text-xs text-slate-400">Frameworks</div>
        </div>
        <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl text-center">
          <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">15+</div>
          <div className="text-xs text-slate-400">Tools</div>
        </div>
      </div>
    </div>
  );
}
