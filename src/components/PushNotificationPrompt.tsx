import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bell, X } from "lucide-react";

const PushNotificationPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if push notifications are supported
    const supported = "Notification" in window && "serviceWorker" in navigator;
    setIsSupported(supported);

    if (!supported) return;

    // Check if user has already responded to the prompt
    const hasResponded = localStorage.getItem("pushNotificationPrompt");
    const permission = Notification.permission;

    // Show prompt only if supported, not already granted/denied, and hasn't been dismissed
    if (permission === "default" && !hasResponded) {
      const timer = setTimeout(() => setIsVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnable = async () => {
    try {
      const permission = await Notification.requestPermission();
      localStorage.setItem("pushNotificationPrompt", "responded");
      
      if (permission === "granted") {
        // Show a test notification
        new Notification("CropXon Notifications Enabled", {
          body: "You'll receive updates about new products and announcements.",
          icon: "/pwa-192x192.png",
          badge: "/pwa-192x192.png",
        });
      }
      setIsVisible(false);
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem("pushNotificationPrompt", "dismissed");
    setIsVisible(false);
  };

  if (!isVisible || !isSupported) return null;

  return (
    <div className="fixed top-20 right-4 z-[90] animate-fade-in max-w-sm">
      <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  Stay Updated
                </h3>
                <button
                  onClick={handleDismiss}
                  className="p-0.5 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Get notified about new products, features, and company announcements.
              </p>

              <div className="flex items-center gap-2 mt-3">
                <Button
                  onClick={handleEnable}
                  size="sm"
                  className="text-xs font-medium h-8"
                >
                  Enable Notifications
                </Button>
                <Button
                  onClick={handleDismiss}
                  variant="ghost"
                  size="sm"
                  className="text-xs font-medium h-8"
                >
                  Not Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotificationPrompt;
