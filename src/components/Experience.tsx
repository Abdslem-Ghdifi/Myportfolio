import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export function Experience() {
  const { ref, inView } = useInView();

  const experiences = [
    {
      title: "Software Engineering Student",
      company: "Tech-Up University",
      location: "Tunisia",
      period: "2024 - Present",
      type: "Education",
      description: "Currently in 1st year, focusing on advanced software development practices, algorithms, and modern frameworks.",
      achievements: [
        "Learning advanced programming concepts",
        "Working on collaborative projects",
        "Exploring AI and machine learning",
      ],
    },
    {
      title: "Web & Mobile Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2022 - Present",
      type: "Work",
      description: "Developed various web and mobile applications for clients, focusing on modern technologies and best practices.",
      achievements: [
        "Built 15+ responsive web applications",
        "Developed mobile apps using Flutter",
        "Implemented RESTful APIs and backend solutions",
      ],
    },
    {
      title: "Bachelor in Information Technologies",
      company: "ISET Zaghouan",
      location: "Zaghouan, Tunisia",
      period: "2020 - 2023",
      type: "Education",
      description: "Graduated with a Bachelor's degree, gaining strong foundation in software development and IT fundamentals.",
      achievements: [
        "Completed multiple development projects",
        "Learned full-stack development",
        "Participated in team collaborations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary/60 mb-2 block">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">Experience & Education</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A timeline of my professional and academic achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-2 ${
                  index % 2 === 0 ? "" : ""
                }`} />

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs mb-3">
                          {exp.type === "Education" ? (
                            <Calendar className="h-3 w-3" />
                          ) : (
                            <Briefcase className="h-3 w-3" />
                          )}
                          {exp.type}
                        </div>
                        <h3 className="text-xl mb-1">{exp.title}</h3>
                        <div className="text-foreground/70 mb-2">{exp.company}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/60"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
