import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import svgPaths from "../../imports/svg-l9301e7yl1";
import heroImage from "/images/hero.png";

const rotatingPhrases = [
  { first: "fluxos em", last: "experiências" },
  { first: "complexidade em", last: "clareza" },
  { first: "ideias em", last: "produtos digitais" },
  { first: "estratégia em", last: "interface" },
];

export function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effect - move image slower than scroll
  const imageY = useTransform(scrollY, [0, 600], [0, -150]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3500); // Troca a cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = rotatingPhrases[currentPhraseIndex];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#090808]">
      {/* Background Image - Right Side with Parallax */}
      <div className="absolute inset-0">        
        {/* Image container - Let it expand and overflow */}
        <motion.div 
          className="hidden lg:block absolute -right-[5%] -top-[10%] -bottom-[10%] w-[70%] xl:w-[65%]"
          style={{ y: imageY, scale: imageScale }}
        >
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 pt-20 lg:py-20 lg:pt-28">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.div
            className="mb-4 lg:mb-5 text-xs lg:text-sm tracking-[1.2px] lg:tracking-[1.4px] uppercase text-[#f5dcba]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Product Designer • UX Strategy
          </motion.div>

          {/* Main Title with Rotating Words */}
          <div className="text-[32px] sm:text-4xl lg:text-5xl xl:text-[72px] tracking-[-0.035em] leading-[1.1] mb-6 lg:mb-8">
            <motion.div
              className="font-light text-[#fafafa]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transformando
            </motion.div>

            {/* Animated Rotating Phrases - Force single line */}
            <div className="relative h-[1.2em] sm:h-[1.15em]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  className="absolute inset-0 font-semibold text-[#fafafa] whitespace-nowrap"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {currentPhrase.first}{" "}
                  <span className="italic text-[#f5dcba]">{currentPhrase.last}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Design para bancos, fintechs e grandes organizações.
          </motion.p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 cursor-pointer hover:opacity-70 transition-opacity"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ y: 5 }}
        aria-label="Scroll to content"
      >
        <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.pe1c6300} fill="white" />
        </svg>
      </motion.button>

      {/* Mobile background image overlay */}
      <div className="lg:hidden absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101] via-[#010101]/80 to-[#010101]" />
      </div>
    </section>
  );
}