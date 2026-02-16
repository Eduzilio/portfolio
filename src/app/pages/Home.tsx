import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { CompaniesSection } from "../components/CompaniesSection";
import { ProjectsGrid } from "../components/ProjectsGrid";

export function Home() {
  const { scrollY } = useScroll();
  const gradientY = useTransform(scrollY, [0, 500], ["20%", "80%"]);

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />

      {/* Hero Section - New Full Height */}
      <HeroSection />

      {/* Animated gradient background with parallax - starts after hero */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: useTransform(
            gradientY,
            (y) => `radial-gradient(circle at 20% ${y}, rgba(111, 157, 128, 0.10) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(111, 157, 128, 0.08) 0%, transparent 50%)`
          ),
        }}
      />

      {/* Projects Grid */}
      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-32 pt-16">
          <ProjectsGrid />
        </section>

        {/* Companies Section */}
        <CompaniesSection />
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-32 border-t border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-6">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Estou sempre aberto a conversar sobre novos desafios e oportunidades de colaboração.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-xl shadow-lg shadow-foreground/10"
          >
            <span>Entre em contato</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-12 py-12 border-t border-border/50">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-sm text-muted-foreground">
          <div>
            <p>© 2026 Seu Nome. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://behance.net" className="hover:text-foreground transition-colors">
              Behance
            </a>
            <a href="mailto:seu@email.com" className="hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}