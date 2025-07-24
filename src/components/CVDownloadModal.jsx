import { X, Download, Code, Server } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line react/prop-types
export const CVDownloadModal = ({ isOpen, onClose, onDownload }) => {
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
            Download <span className="text-primary">CV</span>
          </h3>
          <p className="text-muted-foreground">
            Choose the version of the CV you would like to download
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
                <h4 className="font-semibold text-lg">Frontend Developer</h4>
                <p className="text-muted-foreground text-sm">
                  React, JavaScript, CSS, UI/UX
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
                <h4 className="font-semibold text-lg">Backend Developer</h4>
                <p className="text-muted-foreground text-sm">
                  Node.js, Databases, APIs, Server-side
                </p>
              </div>
              <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Both CVs highlight different aspects of my experience and skills.
          </p>
        </div>
      </div>
    </div>
  );
};
