import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  ChevronRight,
  CircuitBoard,
  Cpu,
  ExternalLink,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  Radio,
  Settings,
  Thermometer,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Line Following Robot",
    level: "School",
    description:
      "Build a robot that autonomously follows a black line on a white surface using IR sensors and Arduino Uno logic control.",
    icon: Bot,
    tags: ["Arduino Uno", "IR Sensors", "DC Motors"],
    color: "teal",
  },
  {
    id: 2,
    title: "Smart Home Automation",
    level: "Engineering",
    description:
      "Control home appliances remotely via smartphone using ESP8266 Wi-Fi module and MQTT protocol for IoT connectivity.",
    icon: Cpu,
    tags: ["ESP8266", "IoT", "MQTT"],
    color: "blue",
  },
  {
    id: 3,
    title: "Obstacle Avoiding Robot",
    level: "School",
    description:
      "Program an autonomous robot to detect and avoid obstacles using ultrasonic sensors and real-time decision algorithms.",
    icon: Radio,
    tags: ["Ultrasonic", "L298N", "Servo"],
    color: "teal",
  },
  {
    id: 4,
    title: "Weather Station IoT",
    level: "Engineering",
    description:
      "Monitor temperature, humidity, and atmospheric pressure in real-time with cloud upload and live dashboard display.",
    icon: Thermometer,
    tags: ["DHT22", "BMP180", "ThingSpeak"],
    color: "blue",
  },
  {
    id: 5,
    title: "Robotic Arm Control",
    level: "Engineering",
    description:
      "Design and program a 4-DOF robotic arm controlled by servo motors with precision movement and position memory.",
    icon: Settings,
    tags: ["Servo Motors", "PWM", "Potentiometer"],
    color: "teal",
  },
  {
    id: 6,
    title: "Smart Traffic Light",
    level: "School",
    description:
      "Simulate intelligent traffic light management with LED programming, timing sequences, and sensor-based switching.",
    icon: Lightbulb,
    tags: ["LEDs", "Timer", "Interrupt"],
    color: "blue",
  },
];

const CATEGORIES = [
  { label: "Robotics", icon: Bot, count: 24, color: "teal" },
  { label: "Arduino IoT", icon: Cpu, count: 31, color: "blue" },
  { label: "Automation", icon: Zap, count: 18, color: "teal" },
  {
    label: "Sensors & Electronics",
    icon: CircuitBoard,
    count: 27,
    color: "blue",
  },
];

const RESOURCES = [
  {
    name: "Arduino Project Hub",
    url: "https://projecthub.arduino.cc/",
    description:
      "The official Arduino community platform featuring hundreds of maker projects with complete code, schematics, and step-by-step instructions.",
    badge: "Official",
  },
  {
    name: "Circuit Digest",
    url: "https://circuitdigest.com/arduino-projects",
    description:
      "Detailed Arduino tutorials with complete code, circuit diagrams, and component lists for school and engineering students.",
    badge: "Tutorials",
  },
  {
    name: "Nevon Projects",
    url: "https://nevonprojects.com/arduino-projects/",
    description:
      "Comprehensive collection of Arduino-based engineering projects with source code and documentation perfect for final year students.",
    badge: "Engineering",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center">
            <CircuitBoard className="w-5 h-5 text-teal" />
          </div>
          <div>
            <div className="font-bold text-foreground text-lg leading-tight">
              Future Tech World
            </div>
            <div className="text-[10px] text-muted-foreground leading-tight tracking-widest uppercase">
              Pvt Ltd
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone pill */}
        <a
          href="tel:7760811104"
          data-ocid="nav.phone.button"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-teal/15 border border-teal/40 text-teal text-sm font-semibold hover:bg-teal/25 transition-all duration-200"
        >
          <Phone className="w-3.5 h-3.5" />
          7760811104
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.mobile.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7760811104"
            className="flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-teal/15 border border-teal/40 text-teal text-sm font-semibold w-fit"
          >
            <Phone className="w-3.5 h-3.5" />
            7760811104
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center circuit-bg overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy z-10" />

      {/* Hero image right side */}
      <div className="absolute inset-0 flex justify-end">
        <img
          src="/assets/generated/hero-robotics.dim_1200x600.jpg"
          alt="Student working with Arduino and robotic arm"
          className="h-full w-3/5 object-cover object-center opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-teal/15 text-teal border-teal/30 hover:bg-teal/25">
              🤖 Robotics & IoT Projects Platform
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5"
          >
            Explore <span className="text-teal">Robotics</span> &amp;{" "}
            <span className="text-blue-brand">Arduino IoT</span> Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Empowering school and engineering college students to build
            innovative, hands-on robotics and IoT projects. Discover ideas,
            tutorials, and resources curated by Future Tech World Pvt Ltd.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              data-ocid="hero.explore.primary_button"
              className="bg-blue-brand hover:bg-blue-light text-white font-semibold px-8 py-3 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-blue-brand/30"
            >
              <a href="#projects">
                Explore Projects <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              data-ocid="hero.learn.secondary_button"
              className="border-teal text-teal hover:bg-teal/10 font-semibold px-8 py-3 rounded-xl text-base transition-all duration-200"
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border/50"
          >
            {[
              { value: "100+", label: "Project Ideas" },
              { value: "4", label: "Categories" },
              { value: "Free", label: "Resources" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-teal">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-navy circuit-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-3 bg-blue-brand/15 text-blue-light border-blue-brand/30">
            Student Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Project Ideas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated robotics and IoT project ideas for school and engineering
            college students, from beginner to advanced levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-glow bg-navy-card border border-border rounded-2xl overflow-hidden"
              data-ocid={`projects.item.${project.id}`}
            >
              {/* Card header colored strip */}
              <div
                className={`h-1 w-full ${
                  project.color === "teal" ? "bg-teal" : "bg-blue-brand"
                }`}
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.color === "teal"
                        ? "bg-teal/15 border border-teal/30"
                        : "bg-blue-brand/15 border border-blue-brand/30"
                    }`}
                  >
                    <project.icon
                      className={`w-6 h-6 ${
                        project.color === "teal"
                          ? "text-teal"
                          : "text-blue-light"
                      }`}
                    />
                  </div>
                  <Badge
                    className={`text-xs ${
                      project.level === "School"
                        ? "bg-teal/15 text-teal border-teal/30"
                        : "bg-blue-brand/15 text-blue-light border-blue-brand/30"
                    }`}
                  >
                    {project.level}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-16 bg-navy-light">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-foreground mb-10"
        >
          Project Categories
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="card-glow bg-navy-card border border-border rounded-2xl p-6 text-center cursor-pointer"
              data-ocid={`categories.item.${index + 1}`}
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3 ${
                  cat.color === "teal"
                    ? "bg-teal/15 border border-teal/30"
                    : "bg-blue-brand/15 border border-blue-brand/30"
                }`}
              >
                <cat.icon
                  className={`w-7 h-7 ${
                    cat.color === "teal" ? "text-teal" : "text-blue-light"
                  }`}
                />
              </div>
              <div className="font-semibold text-foreground text-sm mb-1">
                {cat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {cat.count} Projects
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-navy circuit-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="mb-3 bg-teal/15 text-teal border-teal/30">
            External Resources
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Arduino Project Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore these trusted platforms for Arduino and robotics project
            ideas, complete with code and circuit diagrams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((resource, index) => (
            <motion.div
              key={resource.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-glow bg-navy-card border border-teal/20 rounded-2xl p-6 flex flex-col"
              data-ocid={`resources.item.${index + 1}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-teal" />
                </div>
                <Badge className="bg-teal/15 text-teal border-teal/30 text-xs">
                  {resource.badge}
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {resource.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {resource.description}
              </p>
              <Button
                asChild
                data-ocid={`resources.visit.button.${index + 1}`}
                className="w-full bg-teal/15 hover:bg-teal/25 text-teal border border-teal/40 rounded-xl font-semibold transition-all duration-200"
                variant="outline"
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-blue-brand/15 text-blue-light border-blue-brand/30">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Future Tech World Pvt Ltd
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-5">
                Future Tech World Pvt Ltd is dedicated to bridging the gap
                between theoretical education and practical technology skills
                for students across India. We curate and create project ideas
                specifically designed for school and engineering college
                students.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Our platform focuses on robotics, Arduino-based IoT projects,
                automation systems, and sensor electronics — giving students the
                tools and knowledge to build real-world projects that enhance
                their learning and career prospects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We partner with top educational institutions and aggregate the
                best project resources from across the internet, making quality
                tech education accessible to every student.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Bot, label: "Robotics Projects", value: "24+" },
                { icon: Cpu, label: "IoT Solutions", value: "31+" },
                { icon: CircuitBoard, label: "Electronics", value: "27+" },
                { icon: Lightbulb, label: "Innovations", value: "100+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-navy-card border border-border rounded-2xl p-5 text-center"
                >
                  <item.icon className="w-8 h-8 text-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-navy circuit-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-3 bg-teal/15 text-teal border-teal/30">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions about our project resources or want to collaborate?
            Reach out to us anytime.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-navy-card border border-teal/20 rounded-2xl p-8"
            data-ocid="contact.card"
          >
            <div className="space-y-6">
              <a
                href="tel:7760811104"
                data-ocid="contact.phone.link"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-teal/10 border border-border hover:border-teal/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide">
                    Phone
                  </div>
                  <div className="text-foreground font-semibold group-hover:text-teal transition-colors">
                    +91 7760811104
                  </div>
                </div>
              </a>

              <a
                href="mailto:futuretechworld80@gmail.com"
                data-ocid="contact.email.link"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-blue-brand/10 border border-border hover:border-blue-brand/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-brand/15 border border-blue-brand/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-light" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide">
                    Email
                  </div>
                  <div className="text-foreground font-semibold group-hover:text-blue-light transition-colors">
                    futuretechworld80@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary border border-border">
                <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide">
                    Location
                  </div>
                  <div className="text-foreground font-semibold">
                    Chamarajanagara, Karnataka
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-light border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center">
                <CircuitBoard className="w-4 h-4 text-teal" />
              </div>
              <div>
                <div className="font-bold text-foreground">
                  Future Tech World
                </div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Pvt Ltd
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students with hands-on robotics and IoT project
              knowledge for a future-ready career in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-teal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Project Resources
            </h4>
            <div className="space-y-2">
              {RESOURCES.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-teal transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {r.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Future Tech World Pvt Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CategoriesSection />
        <ResourcesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
