"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActiveSection(Number(e.target.getAttribute("data-index")));
        });
      },
      { threshold: 0.5 },
    );
    document
      .querySelectorAll("section[data-index]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLabels = [
    "Home",
    "About",
    "Origin",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <main className="relative">
      {/* ── NAV DOTS ── */}
      <nav className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
        {navLabels.map((label, i) => (
          <button
            key={i}
            title={label}
            onClick={() =>
              document
                .querySelector(`section[data-index="${i}"]`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`transition-all duration-300 rounded-full border ${
              activeSection === i
                ? "w-2 h-5 bg-violet-600 border-violet-600 scale-110"
                : "w-2 h-2 bg-transparent border-violet-400/50"
            }`}
          />
        ))}
      </nav>

      {/* ════════════════════════════════
          SLIDE 1 — HERO
      ════════════════════════════════ */}
      <section
        data-index="0"
        className="min-h-svh flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #ede9fe 45%, #ddd6fe 75%, #c4b5fd 100%)",
        }}
      >
        {/* Grid overlay Y2K */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(109,40,217,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Blobs */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed55, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2563eb44, transparent 70%)",
          }}
        />

        {/* Sparkle stars */}
        {[
          { top: "12%", left: "8%", size: 10, op: 0.4 },
          { top: "18%", right: "10%", size: 7, op: 0.3 },
          { top: "70%", left: "6%", size: 8, op: 0.35 },
          { top: "80%", right: "8%", size: 12, op: 0.25 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: s.top,
              left: (s as any).left,
              right: (s as any).right,
              width: s.size,
              height: s.size,
              opacity: s.op,
              background: "#6d28d9",
              clipPath:
                "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/*
           ┌──────────────────────────────────────────────────────┐
           │  GANTI FOTO PROFIL:                                  │
           │  1. Taruh foto kamu (misal: foto.jpg) di folder      │
           │     public/                                          │
           │  2. Ubah src di bawah menjadi: src="/foto.jpg"       │
           └──────────────────────────────────────────────────────┘
          */}
          <div className="mb-6 relative" style={{ width: 120, height: 120 }}>
            {/* ring animasi */}
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.2))",
                animationDuration: "3s",
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(109,40,217,0.35)",
                boxShadow: "0 0 0 6px rgba(109,40,217,0.08)",
              }}
            />
            <img
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=qiyami&backgroundColor=ede9fe"
              alt="Foto Qiyami"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1
            className="text-6xl font-black mb-2"
            style={{
              background: "linear-gradient(135deg, #4c1d95, #7c3aed, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1px",
            }}
          >
            Qiyami
          </h1>

          <p
            className="text-sm font-semibold tracking-[3px] uppercase mb-4"
            style={{ color: "#7c3aed" }}
          >
            Mahasiswi TI · UINAR
          </p>

          <div
            className="rounded-2xl px-5 py-3 mb-6 max-w-xs"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(109,40,217,0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#4c1d95" }}>
              Saya tertarik pada pengembangan web dan desain antarmuka
            </p>
          </div>

          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              color: "white",
            }}
          >
            <span>✦</span>
            <span>scroll to explore</span>
            <span>✦</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SLIDE 2 — ABOUT ME
      ════════════════════════════════ */}
      <section
        data-index="1"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #eff6ff 40%, #dbeafe 75%, #bfdbfe 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2563eb33, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed33, transparent 70%)",
          }}
        />

        <div className="max-w-lg w-full relative z-10">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ color: "#2563eb" }}
          >
            02 / About me
          </p>
          <h2
            className="text-4xl font-black mb-8"
            style={{
              background: "linear-gradient(135deg, #1e3a8a, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </h2>

          <div
            className="rounded-2xl p-5 mb-5 space-y-3"
            style={{
              background: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(37,99,235,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#1e3a8a" }}>
              Hai, saya{" "}
              <span className="font-bold" style={{ color: "#2563eb" }}>
                Qiyami Puji Syarifah
              </span>
              . Mahasiswi Prodi Teknologi Informasi semester 6 di UIN Ar-Raniry
              Banda Aceh, berusia 21 tahun.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#1e3a8a99" }}
            >
              Sedang berproses menjadi seorang pengembang web dan desainer UI.
              Sebagai pribadi yang teliti dan ambisius, saya selalu berusaha
              menciptakan solusi digital yang tidak hanya berfungsi dengan baik,
              tapi juga memiliki estetika visual yang menarik.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#1e3a8a99" }}
            >
              Saya sangat menikmati proses kolaboratif dalam tim dan selalu haus
              akan tantangan baru di industri kreatif.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { val: "6", label: "Semester" },
              { val: "21", label: "Tahun" },
              { val: "TI", label: "Prodi" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(37,99,235,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.val}
                </p>
                <p className="text-xs mt-1" style={{ color: "#3b82f6" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SLIDE 3 — ASAL DAERAH
      ════════════════════════════════ */}
      <section
        data-index="2"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #faf5ff 0%, #f5f3ff 40%, #ede9fe 70%, #ddd6fe 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(109,40,217,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {[
          { top: "8%", right: "5%", size: 12, op: 0.35 },
          { bottom: "15%", left: "7%", size: 9, op: 0.3 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: (s as any).top,
              bottom: (s as any).bottom,
              left: (s as any).left,
              right: (s as any).right,
              width: s.size,
              height: s.size,
              opacity: s.op,
              background: "#7c3aed",
              clipPath:
                "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
            }}
          />
        ))}

        <div className="max-w-lg w-full relative z-10">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ color: "#7c3aed" }}
          >
            03 / Origin
          </p>
          <h2
            className="text-4xl font-black mb-1"
            style={{
              background: "linear-gradient(135deg, #4c1d95, #7c3aed, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kampung Halaman
          </h2>
          <p className="text-sm mb-5" style={{ color: "#7c3aed99" }}>
            18 November 2004 · Bener Meriah, Aceh
          </p>

          {/*
           ┌──────────────────────────────────────────────────────┐
           │  GANTI FOTO BENER MERIAH:                            │
           │  Taruh foto di public/ lalu ubah src ke "/foto.jpg"  │
           └──────────────────────────────────────────────────────┘
          */}
          <div
            className="rounded-2xl overflow-hidden mb-5 h-44 relative"
            style={{ border: "1px solid rgba(109,40,217,0.2)" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Danau_Lut_Tawar_-_Kebayakan_-_Aceh_Tengah.jpg/640px-Danau_Lut_Tawar_-_Kebayakan_-_Aceh_Tengah.jpg"
              alt="Bener Meriah"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(76,29,149,0.5) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-3 left-4">
              <p className="text-white text-xs font-bold tracking-wider">
                BENER MERIAH
              </p>
              <p className="text-white/70 text-xs">Dataran Tinggi Gayo, Aceh</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: "☕",
                title: "Kopi Gayo",
                color: "#7c3aed",
                bg: "rgba(124,58,237,0.08)",
                border: "rgba(124,58,237,0.2)",
                desc: "Bener Meriah dikenal sebagai penghasil Kopi Gayo — salah satu kopi arabika terbaik dunia dengan cita rasa kaya dan aroma khas yang mendunia.",
              },
              {
                icon: "🎭",
                title: "Tari Guel",
                color: "#2563eb",
                bg: "rgba(37,99,235,0.08)",
                border: "rgba(37,99,235,0.2)",
                desc: "Tarian Guel adalah warisan budaya suku Gayo yang sarat makna — menggambarkan keanggunan dan semangat masyarakat dataran tinggi Aceh.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-4"
                style={{
                  background: `rgba(255,255,255,0.65)`,
                  border: `1px solid ${item.border}`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.icon} {item.title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#4c1d95bb" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SLIDE 4 — PENDIDIKAN
      ════════════════════════════════ */}
      <section
        data-index="3"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #eff6ff 35%, #e0e7ff 70%, #ddd6fe 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #6366f133, transparent 70%)",
          }}
        />

        <div className="max-w-lg w-full relative z-10">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ color: "#6366f1" }}
          >
            04 / Education
          </p>
          <h2
            className="text-4xl font-black mb-8"
            style={{
              background: "linear-gradient(135deg, #1e3a8a, #6366f1, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pendidikan
          </h2>

          <div className="space-y-3">
            {[
              {
                badge: "S1",
                name: "UIN Ar-Raniry Banda Aceh",
                sub: "Teknologi Informasi",
                year: "2023–2027",
                grad: "linear-gradient(135deg, #7c3aed, #2563eb)",
              },
              {
                badge: "SMA",
                name: "SMAN 1 Bandar",
                sub: "Bener Meriah",
                year: "2020–2023",
                grad: "linear-gradient(135deg, #6366f1, #7c3aed)",
              },
              {
                badge: "SMP",
                name: "SMPN 1 Bandar",
                sub: "Bener Meriah",
                year: "2017–2020",
                grad: "linear-gradient(135deg, #2563eb, #6366f1)",
              },
              {
                badge: "SD",
                name: "SDN 2 Puja Mulia",
                sub: "Bener Meriah",
                year: "2011–2017",
                grad: "linear-gradient(135deg, #3b82f6, #2563eb)",
              },
              {
                badge: "TK",
                name: "TK Karang Taruna",
                sub: "Puja Mulia, Bener Meriah",
                year: "2009–2011",
                grad: "linear-gradient(135deg, #60a5fa, #3b82f6)",
              },
            ].map((edu, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0"
                  style={{ background: edu.grad }}
                >
                  {edu.badge}
                </div>
                <div
                  className="flex-1 rounded-2xl px-4 py-3 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(99,102,241,0.18)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "#1e1b4b" }}
                    >
                      {edu.name}
                    </p>
                    <p className="text-xs" style={{ color: "#6366f1" }}>
                      {edu.sub}
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold whitespace-nowrap ml-2"
                    style={{ color: "#818cf8" }}
                  >
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SLIDE 5 — SKILLS
      ════════════════════════════════ */}
      <section
        data-index="4"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #faf5ff 0%, #f5f3ff 40%, #ede9fe 70%, #ddd6fe 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(109,40,217,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed22, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2563eb22, transparent 70%)",
          }}
        />

        <div className="max-w-lg w-full relative z-10">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ color: "#7c3aed" }}
          >
            05 / Skills
          </p>
          <h2
            className="text-4xl font-black mb-8"
            style={{
              background: "linear-gradient(135deg, #4c1d95, #7c3aed, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </h2>

          <div className="grid grid-cols-4 gap-3">
            {[
              {
                name: "Figma",
                color: "#a259ff",
                bg: "rgba(162,89,255,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg",
              },
              {
                name: "Canva",
                color: "#00c4cc",
                bg: "rgba(0,196,204,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg",
              },
              {
                name: "Excel",
                color: "#217346",
                bg: "rgba(33,115,70,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg",
              },
              {
                name: "Photoshop",
                color: "#31a8ff",
                bg: "rgba(49,168,255,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg",
              },
              {
                name: "CapCut",
                color: "#dddddd",
                bg: "rgba(0,0,0,0.06)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/capcut.svg",
              },
              {
                name: "HTML",
                color: "#e34c26",
                bg: "rgba(227,76,38,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg",
              },
              {
                name: "CSS",
                color: "#264de4",
                bg: "rgba(38,77,228,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
              },
              {
                name: "Python",
                color: "#3572A5",
                bg: "rgba(53,114,165,0.1)",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 rounded-2xl p-3 transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(109,40,217,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: skill.bg }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5"
                    style={{
                      filter: `drop-shadow(0 0 3px ${skill.color}88)`,
                    }}
                  />
                </div>
                <span
                  className="text-xs font-semibold text-center"
                  style={{ color: "#4c1d95" }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* progress bars dekoratif */}
          <div className="mt-6 space-y-2">
            {[
              { label: "UI / Design", pct: 80 },
              { label: "Web Dev", pct: 65 },
              { label: "Video Edit", pct: 75 },
            ].map((bar) => (
              <div key={bar.label} className="flex items-center gap-3">
                <span
                  className="text-xs w-20 shrink-0"
                  style={{ color: "#7c3aed" }}
                >
                  {bar.label}
                </span>
                <div
                  className="flex-1 h-1.5 rounded-full"
                  style={{ background: "rgba(109,40,217,0.1)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${bar.pct}%`,
                      background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                    }}
                  />
                </div>
                <span className="text-xs" style={{ color: "#a78bfa" }}>
                  {bar.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SLIDE 6 — CONTACT
      ════════════════════════════════ */}
      <section
        data-index="5"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #ede9fe 40%, #ddd6fe 70%, #c4b5fd 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(109,40,217,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7c3aed33, transparent 70%)",
          }}
        />
        {[
          { top: "10%", right: "8%", size: 10, op: 0.35 },
          { bottom: "20%", left: "6%", size: 8, op: 0.3 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              top: (s as any).top,
              bottom: (s as any).bottom,
              left: (s as any).left,
              right: (s as any).right,
              width: s.size,
              height: s.size,
              opacity: s.op,
              background: "#6d28d9",
              clipPath:
                "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
            }}
          />
        ))}

        <div className="max-w-lg w-full relative z-10">
          <p
            className="text-xs font-bold tracking-[3px] uppercase mb-2"
            style={{ color: "#7c3aed" }}
          >
            06 / Contact
          </p>
          <h2
            className="text-4xl font-black mb-2"
            style={{
              background: "linear-gradient(135deg, #4c1d95, #7c3aed, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hubungi Saya
          </h2>
          <p className="text-sm mb-8" style={{ color: "#7c3aed99" }}>
            ✦ Let&apos;s connect and collaborate ✦
          </p>

          <div className="space-y-4">
            {/*
             ┌──────────────────────────────────────────────────────┐
             │  GANTI KONTAK — cari 3 bagian di bawah:             │
             │  EMAIL    → ubah href & teks email                   │
             │  INSTAGRAM → ubah href & teks username               │
             │  WHATSAPP  → ubah href & teks nomor                  │
             └──────────────────────────────────────────────────────┘
            */}

            {/* EMAIL */}
            <a
              href="mailto:qiyamipsz08@gmail.com"
              className="flex items-center gap-4 rounded-2xl p-4 transition-all hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(239,68,68,0.2)",
                backdropFilter: "blur(10px)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(239,68,68,0.1)" }}
              >
                <svg className="w-5 h-5" fill="#ef4444" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#ef4444" }}
                >
                  EMAIL
                </p>
                {/* GANTI EMAIL DI SINI ↓ */}
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1e1b4b" }}
                >
                  qiyamipsz08@gmail.com
                </p>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/q_.yvmmy8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-4 transition-all hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(236,72,153,0.2)",
                backdropFilter: "blur(10px)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(236,72,153,0.1)" }}
              >
                <svg className="w-5 h-5" fill="#ec4899" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#ec4899" }}
                >
                  INSTAGRAM
                </p>
                {/* GANTI USERNAME IG DI SINI ↓ */}
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1e1b4b" }}
                >
                  @q_.yvmmy8
                </p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6285260674775"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-4 transition-all hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(34,197,94,0.2)",
                backdropFilter: "blur(10px)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(34,197,94,0.1)" }}
              >
                <svg className="w-5 h-5" fill="#22c55e" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#22c55e" }}
                >
                  WHATSAPP
                </p>
                {/* GANTI NO WA DI SINI ↓ */}
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1e1b4b" }}
                >
                  +6285260674775
                </p>
              </div>
            </a>
          </div>

          <p
            className="text-center text-xs mt-10 font-semibold tracking-widest"
            style={{ color: "#a78bfa" }}
          >
            ✦ made with Next.js · @ 2025 Qiyami ✦
          </p>
        </div>
      </section>
    </main>
  );
}
