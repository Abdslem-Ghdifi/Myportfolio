import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { 
  Code2, 
  Database, 
  Layers, 
  Wrench, 
  Users, 
  Rocket, 
  Target,
  MessageSquare 
} from "lucide-react";

export function Skills() {
  const { ref, inView } = useInView();

  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["HTML5", "CSS3", "JavaScript", "Python", "Java", "PHP", "C#", "Dart"],
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      skills: ["React.js", "Node.js", "Express", "Bootstrap", "Laravel", "Spring Boot", "Flutter"],
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "VS Code", "Postman", "XAMPP", "Android Studio", "Visual Studio"],
    },
  ];

  const softSkills = [
    {
      name: "Team Collaboration",
      icon: Users,
      description: "Excellent at working in team environments",
    },
    {
      name: "Fast Learner",
      icon: Rocket,
      description: "Quick to adapt to new technologies",
    },
    {
      name: "Problem Solving",
      icon: Target,
      description: "Strong analytical and debugging skills",
    },
    {
      name: "Communication",
      icon: MessageSquare,
      description: "Clear and effective communication",
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary/60 mb-2 block">
            What I bring to the table
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">Skills & Expertise</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web and mobile applications
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl tracking-tight mb-8 text-center"
          >
            Technical Skills
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-muted text-sm text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl tracking-tight mb-8 text-center"
          >
            Professional Qualities
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-background to-muted border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2">{skill.name}</h4>
                  <p className="text-sm text-foreground/60">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
