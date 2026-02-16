import { Link } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-06qu19s9uc";
import { cases } from "../data/cases";
import gridDefaultImage from "../../assets/f9353f8aa816a22361946d8f1b96277a66afbcf8.png";
import gridHoverImage from "../../assets/d506bc31082382879c40043bc25b5d5cb16afc03.png";

interface ProjectCardProps {
  id: string;
  title: string;
  company: string;
  size: "large" | "medium" | "tall";
  hasImage?: boolean;
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p2a924a00} fill="#6F9D80" />
      </svg>
    </div>
  );
}

function ProjectCard({ id, title, company, size, hasImage }: ProjectCardProps) {
  const heightClass = size === "large" ? "h-[612px]" : size === "tall" ? "h-[612px]" : "h-[294px]";
  
  return (
    <Link to={`/case/${id}`}>
      <motion.div 
        className={`${heightClass} relative rounded-[11px] group cursor-pointer overflow-hidden`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Images - apenas para o primeiro card */}
        {hasImage && (
          <>
            {/* Imagem default (linhas) - sempre visível, desaparece no hover */}
            <div className="absolute inset-x-0 top-0 opacity-60 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <img 
                src={gridDefaultImage}
                alt="" 
                className="w-full h-auto object-cover object-top"
              />
            </div>
            
            {/* Imagem hover (colorida) - aparece no hover */}
            <div className="absolute inset-x-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <img 
                src={gridHoverImage}
                alt="" 
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </>
        )}
        
        {/* Border */}
        <div className="absolute border border-[#4b4b4b] inset-0 pointer-events-none rounded-[11px] group-hover:border-[#6F9D80]/50 transition-colors duration-300" />
        
        {/* Content */}
        <div className="relative flex flex-col justify-end size-full p-10">
          <div className="flex flex-col items-start space-y-2">
            <ArrowIcon />
            
            <h3 className="text-[19px] leading-[22px] text-white font-normal whitespace-pre-line">
              {title}
            </h3>
            
            <div className="text-[#6F9D80] text-[11px] uppercase tracking-wide">
              {company}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function ProjectsGrid() {
  // Mapear os cases existentes para o grid - 7 projetos para grid uniforme
  const projects = [
    { id: cases[0].id, title: "Jornada omnichannel\nem loja", company: "Riachuelo", size: "large" as const, hasImage: true },
    { id: cases[1].id, title: "Plataforma de\nColaboração", company: "Microsoft", size: "medium" as const },
    { id: cases[2].id, title: "Sistema de Saúde\nAcessível", company: "Neoenergia", size: "medium" as const },
    { id: cases[0].id, title: "Redesign de App\nFinanceiro", company: "Santander", size: "medium" as const },
    { id: cases[1].id, title: "Redesign de\nPlataforma Digital", company: "Banco do Brasil", size: "tall" as const },
    { id: cases[2].id, title: "App de Gestão\nde Energia", company: "Neoenergia", size: "tall" as const },
    { id: cases[0].id, title: "Portal de Serviços\nDigitais", company: "Riachuelo", size: "medium" as const },
  ];

  return (
    <section className="w-full">
      {/* Grid com layout assimétrico - seguindo exatamente o design do Figma */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[294px]">
        {/* Row 1, Col 1-2: Large card (2 cols, 2 rows) */}
        <div className="lg:col-span-2 lg:row-span-2">
          <ProjectCard {...projects[0]} />
        </div>
        
        {/* Row 1, Col 3: Medium card */}
        <div>
          <ProjectCard {...projects[1]} />
        </div>
        
        {/* Row 2, Col 3: Medium card */}
        <div>
          <ProjectCard {...projects[2]} />
        </div>

        {/* Row 3-4: 1 medium + 2 tall cards */}
        <div>
          <ProjectCard {...projects[3]} />
        </div>
        <div className="lg:row-span-2">
          <ProjectCard {...projects[4]} />
        </div>
        <div className="lg:row-span-2">
          <ProjectCard {...projects[5]} />
        </div>

        {/* Row 4: 1 medium card (completa a coluna 1) */}
        <div>
          <ProjectCard {...projects[6]} />
        </div>
      </div>
    </section>
  );
}