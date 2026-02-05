import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Stanford University',
    year: '2017 - 2019',
    description: 'Specialized in Distributed Systems and Machine Learning',
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'MIT',
    year: '2013 - 2017',
    description: 'Focus on Web Technologies and Software Architecture',
  },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    year: '2022',
  },
  {
    name: 'Kubernetes Administrator (CKA)',
    issuer: 'CNCF',
    year: '2021',
  },
];

export function EducationFace() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-8 h-8 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Education & Certifications</h2>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-400" />
          <h3 className="font-semibold text-white">Education</h3>
        </div>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
            >
              <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
              <div className="text-blue-300 text-sm mb-2">{edu.institution}</div>
              <div className="text-slate-400 text-xs mb-2">{edu.year}</div>
              <p className="text-slate-300 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">Certifications</h3>
        </div>
        
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                  <div className="text-yellow-300 text-xs">{cert.issuer}</div>
                </div>
                <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30">
        <h3 className="font-semibold text-white text-sm mb-2">Continuous Learning</h3>
        <p className="text-slate-300 text-xs">
          Active on platforms like Coursera, Udemy, and Frontend Masters. Always staying up-to-date 
          with the latest technologies and best practices.
        </p>
      </div>
    </div>
  );
}
