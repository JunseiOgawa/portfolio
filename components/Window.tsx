import { CSSProperties, ReactNode } from "react";

interface WindowProps {
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
  statusBar?: string;
  style?: CSSProperties;
}

export default function Window({
  title,
  icon = "💻",
  children,
  className = "",
  statusBar,
  style,
}: WindowProps) {
  return (
    <div className={`win95-window flex flex-col ${className}`} style={style}>
      {/* Title Bar */}
      <div className="win95-titlebar">
        <div className="win95-titlebar-left">
          <span className="text-xs">{icon}</span>
          <span className="truncate">{title}</span>
        </div>
        <div className="win95-titlebar-btns">
          <div className="win95-titlebar-btn">_</div>
          <div className="win95-titlebar-btn">□</div>
          <div className="win95-titlebar-btn">✕</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-3" style={{ background: "#c0c0c0" }}>
        {children}
      </div>

      {/* Status Bar */}
      {statusBar && (
        <div className="win95-statusbar">
          <div className="win95-statusbar-panel">{statusBar}</div>
        </div>
      )}
    </div>
  );
}
