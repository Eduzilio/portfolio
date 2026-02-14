export interface Case {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  role: string;
  duration: string;
  tools: string[];
}

export const cases: Case[] = [
  {
    id: "fintech-redesign",
    title: "Redesign de App Financeiro",
    subtitle: "Simplificando a gestão financeira pessoal",
    category: "Mobile App",
    year: "2025",
    image: "https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwdUklMjBtb2NrdXAlMjBwZXJzcGVjdGl2ZXxlbnwxfHx8fDE3NzEwODcyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: "O aplicativo de gestão financeira enfrentava altas taxas de abandono e baixo engajamento. Usuários relatavam dificuldade em entender suas finanças e se sentiam sobrecarregados pela quantidade de informações na tela.",
    challenge: "Como podemos tornar a gestão financeira intuitiva e menos intimidadora, especialmente para usuários que não têm familiaridade com conceitos financeiros complexos?",
    solution: "Desenvolvi uma nova arquitetura de informação focada em progressão gradual e visualizações simplificadas. Implementei um dashboard modular que revela complexidade sob demanda, permitindo que usuários iniciantes vejam apenas o essencial enquanto usuários avançados acessam análises detalhadas. A paleta de cores foi redesenhada para transmitir confiança sem seriedade excessiva.",
    impact: [
      "Redução de 42% na taxa de abandono nos primeiros 7 dias",
      "Aumento de 65% no tempo médio de sessão",
      "NPS aumentou de 32 para 68 em 3 meses",
      "89% dos usuários completam o onboarding (vs. 43% anterior)"
    ],
    role: "Lead UX Designer",
    duration: "4 meses",
    tools: ["Figma", "Maze", "Hotjar", "Google Analytics"]
  },
  {
    id: "workspace-collaboration",
    title: "Plataforma de Colaboração",
    subtitle: "Conectando equipes remotas com eficiência",
    category: "Web App",
    year: "2024",
    image: "https://images.unsplash.com/photo-1764795849878-59b546cfe9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB1c2luZyUyMHRvdWNoc2NyZWVuJTIwa2lvc2slMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3NzEwODcyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: "Com a transição para o trabalho remoto, a empresa precisava de uma solução que centralizasse comunicação, documentos e gerenciamento de projetos sem criar mais uma ferramenta que gerasse fadiga digital.",
    challenge: "Como criar uma plataforma que consolide múltiplas ferramentas sem sobrecarregar cognitivamente os usuários, respeitando diferentes estilos de trabalho e fusos horários?",
    solution: "Conduzi entrevistas em profundidade com 24 usuários em 5 países diferentes, mapeando jornadas e pontos de atrito. Propus um sistema de 'workspaces contextuais' que adapta a interface baseado na tarefa atual. Implementei notificações inteligentes que respeitam fusos e preferências, além de um modo 'deep work' que minimiza distrações.",
    impact: [
      "Redução de 31% no número de ferramentas utilizadas por equipe",
      "Aumento de 54% na percepção de produtividade (survey interno)",
      "Diminuição de 28% em reuniões desnecessárias",
      "Adoção de 91% em 2 meses após lançamento"
    ],
    role: "UX Researcher & Designer",
    duration: "6 meses",
    tools: ["Figma", "Miro", "UserTesting", "Amplitude"]
  },
  {
    id: "healthcare-accessibility",
    title: "Sistema de Saúde Acessível",
    subtitle: "Democratizando o acesso a consultas médicas",
    category: "Mobile + Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmQlMjBpZGVudGl0eSUyMGRlc2lnbiUyMGRldGFpbHxlbnwxfHx8fDE3NzEwODcyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: "Plataforma de telemedicina que atendia principalmente população de baixa renda precisava melhorar acessibilidade e taxas de comparecimento às consultas agendadas.",
    challenge: "Como projetar uma experiência que seja acessível para usuários com diferentes níveis de letramento digital, conexões instáveis e dispositivos variados, mantendo conformidade com regulamentações de saúde?",
    solution: "Realizei pesquisa etnográfica em comunidades atendidas, identificando barreiras reais de acesso. Desenvolvi um sistema de design progressivo que funciona em conexões 2G, com componentes que degradam graciosamente. Implementei lembretes via SMS além de push notifications, linguagem simplificada e opções de áudio para instruções críticas. Criei um fluxo de triagem visual que reduz dependência de texto.",
    impact: [
      "Aumento de 73% na taxa de comparecimento em consultas",
      "Redução de 58% em suporte técnico necessário",
      "Interface funcional em 98% dos dispositivos testados",
      "Tempo médio de agendamento reduzido de 8min para 2min"
    ],
    role: "Senior UX Designer",
    duration: "5 meses",
    tools: ["Figma", "Optimal Workshop", "Lookback", "UserZoom"]
  }
];