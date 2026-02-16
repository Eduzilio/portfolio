import svgPaths from "./svg-l9301e7yl1";
import imgShutterstock27150447412 from "figma:asset/f8450600b8b8a051e24607a7f1a85154f331dbbb.png";

function Group1() {
  return (
    <div className="absolute contents left-[-115px] top-[-83px]">
      <div className="absolute h-[998px] left-[406px] top-[-83px] w-[1659px]" data-name="shutterstock_2715044741 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShutterstock27150447412} />
      </div>
      <div className="absolute bg-[#010101] h-[998px] left-[-115px] top-[-83px] w-[598px]" />
    </div>
  );
}

function ArrowCircleDown24Dp5F6368Fill0Wght300Grad0Opsz() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[40px] top-[589px]" data-name="arrow_circle_down_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow_circle_down_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1) 1">
          <path d={svgPaths.pe1c6300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 h-[20px] ml-0 mt-0 relative row-1 w-[1150px]" data-name="Container">
      <p className="absolute font-['Work_Sans:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#f5dcba] text-[14px] top-0 tracking-[1.4px] uppercase">Product Designer • UX Strategy</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#fafafa] text-[86px] tracking-[-3px] w-full whitespace-pre-wrap">
      <p className="font-['Work_Sans:Light',sans-serif] leading-[95px] relative shrink-0 w-full">Transformando</p>
      <p className="font-['Work_Sans:SemiBold',sans-serif] leading-[0] relative shrink-0 w-full">
        <span className="leading-[95px]">{`fluxos em `}</span>
        <span className="font-['Work_Sans:SemiBold_Italic',sans-serif] italic leading-[95px] text-[#f5dcba]">experiências</span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Group />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[139px] top-[190px] w-[1150px]">
      <Frame1 />
      <p className="font-['Work_Sans:Regular',sans-serif] leading-[32.5px] not-italic relative shrink-0 text-[24px] text-white w-full whitespace-pre-wrap">Design para bancos, fintechs e grandes organizações.</p>
    </div>
  );
}

export default function Topo() {
  return (
    <div className="bg-white relative size-full" data-name="Topo">
      <Group1 />
      <ArrowCircleDown24Dp5F6368Fill0Wght300Grad0Opsz />
      <Frame2 />
    </div>
  );
}