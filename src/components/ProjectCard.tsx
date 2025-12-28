import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  delay?: number;
}

export const ProjectCard = ({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      style={{ perspective: 1000 }}
    >
      <Card className="group overflow-hidden glass-effect border-2 border-muted hover:border-primary transition-all duration-300 shadow-neon-cyan hover:shadow-neon-purple">
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button
              size="icon"
              className="bg-primary hover:bg-primary-light shadow-neon-cyan"
              asChild
            >
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="icon"
              className="bg-secondary hover:bg-secondary/80 shadow-neon-purple"
              asChild
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 neon-border-cyan rounded-full text-primary font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
