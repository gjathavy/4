import { useState } from 'react';
import { ExternalLink, Github, Cpu, Globe } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Category = 'All' | 'Hardware' | 'Web';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: Category;
  githubUrl?: string;
  liveUrl?: string;
  icon: typeof Cpu;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Low-Cost Solar-Powered AI Waste Sorting Prototype',
    description: 'A solar-powered embedded system using AI to automatically sort waste in an efficient and eco-friendly way.',
    technologies: ['Embedded Systems', 'AI', 'Sensors', 'Arduino', 'Microcontrollers'],
    category: 'Hardware',
    githubUrl: '#',
    icon: Cpu,
  },
  {
    id: 2,
    title: 'Sensor Fusion-Based Material Detection System',
    description: 'A material detection system combining multiple sensors to increase accuracy in identifying different materials.',
    technologies: ['Sensors', 'Arduino', 'Embedded Systems', 'C++'],
    category: 'Hardware',
    githubUrl: '#',
    icon: Cpu,
  },
  {
    id: 3,
    title: 'Collaborative Task Management System (CTMS)',
    description: 'A web-based platform for task assignment, progress tracking, and team collaboration with multi-user access.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    category: 'Web',
    githubUrl: '#',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Basic Web Projects Collection',
    description: 'A collection of simple front-end websites built while learning UI/UX and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    githubUrl: '#',
    icon: Globe,
  },
];

const filters: { label: string; value: Category }[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Web Development', value: 'Web' },
  { label: 'Hardware/Embedded', value: 'Hardware' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.value)}
                className={
                  activeFilter === filter.value
                    ? 'btn-primary'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <project.icon className="h-16 w-16 text-primary/50 group-hover:text-accent group-hover:scale-110 transition-all" />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <Badge
                    variant="secondary"
                    className={
                      project.category === 'Hardware'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    }
                  >
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                {/* Live Demo Button (if exists) */}
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="gap-2 btn-accent"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

