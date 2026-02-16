import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Projetos" },
    { to: "/about", label: "Sobre" },
    { to: "/contact", label: "Contato" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(9, 8, 8, 0.8)" : "rgba(0, 0, 0, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
      }}
      style={{
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link to="/" className="group">
            <motion.div
              className="text-xl tracking-tight text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="">Eduardo Zilio</span>
            </motion.div>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-6 left-0 right-0 h-[1px] bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}