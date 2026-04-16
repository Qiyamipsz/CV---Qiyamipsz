"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 },
    );

    document
      .querySelectorAll("section[data-index]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sections = [
    "Home",
    "About",
    "Origin",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <main className="relative">
      {/* ── Nav Dots ── */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((label, i) => (
          <button
            key={i}
            onClick={() => {
              document
                .querySelector(`section[data-index="${i}"]`)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            title={label}
            className={`w-2.5 h-2.5 rounded-full border border-white/40 transition-all duration-300 ${
              activeSection === i ? "bg-white scale-125" : "bg-white/20"
            }`}
          />
        ))}
      </nav>

      {/* SLIDE 1 — HERO */}
      <section
        data-index="0"
        className="min-h-svh flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ background: "#a78bfa" }}
        />
        <div
          className="absolute bottom-10 right-10 w-56 h-56 rounded-full opacity-15 blur-3xl"
          style={{ background: "#60a5fa" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* ── FOTO ── ganti src dengan path foto kamu di folder public/ */}
          <div className="w-36 h-36 rounded-full border-4 border-purple-400/60 overflow-hidden mb-6 shadow-xl">
            <img
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=qiyami"
              alt="Foto Qiyami"
              className="w-full h-full object-cover"
              /* 
                ┌─────────────────────────────────────────┐
                │  GANTI FOTO:                            │
                │  1. Taruh foto kamu (misal: foto.jpg)   │
                │     di folder: public/                  │
                │  2. Ubah src di atas menjadi: "/foto.jpg"│
                └─────────────────────────────────────────┘
              */
            />
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-white mb-2">
            Qiyami
          </h1>
          <p className="text-purple-300 text-lg font-medium mb-4">
            Mahasiswa Teknologi Informasi UINAR
          </p>
          <p className="text-white/60 text-base max-w-xs leading-relaxed">
            Saya tertarik pada pengembangan web dan desain antarmuka
          </p>

          <div className="mt-10 animate-bounce">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/40"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* SLIDE 2 — ABOUT ME */}
      <section
        data-index="1"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div className="max-w-lg w-full">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            02 / About
          </span>
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>

          <div className="relative pl-5 border-l-2 border-teal-500/50 space-y-4">
            <p className="text-white/80 text-base leading-relaxed">
              Hai, saya{" "}
              <span className="text-teal-300 font-semibold">
                Qiyami Puji Syarifah
              </span>
              . Mahasiswi Prodi Teknologi Informasi semester 6 di UIN Ar-Raniry
              Banda Aceh yang kini berusia 21 tahun, sedang berproses menjadi
              seorang pengembang web dan desainer UI.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Sebagai pribadi yang teliti dan ambisius, saya selalu berusaha
              menciptakan solusi digital yang tidak hanya berfungsi dengan baik,
              tapi juga memiliki estetika visual yang menarik.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Saya sangat menikmati proses kolaboratif dalam tim dan selalu haus
              akan tantangan baru di industri kreatif.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center flex-1">
              <p className="text-2xl font-bold text-teal-400">6</p>
              <p className="text-white/50 text-xs mt-1">Semester</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center flex-1">
              <p className="text-2xl font-bold text-teal-400">21</p>
              <p className="text-white/50 text-xs mt-1">Tahun</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center flex-1">
              <p className="text-2xl font-bold text-teal-400">TI</p>
              <p className="text-white/50 text-xs mt-1">Prodi</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3 — ASAL DAERAH (BENER MERIAH) */}
      <section
        data-index="2"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16"
        style={{
          background: "linear-gradient(135deg, #1a0a00, #3d1a00, #1a0a00)",
        }}
      >
        <div className="max-w-lg w-full">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            03 / Origin
          </span>
          <h2 className="text-4xl font-bold text-white mb-2">
            Kampung Halaman
          </h2>
          <p className="text-amber-300/80 text-sm mb-6">
            18 November 2004 · Bener Meriah, Aceh
          </p>

          {/* ── FOTO BENER MERIAH ── ganti src jika punya foto sendiri */}
          <div className="rounded-2xl overflow-hidden mb-6 border border-amber-500/20 h-48">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bener_Meriah_Regency_on_map_of_Aceh.svg/640px-Bener_Meriah_Regency_on_map_of_Aceh.svg.png"
              alt="Bener Meriah"
              className="w-full h-full object-cover"
              /*
                ┌────────────────────────────────────────────┐
                │  GANTI FOTO BENER MERIAH:                  │
                │  Taruh foto di public/ lalu ubah src ke    │
                │  "/nama-foto.jpg"                          │
                └────────────────────────────────────────────┘
              */
            />
          </div>

          <div className="space-y-3">
            <div className="bg-white/5 border border-amber-500/20 rounded-xl p-4">
              <p className="text-amber-300 text-sm font-semibold mb-1">
                ☕ Kopi Gayo
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Bener Meriah dikenal sebagai penghasil{" "}
                <strong className="text-amber-300">Kopi Gayo</strong> — salah
                satu kopi arabika terbaik dunia dengan cita rasa yang kaya dan
                aroma yang khas.
              </p>
            </div>
            <div className="bg-white/5 border border-amber-500/20 rounded-xl p-4">
              <p className="text-amber-300 text-sm font-semibold mb-1">
                🎭 Tari Guel
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Tarian Guel merupakan warisan budaya suku Gayo yang sarat makna
                — menggambarkan keanggunan dan semangat masyarakat dataran
                tinggi Aceh Tengah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4 — PENDIDIKAN */}
      <section
        data-index="3"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16"
        style={{
          background: "linear-gradient(135deg, #0d1117, #161b22, #0d1117)",
        }}
      >
        <div className="max-w-lg w-full">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            04 / Education
          </span>
          <h2 className="text-4xl font-bold text-white mb-8">Pendidikan</h2>

          <div className="relative space-y-0">
            {[
              {
                level: "S1",
                name: "UIN Ar-Raniry Banda Aceh",
                sub: "Teknologi Informasi",
                year: "2023 – 2027",
                color: "blue",
                /*
                  GANTI FOTO KAMPUS: taruh foto di public/ lalu ubah nilai photo di bawah
                  Contoh: photo: "/uin.jpg"
                */
                photo: null,
              },
              {
                level: "SMA",
                name: "SMA Negeri 1 Bandar",
                sub: "Bener Meriah",
                year: "2020 – 2023",
                color: "purple",
                photo: null,
              },
              {
                level: "SMP",
                name: "SMP Negeri 1 Bandar",
                sub: "Bener Meriah",
                year: "2017 – 2020",
                color: "teal",
                photo: null,
              },
              {
                level: "SD",
                name: "SD Negeri 2 Puja Mulia",
                sub: "Bener Meriah",
                year: "2011 – 2017",
                color: "green",
                photo: null,
              },
              {
                level: "TK",
                name: "TK Karang Taruna",
                sub: "Puja Mulia, Bener Meriah",
                year: "2009 – 2011",
                color: "amber",
                photo: null,
              },
            ].map((edu, i, arr) => {
              const colorMap: Record<string, string> = {
                blue: "text-blue-400 border-blue-500/40 bg-blue-500/10",
                purple: "text-purple-400 border-purple-500/40 bg-purple-500/10",
                teal: "text-teal-400 border-teal-500/40 bg-teal-500/10",
                green: "text-green-400 border-green-500/40 bg-green-500/10",
                amber: "text-amber-400 border-amber-500/40 bg-amber-500/10",
              };
              const cls = colorMap[edu.color];

              return (
                <div key={i} className="flex gap-4 relative">
                  {/* timeline line */}
                  {i < arr.length - 1 && (
                    <div className="absolute left-4.75 top-10 bottom-0 w-px bg-white/10" />
                  )}
                  {/* dot */}
                  <div
                    className={`w-10 h-10 rounded-full border shrink-0 flex items-center justify-center text-xs font-bold z-10 ${cls}`}
                  >
                    {edu.level.slice(0, 2)}
                  </div>
                  {/* card */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 mb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {edu.name}
                        </p>
                        <p className="text-white/50 text-xs mt-0.5">
                          {edu.sub}
                        </p>
                      </div>
                      <span className="text-white/40 text-xs whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SLIDE 5 — SKILLS   */}
      <section
        data-index="4"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16"
        style={{
          background: "linear-gradient(135deg, #0a0a1a, #1a0a2e, #0a0a1a)",
        }}
      >
        <div className="max-w-lg w-full">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            05 / Skills
          </span>
          <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>

          <div className="grid grid-cols-4 gap-4">
            {[
              {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg",
                color: "#a259ff",
              },
              {
                name: "Canva",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg",
                color: "#00c4cc",
              },
              {
                name: "Excel",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg",
                color: "#217346",
              },
              {
                name: "Photoshop",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg",
                color: "#31a8ff",
              },
              {
                name: "CapCut",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/capcut.svg",
                color: "#ffffff",
              },
              {
                name: "HTML",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg",
                color: "#e34c26",
              },
              {
                name: "CSS",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
                color: "#264de4",
              },
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg",
                color: "#3572A5",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-3 hover:bg-white/10 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: skill.color + "22" }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6"
                    style={{ filter: `drop-shadow(0 0 4px ${skill.color})` }}
                  />
                </div>
                <span className="text-white/70 text-xs text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 6 — CONTACT  */}
      <section
        data-index="5"
        className="min-h-svh flex flex-col items-center justify-center px-6 py-16"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div className="max-w-lg w-full">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            06 / Contact
          </span>
          <h2 className="text-4xl font-bold text-white mb-8">Hubungi Saya</h2>

          <div className="space-y-4">
            {/* EMAIL
              ┌──────────────────────────────────────────┐
              │  GANTI: tulis email kamu di href & teks  │
              └──────────────────────────────────────────┘ */}
            <a
              href="mailto:emailkamu@gmail.com"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs">Email</p>
                {/* GANTI teks email di sini ↓ */}
                <p className="text-white font-medium">qiyamipsz08@gmail.com</p>
              </div>
            </a>

            {/* INSTAGRAM
              ┌──────────────────────────────────────────┐
              │  GANTI: tulis username Instagram kamu    │
              └──────────────────────────────────────────┘ */}
            <a
              href="https://instagram.com/usernamekamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs">Instagram</p>
                {/* GANTI username IG di sini ↓ */}
                <p className="text-white font-medium">@q_.yvmmy8</p>
              </div>
            </a>

            {/* WHATSAPP
              ┌──────────────────────────────────────────┐
              │  GANTI: tulis no. WA kamu (format intl)  │
              │  Contoh: +6281234567890                   │
              └──────────────────────────────────────────┘ */}
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs">WhatsApp</p>
                {/* GANTI nomor WA di sini ↓ */}
                <p className="text-white font-medium">+6285260674775</p>
              </div>
            </a>
          </div>

          <p className="text-center text-white/30 text-xs mt-10">
            © 2025 Qiyami Puji Syarifah · Made with Next.js
          </p>
        </div>
      </section>
    </main>
  );
}
