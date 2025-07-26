import { X, Download, Code, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../hooks/useLanguage";

// eslint-disable-next-line react/prop-types
export const CVDownloadModal = ({ isOpen, onClose, onDownload }) => {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  const handleDownload = (type) => {
    onDownload(type);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-lg shadow-lg p-8 max-w-md w-full mx-4 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/80 transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            {t('cvModal.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('cvModal.subtitle')}
          </p>
        </div>

        {/* CV Options */}
        <div className="space-y-4">
          {/* Frontend CV */}
          <button
            onClick={() => handleDownload('frontend')}
            className={cn(
              "w-full p-6 rounded-lg border border-border",
              "hover:border-primary hover:bg-primary/5 transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "group"
            )}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left flex-1">
                <h4 className="font-semibold text-lg">{t('cvModal.frontend')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('cvModal.frontendDesc')}
                </p>
              </div>
              <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </button>

          {/* Backend CV */}
          <button
            onClick={() => handleDownload('backend')}
            className={cn(
              "w-full p-6 rounded-lg border border-border",
              "hover:border-primary hover:bg-primary/5 transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "group"
            )}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left flex-1">
                <h4 className="font-semibold text-lg">{t('cvModal.backend')}</h4>
                <p className="text-muted-foreground text-sm">
                  {t('cvModal.backendDesc')}
                </p>
              </div>
              <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {t('cvModal.footer')}
          </p>
        </div>
      </div>
    </div>
  );
};
