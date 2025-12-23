import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

type ColorTheme = "default" | "ocean" | "emerald" | "sunset" | "violet" | "rose";

const colorThemes: { id: ColorTheme; label: string; colors: string }[] = [
  { id: "default", label: "Default Blue", colors: "from-blue-500 to-indigo-600" },
  { id: "ocean", label: "Ocean Teal", colors: "from-cyan-500 to-teal-600" },
  { id: "emerald", label: "Emerald", colors: "from-emerald-500 to-green-600" },
  { id: "sunset", label: "Sunset Orange", colors: "from-orange-500 to-red-600" },
  { id: "violet", label: "Violet Purple", colors: "from-violet-500 to-purple-600" },
  { id: "rose", label: "Rose Pink", colors: "from-pink-500 to-rose-600" },
];

export function ThemeSelector() {
  const { setTheme, theme } = useTheme();
  const [colorTheme, setColorTheme] = useState<ColorTheme>("default");

  useEffect(() => {
    const saved = localStorage.getItem("colorTheme") as ColorTheme;
    if (saved) {
      setColorTheme(saved);
      applyColorTheme(saved);
    }
  }, []);

  const applyColorTheme = (themeId: ColorTheme) => {
    const root = document.documentElement;
    
    const themes: Record<ColorTheme, { primary: string; accent: string; ring: string }> = {
      default: { primary: "217 91% 60%", accent: "217 91% 60%", ring: "217 91% 60%" },
      ocean: { primary: "186 72% 45%", accent: "172 66% 45%", ring: "186 72% 45%" },
      emerald: { primary: "160 84% 39%", accent: "142 76% 36%", ring: "160 84% 39%" },
      sunset: { primary: "25 95% 53%", accent: "12 76% 61%", ring: "25 95% 53%" },
      violet: { primary: "263 70% 58%", accent: "271 81% 56%", ring: "263 70% 58%" },
      rose: { primary: "330 81% 60%", accent: "340 82% 52%", ring: "330 81% 60%" },
    };

    const colors = themes[themeId];
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--ring", colors.ring);
    root.style.setProperty("--sidebar-primary", colors.primary);
    root.style.setProperty("--sidebar-ring", colors.ring);
  };

  const handleColorTheme = (themeId: ColorTheme) => {
    setColorTheme(themeId);
    localStorage.setItem("colorTheme", themeId);
    applyColorTheme(themeId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Theme settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card border-border">
        <DropdownMenuLabel className="text-xs text-muted-foreground">Mode</DropdownMenuLabel>
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={theme === "light" ? "bg-muted" : ""}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "bg-muted" : ""}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={theme === "system" ? "bg-muted" : ""}
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs text-muted-foreground">Color Theme</DropdownMenuLabel>
        
        {colorThemes.map((ct) => (
          <DropdownMenuItem
            key={ct.id}
            onClick={() => handleColorTheme(ct.id)}
            className={colorTheme === ct.id ? "bg-muted" : ""}
          >
            <div className={`mr-2 h-4 w-4 rounded-full bg-gradient-to-br ${ct.colors}`} />
            <span>{ct.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
