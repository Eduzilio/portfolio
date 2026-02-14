import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";

export function About() {
  const experience = [
    { year: "2023-atual", role: "Senior UX Designer", company: "Tech Startup" },
    { year: "2021-2023", role: "UX Designer", company: "Consultoria Digital" },
    { year: "2019-2021", role: "UX Researcher", company: "Fintech" },
  ];

  const skills = [
    "Pesquisa com Usuários",
    "Arquitetura de Informação",
    "Design de Interface",
    "Prototipagem",
    "Testes de Usabilidade",
    "Design Systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 sm:px-12 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Intro */}
          <div className="space-y-6">
            <h1 className="text-5xl tracking-tight">Sobre mim</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Há mais de 6 anos, venho transformando desafios complexos em experiências digitais que fazem sentido para quem as usa. Minha jornada começou com uma curiosidade genuína sobre o comportamento humano e evoluiu para uma paixão por criar produtos que resolvem problemas reais.
              </p>
              <p>
                Acredito que bom design é invisível — funciona tão bem que as pessoas nem percebem que está ali. É resultado de perguntas certas, escuta ativa e iteração constante. Não existe solução pronta; existe contexto, usuário e muito teste.
              </p>
              <p>
                Trabalho com a intersecção entre pesquisa qualitativa e design de interface, sempre buscando o equilíbrio entre o que é viável tecnicamente, desejável para o usuário e sustentável para o negócio.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h2 className="text-2xl">Experiência</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pb-6 border-b border-border/50 last:border-0"
                >
                  <span className="text-sm text-muted-foreground min-w-[120px]">
                    {exp.year}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h2 className="text-2xl">Habilidades</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-3 bg-muted/50 rounded-xl border border-border/30 text-sm text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-12">
            <div className="p-8 bg-muted/30 rounded-2xl border border-border/50 shadow-xl shadow-foreground/5 space-y-4">
              <h3 className="text-xl">Vamos conversar?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre aberto a novos desafios e colaborações. Se você tem um projeto interessante ou quer apenas trocar ideias sobre UX, ficarei feliz em conversar.
              </p>
              <a
                href="/contact"
                className="inline-block text-foreground hover:text-muted-foreground transition-colors"
              >
                Entre em contato →
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}