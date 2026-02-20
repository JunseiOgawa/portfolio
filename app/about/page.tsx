import Window from "@/components/Window";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 30px)",
        background: "#008080",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      {/* Navigation breadcrumb */}
      <div style={{ color: "white", fontSize: 11, display: "flex", gap: 8, alignItems: "center" }}>
        <Link href="/" style={{ color: "white", textDecoration: "underline" }}>デスクトップ</Link>
        <span>▶</span>
        <span>プロフィール</span>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-start" }}>
        {/* Main Profile Window */}
        <Window
          title="プロフィール — Junsei Ogawa"
          icon="👤"
          statusBar="Junsei Ogawa | アプリ開発者"
          className="flex-1"
          style={{ minWidth: 320, maxWidth: 480 }}
        >
          <div style={{ padding: "8px 4px", display: "flex", flexDirection: "column", gap: 10 }}>

            {/* Avatar + Name */}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: "white",
                  border: "2px solid",
                  borderColor: "#808080 #fff #fff #808080",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 48,
                  flexShrink: 0,
                }}
              >
                👨‍💻
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ fontWeight: "bold", fontSize: 14 }}>Junsei Ogawa</div>
                <div style={{ fontSize: 11 }}>小川 順正</div>
                <div
                  style={{
                    background: "#000080",
                    color: "white",
                    padding: "1px 8px",
                    fontSize: 11,
                    display: "inline-block",
                  }}
                >
                  アプリ開発者
                </div>
              </div>
            </div>

            <hr className="win95-separator" />

            {/* Info table */}
            <div className="win95-groupbox">
              <span className="win95-groupbox-label">基本情報</span>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <tbody>
                  {[
                    ["🎂 生年月日", "2005年"],
                    ["📅 年齢", "20歳"],
                    ["🌍 国籍", "日本"],
                    ["💼 役割", "個人開発 / 学生"],
                    ["🎓 卒業見込み", "2027年3月"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td
                        style={{
                          padding: "4px 8px 4px 0",
                          color: "#000080",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          width: 110,
                        }}
                      >
                        {label}
                      </td>
                      <td style={{ padding: "4px 0" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="win95-separator" />

            {/* Bio */}
            <div className="win95-groupbox">
              <span className="win95-groupbox-label">自己紹介</span>
              <p style={{ fontSize: 11, lineHeight: 1.9, marginTop: 4 }}>
                2005年生まれの20歳、学生です。<br />
                JavaScript / TypeScriptを主軸に、React NativeでのモバイルアプリとTauriを使ったデスクトップアプリを中心に開発しています。<br />
                VR向けのツール開発にも取り組んでいます。
              </p>
            </div>

            <hr className="win95-separator" />

            {/* Future Goals */}
            <div className="win95-groupbox">
              <span className="win95-groupbox-label">今後の展望</span>
              <p style={{ fontSize: 11, lineHeight: 1.9, marginTop: 4 }}>
                バックエンド開発をより深く学んでいきたいと考えています。<br />
                BaaSに頼らず、サーバーの構築からデプロイまで自力でやりきれる力を身につけることが目標です。<br />
                フロントエンドとバックエンドを一貫して扱えるエンジニアを目指しています。
              </p>
            </div>

            <hr className="win95-separator" />

            {/* Links */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a
                href="https://github.com/JunseiOgawa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="win95-btn">🐱 GitHub</button>
              </a>
              <Link href="/projects">
                <button className="win95-btn">🗂️ プロジェクト</button>
              </Link>
              <Link href="/skills">
                <button className="win95-btn">⚡ スキル</button>
              </Link>
            </div>
          </div>
        </Window>

        {/* Interests Window */}
        <Window title="興味・関心" icon="💡" style={{ minWidth: 240 }}>
          <div style={{ padding: "8px 4px", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["🥽", "VR向け開発", "VR向けツール開発に取り組んでいます"],
              ["📱", "モバイルアプリ", "React Native でのアプリ開発"],
              ["🖥️", "デスクトップアプリ", "Tauri + Rust による高性能ツール"],
              ["🦀", "Rust", "パフォーマンスと安全性を重視"],
              ["🌐", "Web フロントエンド", "Next.js / Svelte での UI 実装"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                  fontSize: 11,
                }}
              >
                <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: "bold" }}>{title}</div>
                  <div style={{ color: "#404040" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Window>
      </div>
    </div>
  );
}
