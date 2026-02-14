import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted/50 hover:bg-muted transition-colors border border-border/30"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-foreground flex items-center justify-center shadow-md"
        animate={{
          x: theme === "dark" ? 28 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-background" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-background" />
        )}
      </motion.div>
    </button>
  );
}