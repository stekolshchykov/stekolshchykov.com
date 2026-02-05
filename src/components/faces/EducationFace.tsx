import { GraduationCap, Award, BookOpen, Trophy, Star, Target } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    year: '2017 - 2019',
    gpa: '3.9/4.0',
    focus: 'Distributed Systems & Machine Learning',
    achievements: [
      'Published 2 research papers on distributed computing',
      'Teaching Assistant for Advanced Algorithms course',
      'Dean\'s List all semesters',
    ],
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    year: '2013 - 2017',
    gpa: '3.8/4.0',
    focus: 'Web Technologies & Software Architecture',
    achievements: [
      'Graduated Magna Cum Laude',
      'Led university hackathon team to 1st place',
      'President of Computer Science Club',
    ],
  },
];

const certifications = [
  { 
    name: 'AWS Certified Solutions Architect - Professional', 
    issuer: 'Amazon Web Services', 
    year: '2023',
    icon: '☁️',
  },
  { 
    name: 'Google Cloud Professional Developer', 
    issuer: 'Google Cloud Platform', 
    year: '2022',
    icon: '🌐',
  },
  { 
    name: 'Certified Kubernetes Administrator (CKA)', 
    issuer: 'Cloud Native Computing Foundation', 
    year: '2021',
    icon: '⚙️',
  },
  { 
    name: 'Meta Front-End Developer Professional', 
    issuer: 'Meta', 
    year: '2021',
    icon: '⚛️',
  },
  { 
    name: 'MongoDB Certified Developer', 
    issuer: 'MongoDB University', 
    year: '2020',
    icon: '🍃',
  },
  { 
    name: 'Terraform Associate Certification', 
    issuer: 'HashiCorp', 
    year: '2023',
    icon: '🔧',
  },
];

export function EducationFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-8">
        <div className="inline-block px-6 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full backdrop-blur-xl mb-6">
          <span className="text-cyan-300 text-sm font-semibold tracking-widest">EDUCATION & CERTIFICATIONS</span>
        </div>
      </div>
      
      {/* Education */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-8 h-8 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">Academic Background</h3>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-white text-xl mb-2">{edu.degree}</h4>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="text-cyan-300 font-semibold text-lg">{edu.institution}</div>
                    <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                      <span className="text-xs text-cyan-300 font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm">{edu.location} • {edu.year}</div>
                </div>
              </div>
              
              <div className="mb-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-sm text-slate-400 mb-1">Focus Area</div>
                <div className="text-white font-semibold">{edu.focus}</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-300 mb-2">Key Achievements:</div>
                {edu.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <Star className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-yellow-400" />
          <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{cert.icon}</div>
                <div className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <span className="text-xs text-yellow-300 font-bold">{cert.year}</span>
                </div>
              </div>
              <h4 className="font-bold text-white text-sm mb-2 group-hover:text-yellow-300 transition-colors">
                {cert.name}
              </h4>
              <div className="text-xs text-slate-400">{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-xl text-center">
          <Trophy className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">2</div>
          <div className="text-xs text-slate-400">Degrees</div>
        </div>
        <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl text-center">
          <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">6</div>
          <div className="text-xs text-slate-400">Certifications</div>
        </div>
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl text-center">
          <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white mb-1">3.85</div>
          <div className="text-xs text-slate-400">Avg GPA</div>
        </div>
      </div>

      <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-white">Continuous Learning</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          Committed to lifelong learning through online courses, tech conferences, and staying current 
          with emerging technologies. Active on platforms like Coursera, Udemy, and Frontend Masters.
        </p>
      </div>
    </div>
  );
}
