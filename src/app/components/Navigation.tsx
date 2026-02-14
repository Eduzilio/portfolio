import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Projetos" },
    { to: "/about", label: "Sobre" },
    { to: "/contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link to="/" className="group">
            <motion.div
              className="text-xl tracking-tight text-foreground"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            ><span className="">Eduardo Zilio</span></motion.div>
          </Link>

          {/* Links + Theme Toggle */}
          <div className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-6 left-0 right-0 h-[1px] bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}