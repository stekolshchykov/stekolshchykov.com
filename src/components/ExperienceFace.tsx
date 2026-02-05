import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Lead development of cloud-native applications, mentor junior developers, and architect scalable solutions.',
    achievements: [
      'Reduced server costs by 40% through optimization',
      'Led team of 5 developers on flagship product',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built MVP from scratch, implemented CI/CD pipelines, and developed RESTful APIs.',
    achievements: [
      'Launched 3 major features serving 10k+ users',
      'Improved application performance by 60%',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Created responsive websites and web applications for various clients across industries.',
    achievements: [
      'Delivered 15+ client projects on time',
      'Achieved 98% client satisfaction rating',
    ],
  },
];

export function ExperienceFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Work Experience</h2>
      </div>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 pb-4 border-l-2 border-purple-500/30 last:pb-0"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-800"></div>
            
            <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="font-semibold text-white mb-1">{exp.title}</h3>
              <div className="text-purple-300 mb-2">{exp.company}</div>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              
              <p className="text-sm text-slate-300 mb-3">{exp.description}</p>
              
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-xs text-slate-400 flex items-start gap-2"
                  >
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
