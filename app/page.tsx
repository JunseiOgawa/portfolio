import Link from "next/link";
import Window from "@/components/Window";

const desktopIcons = [
  { label: "プロフィール", icon: "👤", href: "/about" },
  { label: "プロジェクト", icon: "🗂️", href: "/projects" },
  { label: "スキル", icon: "⚡", href: "/skills" },
  { label: "GitHub", icon: "🐱", href: "https://github.com/JunseiOgawa", external: true },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 30px)",
        background: "#008080",
        display: "flex",
        padding: 12,
        gap: 16,
        alignItems: "flex-start",
      }}
    >
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {desktopIcons.map((item) =>
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-icon"
            >
              <span style={{ fontSize: 32 }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ) : (
            <Link key={item.href} href={item.href} className="desktop-icon">
              <span style={{ fontSize: 32 }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        )}
      </div>

      {/* Welcome Window */}
      <div style={{ flex: 1, maxWidth: 480 }}>
        <Window title="ようこそ — Junsei Ogawa のポートフォリオ" icon="🖥️" statusBar="準備完了">
          <div style={{ padding: "12px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  fontSize: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid",
                  borderColor: "#808080 #fff #fff #808080",
                  background: "white",
                  flexShrink: 0,
                }}
              >
                👨‍💻
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
                  Junsei Ogawa (小川 順正)
                </div>
                <div style={{ fontSize: 11, color: "#000080", fontWeight: "bold" }}>
                  アプリ開発者 / App Developer
                </div>
                <div style={{ fontSize: 11, marginTop: 2 }}>
                  2005年生まれ・20歳
                </div>
              </div>
            </div>

            <hr className="win95-separator" />

            <p style={{ fontSize: 11, lineHeight: 1.8 }}>
              JavaScriptからRustまで幅広く開発しています。<br />
              モバイルアプリ・デスクトップアプリを中心に開発しています。
            </p>

            <hr className="win95-separator" />

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link href="/about">
                <button className="win95-btn">👤 プロフィール</button>
              </Link>
              <Link href="/projects">
                <button className="win95-btn">🗂️ プロジェクト</button>
              </Link>
              <Link href="/skills">
                <button className="win95-btn">⚡ スキル</button>
              </Link>
              <a
                href="https://github.com/JunseiOgawa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="win95-btn">🐱 GitHub</button>
              </a>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
