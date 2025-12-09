import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'IEEE Student Branch Member',
    organization: 'KDU University – IEEE Student Branch',
    role: 'Active Member',
    period: 'Jan 2025 – Present',
    description:
      'Participated in technical workshops, seminars, and collaborative projects organized by the IEEE branch; contributed to discussions and helped organize student activities.',
    color: 'from-primary to-lavender',
  },
  {
    id: 2,
    title: 'Freelance Web Development',
    organization: 'Self-Initiated',
    role: 'Frontend Developer',
    period: 'Feb 2025 – Present',
    description:
      'Built small websites and web pages for classmates and personal practice using HTML, CSS, and JavaScript.',
    color: 'from-accent to-blush',
  },
  {
    id: 3,
    title: 'Collaborative Project Contributor – CTMS',
    organization: 'KDU University – Group Project',
    role: 'Frontend & Backend Developer',
    period: 'Jun 2025 – Jul 2025',
    description:
      'Developed a web-based task management system with multi-user login, task assignment, and real-time notifications.',
    color: 'from-sky to-primary',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-card rounded-2xl border border-border/50 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.color}`} />
                
                {/* Background glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${exp.color}`} />
                
                {/* Number badge */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-primary-foreground font-bold text-lg">{exp.id}</span>
                </div>

                {/* Content */}
                <div className="relative z-10 pt-2">
                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {exp.title}
                  </h3>
                  
                  {/* Organization & Role */}
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span className="text-sm font-medium text-primary">{exp.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-lavender" />
                      <span className="text-sm text-muted-foreground">{exp.role}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
