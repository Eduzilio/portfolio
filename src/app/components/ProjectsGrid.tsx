import { Link } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-06qu19s9uc";
import { cases } from "../data/cases";
import gridDefaultImage from "figma:asset/f9353f8aa816a22361946d8f1b96277a66afbcf8.png";
import gridHoverImage from "figma:asset/d506bc31082382879c40043bc25b5d5cb16afc03.png";
import gridDefaultImage2 from "figma:asset/c2b28b048e1fbcdb781558920dcf563bb87df4a2.png";
import gridHoverImage2 from "figma:asset/095c67dd91defad371542c8285ba8bcdd816cdec.png";
import gridDefaultImage3 from "figma:asset/ab9446151e3144a924419f07e2526f3ab7b7355e.png";
import gridHoverImage3 from "figma:asset/37316a980dae617ce7064924d5c3619738c78f72.png";
import gridDefaultImage4 from "figma:asset/42a6f459755232eef491e6972b1f68ff6e5583a1.png";
import gridHoverImage4 from "figma:asset/2b7b47aec7966ac322519af822d30b6aa60b5d57.png";

interface ProjectCardProps {
  id: string;
  title: string;
  company: string;
  size: "large" | "medium" | "tall";
  hasImage?: boolean;
  imageSet?: 1 | 2 | 3 | 4;
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

function ProjectCard({ id, title, company, size, hasImage, imageSet = 1 }: ProjectCardProps) {
  // Classes de altura baseadas no tamanho - mobile e desktop separados
  const getHeightClasses = () => {
    if (size === "large") {
      return "h-[500px] lg:h-[612px]";
    } else if (size === "tall") {
      return "h-[500px] lg:h-[612px]";
    } else {
      return "h-[380px] lg:h-[294px]";
    }
  };
  
  // Intersection Observer para efeito de destaque no mobile
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ativa quando o card está pelo menos 60% visível
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      {
        threshold: [0, 0.6, 1],
        rootMargin: "-10% 0px -10% 0px"
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  // Selecionar o conjunto correto de imagens
  const defaultImage = imageSet === 4 ? gridDefaultImage4 : imageSet === 3 ? gridDefaultImage3 : imageSet === 2 ? gridDefaultImage2 : gridDefaultImage;
  const hoverImage = imageSet === 4 ? gridHoverImage4 : imageSet === 3 ? gridHoverImage3 : imageSet === 2 ? gridHoverImage2 : gridHoverImage;
  
  return (
    <Link to={`/case/${id}`}>
      <motion.div 
        ref={cardRef}
        className={`${getHeightClasses()} relative rounded-[11px] group cursor-pointer overflow-hidden`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Images */}
        {hasImage && (
          <>
            {/* Imagem default (linhas) - sempre visível, desaparece no hover (desktop) ou focus (mobile) */}
            <div className={`absolute inset-x-0 top-0 opacity-60 transition-opacity duration-500 pointer-events-none group-hover:opacity-0 ${isInView ? 'opacity-0 lg:opacity-60' : ''}`}>
              <img 
                src={defaultImage}
                alt="" 
                className="w-full h-auto object-cover object-top"
              />
            </div>
            
            {/* Imagem hover (colorida) - aparece no hover (desktop) ou focus (mobile) */}
            <div className={`absolute inset-x-0 top-0 opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100 ${isInView ? 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100' : ''}`}>
              <img 
                src={hoverImage}
                alt="" 
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </>
        )}
        
        {/* Border */}
        <div className={`absolute border border-[#4b4b4b]/75 inset-0 pointer-events-none rounded-[11px] transition-colors duration-300 group-hover:border-[#6F9D80]/50 ${isInView ? 'border-[#6F9D80]/50 lg:border-[#4b4b4b]/75 lg:group-hover:border-[#6F9D80]/50' : ''}`} />
        
        {/* Content */}
        <div className="relative flex flex-col justify-end size-full px-6 pt-6 pb-5 lg:px-10 lg:pt-10 lg:pb-7">
          <div className="flex flex-col items-start space-y-2">
            <ArrowIcon />
            
            <h3 className="text-[17px] leading-[20px] lg:text-[19px] lg:leading-[22px] text-white font-normal whitespace-pre-line">
              {title}
            </h3>
            
            <div className="text-[#6F9D80] text-[10px] lg:text-[11px] uppercase tracking-wide">
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
    { id: cases[0].id, title: "Jornada omnichannel\nem loja", company: "Riachuelo", size: "large" as const, hasImage: true, imageSet: 1 as const },
    { id: cases[1].id, title: "Plataforma de\nColaboração", company: "Microsoft", size: "medium" as const, hasImage: true, imageSet: 4 as const },
    { id: cases[2].id, title: "Sistema de Saúde\nAcessível", company: "Neoenergia", size: "medium" as const },
    { id: cases[0].id, title: "Redesign de App\nFinanceiro", company: "Santander", size: "medium" as const, hasImage: true, imageSet: 2 as const },
    { id: cases[1].id, title: "Redesign de\nPlataforma Digital", company: "Banco do Brasil", size: "tall" as const, hasImage: true, imageSet: 3 as const },
    { id: cases[2].id, title: "App de Gestão\nde Energia", company: "Neoenergia", size: "tall" as const },
    { id: cases[0].id, title: "Portal de Serviços\nDigitais", company: "Riachuelo", size: "medium" as const },
  ];

  return (
    <section className="w-full px-6 lg:px-0">
      {/* Grid responsivo - coluna única no mobile, grid assimétrico no desktop */}
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:auto-rows-[294px]">
        {/* Mobile: renderiza todos os cards em sequência */}
        {/* Desktop: mantém o layout assimétrico original */}
        
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