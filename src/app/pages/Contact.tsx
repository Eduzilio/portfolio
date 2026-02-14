import { motion } from "motion/react";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Navigation } from "../components/Navigation";

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "seu@email.com",
      href: "mailto:seu@email.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/seu-perfil",
      href: "https://linkedin.com/in/seu-perfil",
    },
    {
      icon: FileText,
      label: "Behance",
      value: "/seu-portfolio",
      href: "https://behance.net/seu-portfolio",
    },
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
          {/* Header */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl tracking-tight">Vamos conversar</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estou disponível para novos projetos, colaborações ou apenas uma boa conversa sobre design e experiência do usuário.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-muted/30 hover:bg-muted/50 rounded-2xl border border-border/50 shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 transition-all"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      <p className="text-sm break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="pt-8 space-y-6 max-w-2xl">
            <h2 className="text-2xl">Estou procurando por</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                • Projetos que envolvam pesquisa com usuários e design estratégico
              </p>
              <p>
                • Oportunidades de colaboração com equipes multidisciplinares
              </p>
              <p>
                • Desafios que exijam pensar além da interface
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="p-8 bg-muted/30 rounded-2xl border border-border/50 shadow-lg shadow-foreground/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm">Disponível para novos projetos</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Tempo médio de resposta: 24 horas
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}