import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill all fields',
        description: 'All fields are required to send a message.',
        variant: 'destructive',
      });
      return;
    }

    const mailtoLink = `mailto:gjathavy@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: 'Email client opened!',
      description: 'Please send the email from your email application.',
    });
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill all fields',
        description: 'All fields are required to send a message.',
        variant: 'destructive',
      });
      return;
    }

    const whatsappMessage = `Hi Jathavy! I'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const whatsappLink = `https://wa.me/94740748364?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
    
    toast({
      title: 'WhatsApp opened!',
      description: 'Complete sending the message on WhatsApp.',
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jathavy-ganeshalingam-54b8a6349',
      color: 'hover:text-[#0077b5]',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/gjathavy',
      color: 'hover:text-foreground',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:gjathavy@gmail.com',
      color: 'hover:text-accent',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your name(Ex: Jathavy Ganeshalingam)" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email (Ex: gjathavy@gmail.com)" // updated placeholder
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" className="flex-1 btn-primary gap-2">
                    <Send className="h-4 w-4" />
                    Send via Email
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:gjathavy@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      gjathavy@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">+94 74 074 8364</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary rounded-lg text-muted-foreground transition-all hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

