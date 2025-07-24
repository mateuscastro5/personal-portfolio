import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aspen CLI",
    description: "Modern command-line tool for creating backend projects with customizable options and robust framework support. Supports Express, Fastify, NestJS, AdonisJS with multiple ORMs and databases.",
    tags: ["TypeScript", "Node.js", "CLI", "Backend", "Express", "Fastify"],
    demoUrl: "https://www.npmjs.com/package/cli-aspen",
    githubUrl: "https://github.com/mateuscastro5/aspen",
  },
  {
    id: 2,
    title: "EduCS API",
    description: "Multi-tenant SaaS REST API for educational management with Spring Boot and PostgreSQL. Features JWT authentication, role-based access control, Docker deployment, and comprehensive student management system.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker", "Multi-tenant"],
    githubUrl: "https://github.com/Unusual-Software-Organization/educ-api",
  },
  {
    id: 3,
    title: "Electron React TS Template",
    description: "Complete template for building desktop applications with Electron, React, and TypeScript. Features modern development setup with Vite, ESLint, and HMR support.",
    tags: ["TypeScript", "React", "Electron", "Vite", "Desktop"],
    githubUrl: "https://github.com/mateuscastro5/template-electron-react-ts",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern and responsive portfolio website built with React and TailwindCSS. Features dark mode, animated backgrounds, project showcase, and contact form with smooth animations.",
    tags: ["React", "TailwindCSS", "Vite", "Portfolio"],
    githubUrl: "https://github.com/mateuscastro5/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my expertise in full-stack development. 
          From CLI tools to desktop applications, each project demonstrates different aspects of modern software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3"> {project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex justify-start items-center mt-auto">
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="View on NPM"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mateuscastro5"
          >
            View More Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
