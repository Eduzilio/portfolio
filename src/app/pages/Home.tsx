import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { cases } from "../data/cases";
import { otherProjects } from "../data/otherProjects";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-32 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="mb-6 text-sm tracking-widest text-muted-foreground uppercase">
            UX Designer
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl tracking-tight mb-8 leading-[0.95]">
            Criando experiências
            <span className="block text-muted-foreground italic">memoráveis</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Transformo complexidade em clareza através de pesquisa profunda,
            design estratégico e atenção obsessiva aos detalhes.
          </p>
        </motion.div>
      </section>

      {/* Companies Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 text-center">
            <div className="text-sm tracking-widest text-muted-foreground uppercase mb-2">
              Colaborações
            </div>
            <h3 className="text-2xl sm:text-3xl tracking-tight">
              Empresas com quem trabalhei
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['Santander', 'Riachuelo', 'Neoenergia', 'Banco do Brasil', 'Microsoft', 'Unimed'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center w-full"
              >
                <div className="text-lg font-medium text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Cases - Estilizado */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-32">
        <div className="space-y-32">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Link
                to={`/case/${caseItem.id}`}
                className="group block"
              >
                {/* Index Number */}
                <div className="absolute -top-8 sm:-top-12 left-0 text-7xl sm:text-9xl font-bold text-muted/20 select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
                  {/* Image - Different layouts per case */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 0
                        ? 'lg:col-span-7 lg:col-start-1'
                        : 'lg:col-span-7 lg:col-start-6'
                    } ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}
                  >
                    <div className="relative aspect-[4/3] lg:aspect-[3/2] bg-muted overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-foreground/5">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                      
                      <motion.img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Floating label */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="px-4 py-2 bg-background/90 backdrop-blur-sm border border-border/50 rounded-full text-xs tracking-wider shadow-lg">
                          {caseItem.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center ${
                      index % 2 === 0
                        ? 'lg:col-span-5 lg:col-start-8'
                        : 'lg:col-span-5 lg:col-start-1'
                    } ${index % 2 === 0 ? 'order-1 lg:order-2 pb-8 lg:pb-0' : 'order-1 pb-8 lg:pb-0'} space-y-6`}
                  >
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground tracking-wider">
                        {caseItem.year}
                      </div>
                      <h2 className="text-4xl sm:text-5xl tracking-tight leading-tight">
                        {caseItem.title}
                      </h2>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {caseItem.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-sm pt-4 group-hover:gap-3 transition-all">
                      <span>Explorar projeto</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: '#F33D00' }} />
                    </div>
                  </div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-32 border-t border-border/50 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <div className="text-sm tracking-widest text-muted-foreground uppercase mb-2">
              Portfólio Complementar
            </div>
            <h3 className="text-3xl sm:text-4xl tracking-tight">
              Outros trabalhos
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Além dos cases em destaque, desenvolvi diversos projetos que exploram diferentes aspectos do design de experiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card hover:border-border transition-all duration-300 shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1 bg-background/90 backdrop-blur-sm border border-border/50 rounded-full text-xs tracking-wider">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl tracking-tight group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs text-muted-foreground tracking-wider">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

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