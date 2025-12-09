import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import profileAvatar from '@/assets/profile-avatar.png';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 section-padding relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 dark:from-background/80 dark:via-background/60 dark:to-background/90" />
      
      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-accent font-medium mb-4 animate-fade-in">
              Welcome to my portfolio
            </p>
            <h1 className="heading-primary mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="text-primary">Jathavy Ganeshalingam</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Aspiring Developer & Hardware Enthusiast
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Hi, I'm Jathavy Ganeshalingam, a Computer Engineering student passionate about coding and hardware projects. I love building innovative applications and smart solutions that make life easier. Welcome to my portfolio where you can explore my skills, projects, and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="btn-primary gap-2"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Button>
              
              {/* Updated Download CV button */}
              <a href="/files/my_cv.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-lavender to-accent p-1.5 shadow-xl shadow-primary/20">
                <div className="w-full h-full rounded-full bg-card overflow-hidden flex items-center justify-center">
                  <img 
                    src={profileAvatar} 
                    alt="Jathavy Ganeshalingam - Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/30 rounded-full blur-2xl" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-lavender/40 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
