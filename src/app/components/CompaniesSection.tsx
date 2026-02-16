import { motion } from "motion/react";
import svgPaths from "../../imports/svg-tjvdcu65zc";
import imgBgClientes from "figma:asset/011a40225988e78f567a52ec9f1453d345366db1.png";

// Logo Components from Figma - Equalized sizes
function LogoMidway() {
  return (
    <svg className="h-6 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 93 32">
      <g clipPath="url(#clip0_13_128)">
        <path d={svgPaths.p12580400} fill="white" />
        <path d={svgPaths.p752cd80} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p2a2d3700} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p390a7700} fill="white" />
        <path clipRule="evenodd" d={svgPaths.p24fa13e0} fill="white" fillRule="evenodd" />
        <path d={svgPaths.p14d76000} fill="white" />
        <path d={svgPaths.p258bd500} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_13_128">
          <rect fill="white" height="32" width="93" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogoNeoenergia() {
  return (
    <svg className="h-10 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 196 59">
      <g clipPath="url(#clip0_13_137)">
        <path d={svgPaths.p15227c0} fill="white" />
        <path d={svgPaths.p31925900} fill="white" />
        <path d={svgPaths.p4434900} fill="white" />
        <path d={svgPaths.p2a21a2c0} fill="white" />
        <path d={svgPaths.p10f0ee80} fill="white" />
        <path d={svgPaths.p17559e00} fill="white" />
        <path d={svgPaths.p2ae2e100} fill="white" />
        <path d={svgPaths.p2224a1c0} fill="white" />
        <path d={svgPaths.p1d928280} fill="white" />
        <path d={svgPaths.p33d653c0} fill="white" />
        <path d={svgPaths.p161a92c0} fill="white" />
        <path d={svgPaths.p1f759a00} fill="white" />
        <path d={svgPaths.p3a7b6a00} fill="white" />
        <path d={svgPaths.pfd8ec40} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_13_137">
          <rect fill="white" height="59" width="196" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogoSantander() {
  return (
    <svg className="h-6 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 168 30">
      <g clipPath="url(#clip0_13_154)">
        <path d={svgPaths.p111df80} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_13_154">
          <rect fill="white" height="30" width="168" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogoRiachuelo() {
  return (
    <svg className="h-4 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 160 21.7143">
      <g clipPath="url(#clip0_13_123)">
        <path d={svgPaths.p1bde8a80} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_13_123">
          <rect fill="white" height="21.7143" width="160" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogoNttData() {
  return (
    <svg className="h-6 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 139.906 28.6">
      <g>
        <path clipRule="evenodd" d={svgPaths.p3bf84e00} fill="white" fillRule="evenodd" />
        <g>
          <path d={svgPaths.p165d8a00} fill="white" />
          <path d={svgPaths.p3ff63b0} fill="white" />
          <path d={svgPaths.p3dcf2f00} fill="white" />
          <path d={svgPaths.p28e34b80} fill="white" />
          <path d={svgPaths.p2107db00} fill="white" />
          <path d={svgPaths.p182cdc00} fill="white" />
          <path d={svgPaths.p3549a700} fill="white" />
        </g>
      </g>
    </svg>
  );
}

function LogoMicrosoft() {
  return (
    <svg className="h-6 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 119 26">
      <g clipPath="url(#clip0_13_105)">
        <path d={svgPaths.p1b408f00} fill="white" />
        <path d={svgPaths.p2600300} fill="white" />
        <path d={svgPaths.p14867b80} fill="white" />
        <path d={svgPaths.p89f5700} fill="white" />
        <path d={svgPaths.p3565c200} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_13_105">
          <rect fill="white" height="26" width="119" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LogoBancoDoBrasil() {
  return (
    <svg className="h-5 w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 193 29.7143">
      <path clipRule="evenodd" d={svgPaths.p15d48371} fill="white" fillRule="evenodd" />
    </svg>
  );
}

export function CompaniesSection() {
  const logos = [
    { Component: LogoMidway, name: "Midway" },
    { Component: LogoNeoenergia, name: "Neoenergia" },
    { Component: LogoSantander, name: "Santander" },
    { Component: LogoRiachuelo, name: "Riachuelo" },
    { Component: LogoNttData, name: "NTT Data" },
    { Component: LogoMicrosoft, name: "Microsoft" },
    { Component: LogoBancoDoBrasil, name: "Banco do Brasil" },
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgBgClientes}
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Empresas com<br />quem já trabalhei
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Experiência colaborando com times multidisciplinares na construção e melhoria de produtos digitais, lidando com contextos complexos, restrições reais e objetivos de negócio.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Scrolling Logos - Full Width */}
      <div className="relative overflow-hidden mb-10">
        <div className="flex gap-6 animate-scroll">
          {/* First set of logos */}
          {logos.map(({ Component, name }, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-20 w-48 border border-white/15 rounded-full bg-white/5 backdrop-blur-sm"
            >
              <Component />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map(({ Component, name }, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-20 w-48 border border-white/15 rounded-full bg-white/5 backdrop-blur-sm"
            >
              <Component />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for infinite scroll */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}