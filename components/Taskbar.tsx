"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "🖥️ デスクトップ", href: "/" },
  { label: "👤 プロフィール", href: "/about" },
  { label: "🗂️ プロジェクト", href: "/projects" },
  { label: "⚡ スキル", href: "/skills" },
];

export default function Taskbar() {
  const [time, setTime] = useState("");
  const [startOpen, setStartOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Start Menu Overlay */}
      {startOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setStartOpen(false)}
        />
      )}

      {/* Start Menu */}
      {startOpen && (
        <div
          className="win95-window fixed z-[10000]"
          style={{
            bottom: 30,
            left: 0,
            width: 200,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(to top, #000080, #1084d0)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              padding: "8px 4px",
              color: "white",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: 2,
              userSelect: "none",
              float: "left",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
            }}
          >
            Junsei Ogawa
          </div>
          <div style={{ marginLeft: 28, padding: "4px 0" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setStartOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 12px",
                  fontSize: 11,
                  gap: 8,
                  cursor: "pointer",
                }}
                className={
                  pathname === item.href
                    ? "win95-selected"
                    : "hover:bg-[#000080] hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
            <div className="win95-separator" />
            <a
              href="https://github.com/JunseiOgawa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setStartOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
                fontSize: 11,
                gap: 8,
                cursor: "pointer",
              }}
              className="hover:bg-[#000080] hover:text-white"
            >
              🐱 GitHub
            </a>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="win95-taskbar">
        {/* Start Button */}
        <button
          className="win95-start-btn"
          onClick={() => setStartOpen((v) => !v)}
        >
          <span style={{ fontSize: 14 }}>🪟</span>
          <span>スタート</span>
        </button>

        <div className="win95-separator-v" />

        {/* Taskbar Nav Buttons */}
        <div className="flex gap-1 overflow-hidden flex-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <button
                className="win95-taskbar-btn"
                style={{
                  borderColor:
                    pathname === item.href
                      ? "#808080 #fff #fff #808080"
                      : undefined,
                  fontWeight: pathname === item.href ? "bold" : undefined,
                }}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>

        {/* Clock */}
        <div className="win95-separator-v" />
        <div className="win95-clock">{time}</div>
      </div>
    </>
  );
}
