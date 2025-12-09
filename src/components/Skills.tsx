import { Code, Wrench, Heart, Users, Lightbulb, MessageCircle, Sparkles, Clock, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const programmingLanguages = [
  { name: 'Java', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'HTML/CSS', level: 85 },
];

const toolsAndFrameworks = {
  'Web Development': ['Node.js', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  'IDEs & Editors': ['VS Code', 'Eclipse', 'IntelliJ', 'Code::Blocks', 'Dev C++'],
  'Database & Backend': ['MySQL', 'MongoDB', 'PHP', 'Python Flask'],
  'Hardware & Embedded': ['Arduino IDE', 'Proteus', 'TinkerCAD', 'Raspberry Pi'],
};

const softSkills = [
  { name: 'Teamwork & Collaboration', icon: Users, color: 'from-primary to-lavender' },
  { name: 'Problem-Solving', icon: Lightbulb, color: 'from-accent to-blush' },
  { name: 'Communication Skills', icon: MessageCircle, color: 'from-sky to-primary' },
  { name: 'Creativity & Innovation', icon: Sparkles, color: 'from-lavender to-accent' },
  { name: 'Time Management', icon: Clock, color: 'from-blush to-primary' },
  { name: 'Adaptability', icon: RefreshCw, color: 'from-primary to-sky' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="card-hover border-primary/10 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-lavender/20 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {programmingLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}%</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-lavender to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Frameworks */}
          <Card className="card-hover border-accent/10 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 bg-gradient-to-br from-accent/20 to-blush/20 rounded-lg">
                  <Wrench className="h-5 w-5 text-accent" />
                </div>
                Tools & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(toolsAndFrameworks).map(([category, tools]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="bg-gradient-to-r from-muted to-secondary hover:from-primary/20 hover:to-accent/20 transition-all duration-300 text-foreground"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="card-hover border-lavender/10 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 bg-gradient-to-br from-lavender/20 to-primary/20 rounded-lg">
                  <Heart className="h-5 w-5 text-lavender" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {softSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/50 to-secondary/50 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 border border-border/50"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                        <IconComponent className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
