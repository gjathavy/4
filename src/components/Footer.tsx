import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jathavy-ganeshalingam-54b8a6349',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/gjathavy',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:gjathavy@gmail.com',
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container-max px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-serif text-xl font-bold hover:text-accent transition-colors">
              Jathavy<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-primary-foreground/80 mt-1">
              © {currentYear} Jathavy Ganeshalingam. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
                title={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-1 text-sm text-primary-foreground/80">
            Made by Jathavy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
