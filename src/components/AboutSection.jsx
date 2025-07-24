import { Briefcase, Code, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CVDownloadModal } from "./CVDownloadModal";

export const AboutSection = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadCV = (type) => {
    const cvFiles = {
      frontend: {
        path: '/assets/mateus-fagundes-frontend-cv.pdf',
        name: 'Mateus_Fagundes_Frontend_CV.pdf',
        title: 'CV Frontend'
      },
      backend: {
        path: '/assets/mateus-fagundes-backend-cv.pdf', 
        name: 'Mateus_Fagundes_Backend_CV.pdf',
        title: 'CV Backend'
      }
    };

    const selectedCV = cvFiles[type];
    
    const link = document.createElement('a');
    link.href = selectedCV.path;
    link.download = selectedCV.name;
    
    fetch(selectedCV.path, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          link.click();
          toast({
            title: "Download started!",
            description: `${selectedCV.title} is being downloaded.`,
          });
        } else {
          throw new Error('CV not found');
        }
      })
      .catch(() => {
        toast({
          title: `${selectedCV.title} is coming soon!`,
          description: "The CV will be available soon. Please contact me via email.",
        });
      });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I&apos;m passionate about creating elegant solutions to complex
              problems, and I&apos;m constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <button
                onClick={openModal}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Download Modal */}
      <CVDownloadModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onDownload={handleDownloadCV}
      />
    </section>
  );
};
