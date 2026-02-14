import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { cases } from "../data/cases";

export function CaseStudy() {
  const { id } = useParams();
  const caseData = cases.find((c) => c.id === id);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Case não encontrado</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ← Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para projetos
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{caseData.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>{caseData.year}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl tracking-tight max-w-3xl">
            {caseData.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {caseData.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-[16/9] bg-muted overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-foreground/10"
        >
          <img
            src={caseData.image}
            alt={caseData.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Meta Info */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 p-8 bg-muted/30 rounded-2xl border border-border/50 shadow-lg shadow-foreground/5">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Função</p>
            <p>{caseData.role}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Duração</p>
            <p>{caseData.duration}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Ferramentas</p>
            <p>{caseData.tools.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 sm:px-12 pb-24 space-y-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl">Contexto</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {caseData.overview}
          </p>
        </motion.div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl">Desafio</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {caseData.challenge}
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl">Solução</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {caseData.solution}
          </p>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl">Impacto</h2>
          <div className="space-y-4">
            {caseData.impact.map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Next Case */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-border/50">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Próximo projeto</p>
            <Link to="/" className="text-xl hover:text-muted-foreground transition-colors">
              Ver todos os cases →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}