type Props = {
    text?: string;
    color?: string; // hex or tailwind color value
  };
  
  export default function CategoryLabel({
    text = "SUB SOCCER SOUNDBARS",
    color = "#facc15", // default yellow-400
  }: Props) {
    return (
      <div
        className="relative inline-block px-6 py-2 text-xs tracking-widest font-medium bg-white/10 border border-white/30"
       style={{ color, textColor: color }}>
        {/* corners */}
        <span style={{ borderColor: color }} className="absolute -top-[2px] -left-[2px] w-2 h-2  border-t border-l"></span>
        <span style={{ borderColor: color }} className="absolute -top-[2px] -right-[2px] w-2 h-2  border-t border-r"></span>
        <span style={{ borderColor: color }} className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b border-l"></span>
        <span style={{ borderColor: color }} className="absolute -bottom-[2px] -right-[2px] w-2 h-2  border-b border-r"></span>
  
        {text}
      </div>
    );
  }
  