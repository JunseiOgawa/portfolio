import Window from "@/components/Window";
import Link from "next/link";

const projects = [
  {
    id: "tidyclip",
    title: "TidyClip",
    icon: "📸",
    type: "スマートフォンアプリ",
    tech: ["React Native", "Expo", "Supabase", "TypeScript"],
    description:
      "写真を自動で整理・タグ付けするスマホアプリ。Google Vision APIを使った写真の自動タグ付けと、Supabaseによるクラウド同期機能を備えます。",
    status: "開発終了",
    statusColor: "#808080",
    github: "",
  },
  {
    id: "vdi-solid",
    title: "VDI-solid (vdi-egui)",
    icon: "🔭",
    type: "デスクトップアプリ (Windows)",
    tech: ["Rust", "egui", "Image Processing"],
    description:
      "VRゴーグル向けの高精度画像ビューア。Rustとeguiによる軽量・超高速なネイティブGUIアプリです。ズーム・パン・ヒストグラム・ピーキングなど分析ツールを搭載。",
    status: "リリース済み",
    statusColor: "#008000",
    github: "https://github.com/JunseiOgawa",
  },
  {
    id: "vsa",
    title: "VSA (Visual Snap Archive)",
    icon: "🎮",
    type: "デスクトップアプリ (Windows)",
    tech: ["Tauri", "React", "TypeScript", "Rust", "SQLite"],
    description:
      "VRChatフォト管理ツール。Tauri + Reactによる高速ギャラリー、JPEG XL圧縮アーカイブ、Google Drive同期、X(Twitter)直接投稿、VirtualLens2リモートコントロール等を統合した多機能アプリ。",
    status: "開発中",
    statusColor: "#ff8800",
    github: "https://github.com/JunseiOgawa",
  },
];

export default function ProjectsPage() {
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
        <span>プロジェクト</span>
      </div>

      {/* Title window */}
      <Window title="マイ プロジェクト — ファイル マネージャー" icon="🗂️" statusBar={`${projects.length} 件のプロジェクト`}>
        <div style={{ padding: "8px 4px" }}>
          {/* Toolbar */}
          <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
            <button className="win95-btn" style={{ minWidth: 0, padding: "2px 10px", fontSize: 11 }}>
              すべて
            </button>
            <button className="win95-btn" style={{ minWidth: 0, padding: "2px 10px", fontSize: 11 }}>
              モバイル
            </button>
            <button className="win95-btn" style={{ minWidth: 0, padding: "2px 10px", fontSize: 11 }}>
              デスクトップ
            </button>
          </div>

          {/* Projects List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="win95-panel"
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 24 }}>{project.icon}</span>
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: 13 }}>{project.title}</div>
                      <div style={{ fontSize: 10, color: "#404040" }}>{project.type}</div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: project.statusColor,
                      color: "white",
                      padding: "1px 6px",
                      fontSize: 10,
                      flexShrink: 0,
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                <hr className="win95-separator" />

                {/* Description */}
                <p style={{ fontSize: 11, lineHeight: 1.8 }}>{project.description}</p>

                {/* Tech Stack */}
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "#000080",
                        color: "white",
                        padding: "1px 6px",
                        fontSize: 10,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer buttons */}
                <div style={{ display: "flex", gap: 8 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <button className="win95-btn" style={{ padding: "3px 10px", minWidth: 0, fontSize: 11 }}>
                        🐱 GitHub
                      </button>
                    </a>
                  )}
                  {!project.github && (
                    <span style={{ fontSize: 10, color: "#808080", padding: "3px 0" }}>リポジトリ非公開</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}
