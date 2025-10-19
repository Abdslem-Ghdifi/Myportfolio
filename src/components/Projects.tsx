import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  const { ref, inView } = useInView();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDg2NTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1651129522359-ce483a8263a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NjA4Njc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with analytics.",
      tags: ["Flutter", "Dart", "SQLite"],
      image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc2MDc5MTg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with order tracking, inventory, and staff management.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1694953592902-46d9b0d0c19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDg4NzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with beautiful charts and data visualization.",
      tags: ["React", "Recharts", "Express"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwODY0NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application with location-based forecasts and interactive maps.",
      tags: ["React", "API Integration", "Maps"],
      image: "https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDF8fHx8MTc2MDg4NzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary/60 mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience in web and mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative rounded-2xl bg-background border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-muted text-xs text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-full group/btn"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 rounded-full group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
