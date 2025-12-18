import { useState, useEffect } from "react";
import { X, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const PWAInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed or dismissed
    const dismissed = localStorage.getItem("pwa-banner-dismissed");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    
    if (dismissed || isStandalone) return;

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // For iOS, show banner after delay
    if (isIOSDevice) {
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }

    // For Android/Chrome, listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("pwa-banner-dismissed", "true");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="max-w-md mx-auto bg-card border border-border rounded-lg shadow-lg p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5 text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-sm font-semibold text-foreground mb-1">
              Install Cropxon App
            </h3>
            {isIOS ? (
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tap <span className="inline-flex items-center gap-1 font-medium text-foreground">Share <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3 3h-2v8h-2V5H9l3-3z"/><path d="M5 15v4h14v-4h2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-4h2z"/></svg></span> then <span className="font-medium text-foreground">"Add to Home Screen"</span>
              </p>
            ) : (
              <p className="text-xs text-muted-foreground leading-relaxed">
                Install for quick access and offline support
              </p>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Install button (Android only) */}
        {!isIOS && deferredPrompt && (
          <Button
            onClick={handleInstall}
            size="sm"
            className="w-full mt-3 text-xs"
          >
            <Download className="w-3 h-3 mr-2" />
            Install App
          </Button>
        )}

        {/* iOS instructions button */}
        {isIOS && (
          <Button
            onClick={handleDismiss}
            variant="outline"
            size="sm"
            className="w-full mt-3 text-xs"
          >
            Got it
          </Button>
        )}
      </div>
    </div>
  );
};

export default PWAInstallBanner;
