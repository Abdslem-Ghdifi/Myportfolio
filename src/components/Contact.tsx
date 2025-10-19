import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ghdifiabdslem6@gmail.com",
      href: "mailto:ghdifiabdslem6@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+21627583953",
      href: "tel:+21627583953",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Soukra, Ariana, Tunisia",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary/60 mb-2 block">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">Get in Touch</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60 mb-1">{info.label}</div>
                        <div className="text-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-xl mb-2">Available for Opportunities</h3>
              <p className="text-foreground/70 text-sm">
                I'm currently looking for new opportunities and interesting projects. 
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="rounded-xl min-h-[150px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-foreground/60">
            © 2025 Ghdifi Abdslem. Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
