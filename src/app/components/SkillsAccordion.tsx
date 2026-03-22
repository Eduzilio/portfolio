import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface SkillItem {
  id: string;
  title: string;
  description: string;
}

const skills: SkillItem[] = [
  {
    id: "1",
    title: "Pensamento sistêmico",
    description: "Capacidade de compreender produtos além das interfaces, considerando fluxos, regras de negócio, dependências técnicas e impacto em diferentes áreas. Atuo conectando pontos entre experiência do usuário, objetivos organizacionais e viabilidade de implementação, especialmente em contextos complexos."
  },
  {
    id: "2",
    title: "Visão de negócio",
    description: "Alinho soluções de design aos objetivos estratégicos da organização, considerando métricas, custos, viabilidade e retorno. Traduzo necessidades do negócio em experiências que equilibram valor para o usuário e sustentabilidade do produto."
  },
  {
    id: "3",
    title: "Comunicação estratégica",
    description: "Apresento decisões de design com clareza para diferentes públicos — de desenvolvedores a executivos — usando linguagem apropriada e evidências relevantes. Documento processos e facilito alinhamentos entre áreas, garantindo que todos entendam o propósito das escolhas."
  },
  {
    id: "4",
    title: "Base visual sólida",
    description: "Domínio de fundamentos visuais (tipografia, cor, hierarquia, espaçamento) aplicados com intencionalidade. Construo interfaces coerentes que respeitam identidades de marca, garantem acessibilidade e facilitam a compreensão, sem depender de tendências passageiras."
  },
  {
    id: "5",
    title: "Adaptação a diferentes contextos",
    description: "Experiência em diversos setores (financeiro, varejo, energia, tecnologia) me permite adaptar abordagens conforme maturidade, cultura organizacional e restrições específicas. Consigo transitar entre projetos exploratórios e otimizações incrementais."
  }
];

export function SkillsAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 lg:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-light text-white mb-4 lg:mb-6 tracking-tight" style={{ letterSpacing: '0.05em' }}>
          Abordagem e competências
        </h2>
        <p className="text-xs sm:text-sm text-white/80">
          Experiência construída em contextos complexos, conectando design, negócio e tecnologia.
        </p>
      </motion.div>

      {/* Accordion Items */}
      <div className="space-y-0">
        {skills.map((skill, index) => {
          const isOpen = openId === skill.id;
          
          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Accordion Item */}
              <button
                onClick={() => toggleItem(skill.id)}
                className="w-full text-left group cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-4 lg:gap-8 py-6 lg:py-10 border-b border-[#4b4b4b] transition-all duration-300 hover:border-[#6F9D80]">
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-[24px] font-light text-white uppercase tracking-tight" style={{ letterSpacing: '0.05em' }}>
                    {skill.title}
                  </h3>
                  
                  {/* Icon */}
                  <div className="shrink-0 size-8 lg:size-10 flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="size-5 lg:size-6 text-[#6F9D80]" strokeWidth={1.5} />
                    ) : (
                      <Plus className="size-5 lg:size-6 text-[#5f6368] transition-colors duration-300 group-hover:text-[#6F9D80]" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 lg:py-8 pl-0 lg:pl-12 pr-0 lg:pr-16">
                      <p className="text-sm sm:text-base text-white leading-6 lg:leading-7 max-w-3xl">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}