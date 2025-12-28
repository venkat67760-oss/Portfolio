import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Download,
  Code2,
  Database,
  Layout,
  Palette,
  GitBranch,
  Smartphone,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { Hero3D } from "@/components/Hero3D";
import { FloatingNav } from "@/components/FloatingNav";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import projectFoodApp from "@/assets/project-food-app.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectFaceDetection from "@/assets/project-face-detection.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  const projects = [
    {
      title: "Food Delivery App",
      description: "A modern food delivery application with real-time order tracking, restaurant browsing, and seamless checkout experience.",
      tech: ["React", "Firebase", "TailwindCSS"],
      image: projectFoodApp,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      image: projectPortfolio,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Face Detection Attendance",
      description: "Automated attendance system using facial recognition technology with real-time detection and database integration.",
      tech: ["Python", "OpenCV", "Firebase"],
      image: projectFaceDetection,
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with product management, shopping cart, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      image: projectEcommerce,
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const experiences = [
    {
      company: "Vyuha Innovation Foundation",
      role: "Frontend Developer Intern",
      duration: "2025",
      icon: Briefcase,
      color: "neon-cyan",
    },
    {
      company: "Oasis Infobyte",
      role: "Web Developer Intern",
      duration: "2024",
      icon: Code2,
      color: "neon-purple",
    },
    {
      company: "CodSoft",
      role: "Data Science Intern",
      duration: "2024",
      icon: Database,
      color: "neon-magenta",
    },
  ];

  const skills = [
    { name: "HTML5", icon: Code2, category: "Frontend", level: 95 },
    { name: "CSS3", icon: Palette, category: "Frontend", level: 92 },
    { name: "JavaScript", icon: Code2, category: "Frontend", level: 90 },
    { name: "React", icon: Layout, category: "Frontend", level: 88 },
    { name: "Next.js", icon: Layout, category: "Frontend", level: 85 },
    { name: "TailwindCSS", icon: Palette, category: "Styling", level: 90 },
    { name: "Framer Motion", icon: Layout, category: "Styling", level: 82 },
    { name: "Git & GitHub", icon: GitBranch, category: "Tools", level: 87 },
    { name: "Firebase", icon: Database, category: "Tools", level: 80 },
  ];

  return (
    <>
      <LoadingAnimation />
      <FloatingNav />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
            <Hero3D />
          </Suspense>

          <div className="container mx-auto px-6 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-foreground"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl mb-4 text-primary"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text-cyan"
              >
                Shaik Arshad Basha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-2xl md:text-3xl mb-6 font-medium text-secondary"
              >
                Frontend Developer
              </motion.p>
              <div className="h-16 mb-12">
                <TypeAnimation
                  sequence={[
                    "React.js",
                    2000,
                    "Next.js",
                    2000,
                    "TailwindCSS",
                    2000,
                    "JavaScript",
                    2000,
                    "TypeScript",
                    2000,
                  ]}
                  wrapper="p"
                  speed={50}
                  className="text-xl md:text-2xl text-accent glow-text-magenta"
                  repeat={Infinity}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="neon-border-cyan bg-primary hover:bg-primary-light text-primary-foreground shadow-neon-cyan transition-glow group"
                >
                  View Projects
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="neon-border-purple text-secondary hover:bg-secondary/20 transition-glow"
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-3 bg-primary rounded-full shadow-neon-cyan"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate <span className="text-primary font-semibold">Frontend Developer</span> with
                    expertise in crafting beautiful, performant, and user-centric web applications. I transform ideas
                    into engaging digital experiences using cutting-edge technologies.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My journey in web development started with curiosity and evolved into a deep passion for creating
                    exceptional user interfaces. I constantly learn and adapt to the latest technologies and best
                    practices in the ever-evolving web ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML5"].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-4 py-2 neon-border-cyan rounded-lg font-medium hover:shadow-neon-cyan transition-glow cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <Button size="lg" className="neon-border-purple bg-secondary hover:bg-secondary/80 shadow-neon-purple mt-6">
                    <Download className="mr-2 w-5 h-5" />
                    Download Resume
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-2xl glass-effect p-1 shadow-neon-cyan animate-tilt">
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: "conic-gradient(from 0deg, #00ffff, #ff00ff, #00ffff)",
                        }}
                      />
                      <Code2 className="w-32 h-32 text-primary relative z-10" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center glow-text-purple"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center glow-text-magenta"
            >
              Skills & Technologies
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    style={{ perspective: 1000 }}
                  >
                    <Card className="glass-effect border-2 border-muted hover:border-primary transition-all duration-300 shadow-neon-cyan hover:shadow-neon-purple h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-neon-cyan"
                          >
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">{skill.category}</p>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="gradient-primary h-2 rounded-full shadow-neon-cyan"
                          />
                        </div>
                        <p className="text-xs text-right mt-2 text-primary">{skill.level}%</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center glow-text-cyan"
            >
              Experience
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="glass-effect border-2 border-muted hover:border-primary transition-all duration-300 shadow-neon-cyan hover:shadow-neon-purple">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-16 h-16 rounded-full gradient-accent flex items-center justify-center shadow-${exp.color}`}
                          >
                            <Icon className="w-8 h-8 text-accent-foreground" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                            <p className="text-lg text-primary font-medium mb-1">{exp.company}</p>
                            <p className="text-muted-foreground">{exp.duration}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-dark opacity-50" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10"
            style={{
              background: "conic-gradient(from 0deg, #00ffff, #ff00ff, #00ffff)",
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center glow-text-purple"
            >
              Get In Touch
            </motion.h2>
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-effect border-2 border-primary shadow-neon-cyan">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="glass-effect border-primary focus:shadow-neon-cyan transition-glow"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="glass-effect border-primary focus:shadow-neon-cyan transition-glow"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          rows={5}
                          required
                          className="glass-effect border-primary focus:shadow-neon-cyan transition-glow resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full gradient-primary text-primary-foreground hover:opacity-90 shadow-neon-cyan transition-glow"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-muted">
                      <p className="text-center text-muted-foreground mb-6">Or connect with me on</p>
                      <div className="flex justify-center gap-4">
                        {[
                          { Icon: Github, color: "cyan" },
                          { Icon: Linkedin, color: "purple" },
                          { Icon: Mail, color: "magenta" },
                          { Icon: Instagram, color: "cyan" },
                        ].map(({ Icon, color }, index) => (
                          <motion.div key={index} whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                            <Button
                              size="icon"
                              className={`neon-border-${color} bg-card hover:bg-primary/20 shadow-neon-${color} transition-glow`}
                            >
                              <Icon className="w-5 h-5" />
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 glass-effect border-t border-primary relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-muted-foreground"
              >
                © 2024 Shaik Arshad Basha. All rights reserved.
              </motion.p>
              <div className="flex gap-6">
                {["About", "Projects", "Skills", "Contact"].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, color: "hsl(180 100% 50%)" }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
