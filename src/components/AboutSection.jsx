import { Briefcase, Code, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CVDownloadModal } from "./CVDownloadModal";
import { useLanguage } from "../hooks/useLanguage";

export const AboutSection = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

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
            title: t('about.cv.downloadStarted'),
            description: `${selectedCV.title} ${t('about.cv.downloading')}`,
          });
        } else {
          throw new Error('CV not found');
        }
      })
      .catch(() => {
        toast({
          title: `${selectedCV.title} ${t('about.cv.comingSoon')}`,
          description: t('about.cv.contactEmail'),
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
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t('about.subtitle')}
            </h3>

            <p className="text-muted-foreground">
              {t('about.description1')}
            </p>

            <p className="text-muted-foreground">
              {t('about.description2')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t('about.getInTouch')}
              </a>

              <button
                onClick={openModal}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t('about.downloadCV')}
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
                  <h4 className="font-semibold text-lg">{t('about.webDev.title')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.webDev.description')}
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
                  <h4 className="font-semibold text-lg">{t('about.uiux.title')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.uiux.description')}
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
                  <h4 className="font-semibold text-lg">{t('about.pm.title')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.pm.description')}
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
