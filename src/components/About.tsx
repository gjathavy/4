import { GraduationCap, Award, Users, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Award,
    title: 'AI Waste Sorting Prototype',
    description: 'Developed a low-cost, solar-powered AI-assisted waste sorting system using embedded systems.',
  },
  {
    icon: Code,
    title: 'Multi-Language Proficiency',
    description: 'Completed projects in Java, C++, Python, and web development (HTML, CSS, JavaScript).',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Successfully contributed to team projects like the Collaborative Task Management System (CTMS).',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Consistently performing well in Computer Engineering and related technical subjects.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm Jathavy Ganeshalingam, a curious and passionate Computer Engineering student. I love exploring both software development and hardware projects, always eager to learn new technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or building prototypes, I enjoy discovering innovative solutions and dreaming about creating projects that can make a positive impact in the world. My goal is to grow as a skilled developer and engineer while contributing to meaningful, real-world technology.
            </p>
            
            {/* Education Card */}
            <Card className="card-hover border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">KDU University</h3>
                    <p className="text-primary font-medium">BSc in Computer Engineering</p>
                    <p className="text-muted-foreground">1st Year Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-accent/10 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
