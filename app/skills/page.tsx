import Window from "@/components/Window";
import Link from "next/link";

const skillGroups = [
  {
    title: "フロントエンド",
    icon: "🌐",
    skills: [
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "React / Next.js", level: 80 },
      { name: "React Native (Expo)", level: 75 },
      { name: "Svelte", level: 55 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    title: "デスクトップ / システム",
    icon: "🖥️",
    skills: [
      { name: "Tauri (Rust + WebView)", level: 70 },
      { name: "Rust / egui", level: 60 },
      { name: "Node.js", level: 70 },
      { name: "SQLite", level: 65 },
    ],
  },
  {
    title: "バックエンド / クラウド",
    icon: "☁️",
    skills: [
      { name: "Supabase", level: 65 },
      { name: "REST API 設計", level: 60 },
      { name: "Google Cloud (Vision API等)", level: 50 },
    ],
  },
  {
    title: "ツール / その他",
    icon: "🔧",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Docker", level: 45 },
      { name: "Vercel / EAS (Expo)", level: 65 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <div style={{ width: 160, fontSize: 11, flexShrink: 0 }}>{name}</div>
      <div
        style={{
          flex: 1,
          height: 14,
          background: "white",
          border: "2px solid",
          borderColor: "#808080 #fff #fff #808080",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${level}%`,
            height: "100%",
            background: "#000080",
            backgroundImage:
              "repeating-linear-gradient(to right, #000080 0px, #000080 8px, #0000c8 8px, #0000c8 10px)",
          }}
        />
      </div>
      <div style={{ width: 32, fontSize: 11, textAlign: "right", flexShrink: 0 }}>
        {level}%
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 30px)",
        background: "#008080",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Breadcrumb */}
      <div style={{ color: "white", fontSize: 11, display: "flex", gap: 8, alignItems: "center" }}>
        <Link href="/" style={{ color: "white", textDecoration: "underline" }}>デスクトップ</Link>
        <span>▶</span>
        <span>スキル</span>
      </div>

      {/* Main Window */}
      <Window title="スキル＆技術スタック" icon="⚡" statusBar="自己評価 (0〜100%)">
        <div style={{ padding: "8px 4px", display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Skills grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 12,
            }}
          >
            {skillGroups.map((group) => (
              <div key={group.title} className="win95-groupbox">
                <span className="win95-groupbox-label">
                  {group.icon} {group.title}
                </span>
                <div style={{ marginTop: 8 }}>
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <hr className="win95-separator" />

          {/* Badges */}
          <div>
            <div style={{ fontSize: 11, marginBottom: 8, fontWeight: "bold" }}>
              主な使用言語・フレームワーク
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[
                "TypeScript",
                "JavaScript",
                "Rust",
                "React",
                "Next.js",
                "React Native",
                "Tauri",
                "Svelte",
                "Node.js",
                "Supabase",
                "SQLite",
                "Tailwind CSS",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#000080",
                    color: "white",
                    padding: "2px 8px",
                    fontSize: 11,
                    display: "inline-block",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="win95-separator" />

          <div style={{ display: "flex", gap: 8 }}>
            <a href="https://github.com/JunseiOgawa" target="_blank" rel="noopener noreferrer">
              <button className="win95-btn">🐱 GitHub を見る</button>
            </a>
            <Link href="/projects">
              <button className="win95-btn">🗂️ プロジェクト</button>
            </Link>
          </div>
        </div>
      </Window>
    </div>
  );
}
