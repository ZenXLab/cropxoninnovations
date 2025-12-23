import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cropxon_cookie_consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (!consent) {
      // Only show if no consent has been stored
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      marketing: true,
      accepted: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    const consentData = {
      essential: true,
      analytics: false,
      marketing: false,
      accepted: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // Dismiss stores a "dismissed" state so it won't show again in this session
    const consentData = {
      essential: true,
      analytics: false,
      marketing: false,
      dismissed: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[100] p-4"
      style={{
        animation: 'cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="max-w-2xl mx-auto bg-[#0c0c14]/95 backdrop-blur-xl border border-border/20 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">
                    Cookie Preferences
                  </h3>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    We use cookies to enhance your experience. By continuing, you agree to our{" "}
                    <Link to="/cookies" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
                <button
                  onClick={handleDismiss}
                  className="p-1 text-muted-foreground/50 hover:text-foreground transition-colors shrink-0"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 mt-4">
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="text-xs font-medium h-8 px-4"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleAcceptEssential}
                  variant="outline"
                  size="sm"
                  className="text-xs font-medium h-8 px-4 bg-transparent border-border/30 hover:bg-foreground/5"
                >
                  Essential Only
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
