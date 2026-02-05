import { Briefcase, Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading development of cloud-native microservices architecture serving 1M+ users',
    achievements: [
      'Architected and deployed scalable microservices reducing server costs by 40%',
      'Led team of 8 developers using Agile methodologies',
      'Improved application performance by 65% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
    ],
    tags: ['React', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    title: 'Full Stack Developer',
    company: 'InnovateLabs',
    location: 'Remote',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Built MVP and scaled product from 0 to 100K users in 18 months',
    achievements: [
      'Developed core product features from scratch using React and Node.js',
      'Integrated payment systems processing $5M+ annually',
      'Implemented real-time features using WebSockets',
      'Mentored 3 junior developers',
    ],
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    period: '2019 - 2020',
    type: 'Full-time',
    description: 'Created responsive web applications for Fortune 500 clients',
    achievements: [
      'Delivered 20+ high-quality projects for major brands',
      'Achieved 98% client satisfaction rating',
      'Reduced page load times by 50% on average',
      'Implemented modern design systems',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Figma'],
  },
];

export function ExperienceFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-8">
        <div className="inline-block px-6 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur-xl mb-6">
          <span className="text-red-300 text-sm font-semibold tracking-widest">WORK EXPERIENCE</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 pb-6 border-l-2 border-red-500/30 last:pb-0 group"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-slate-900 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform"></div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-3 text-sm mb-2">
                    <div className="flex items-center gap-1 text-red-300 font-semibold">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                  <span className="text-xs text-red-300 font-semibold">{exp.type}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{exp.period}</span>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="space-y-2 mb-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <TrendingUp className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs border border-slate-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30">
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-6 h-6 text-red-400" />
          <h3 className="font-bold text-white">Total Impact</h3>
        </div>
        <p className="text-slate-300 text-sm">
          5+ years building products used by <span className="text-red-400 font-bold">1M+ users</span>, 
          generating <span className="text-red-400 font-bold">$10M+ revenue</span>, 
          leading teams of <span className="text-red-400 font-bold">15+ developers</span>
        </p>
      </div>
    </div>
  );
}
