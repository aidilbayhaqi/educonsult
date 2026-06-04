import {
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  Compass,
  Library,
  Receipt,
  Calculator,
  Building2,
  ClipboardCheck,
  Laptop,
  Megaphone,
  Globe,
  Briefcase,
} from "lucide-react";

const educationServices = [
  {
    icon: Compass,
    title: "Rekomendasi Kampus Terbaik",
    desc: "Analisis personal untuk menemukan kampus & jurusan yang sesuai dengan minat, anggaran, dan tujuan karier Anda.",
  },
  {
    icon: GraduationCap,
    title: "Sistem RPL Kampus",
    desc: "Pendampingan jalur Rekognisi Pembelajaran Lampau (RPL) untuk konversi pengalaman kerja menjadi SKS.",
  },
  {
    icon: FileText,
    title: "Bimbingan Skripsi",
    desc: "Pendampingan penyusunan skripsi S1 mulai dari proposal hingga sidang.",
  },
  {
    icon: BookOpen,
    title: "Bimbingan Tesis S2",
    desc: "Pendampingan penelitian, penulisan akademik, dan publikasi ilmiah.",
  },
  {
    icon: Award,
    title: "Pendampingan Disertasi S3",
    desc: "Bimbingan riset doktoral dari perencanaan hingga ujian promosi.",
  },
  {
    icon: Library,
    title: "Informasi & Akreditasi Kampus",
    desc: "Informasi akreditasi, biaya kuliah, beasiswa, dan jalur masuk perguruan tinggi.",
  },
];

const taxServices = [
  {
    icon: Receipt,
    title: "Pelaporan Pajak Pribadi",
    desc: "Pendampingan pelaporan SPT Tahunan Orang Pribadi secara akurat dan tepat waktu.",
  },
  {
    icon: Calculator,
    title: "Pelaporan Pajak Badan",
    desc: "Penyusunan dan pelaporan kewajiban perpajakan perusahaan sesuai regulasi terbaru.",
  },
  {
    icon: ClipboardCheck,
    title: "Konsultasi Pajak",
    desc: "Analisis perpajakan, tax planning, dan solusi kepatuhan pajak untuk individu maupun perusahaan.",
  },
  {
    icon: Building2,
    title: "Laporan Tahunan Perusahaan",
    desc: "Penyusunan laporan tahunan, laporan manajemen, dan dokumen kepatuhan korporasi.",
  },
];

const businessServices = [
  {
    icon: Laptop,
    title: "Konsultasi Teknologi Informasi",
    desc: "Perencanaan, implementasi, dan pengembangan solusi IT untuk mendukung transformasi digital perusahaan.",
  },
  {
    icon: Globe,
    title: "Pembuatan Website & Sistem",
    desc: "Pengembangan website company profile, e-commerce, aplikasi web, dan sistem informasi sesuai kebutuhan bisnis.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Strategi pemasaran digital melalui SEO, Google Ads, Social Media Marketing, dan optimasi brand online.",
  },
  {
    icon: Briefcase,
    title: "Konsultasi Pengembangan Bisnis",
    desc: "Pendampingan strategi bisnis, peningkatan operasional, digitalisasi, dan ekspansi usaha.",
  },
];

export function Services() {
  return (
    <section
      id="layanan"
      className="relative bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Layanan Profesional
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Solusi Terintegrasi untuk Pendidikan, Pajak & Bisnis
          </h2>

          <p className="mt-5 text-muted-foreground">
            Kami menghadirkan layanan konsultasi profesional untuk kebutuhan
            akademik, kepatuhan perpajakan, hingga transformasi digital dan
            pengembangan bisnis.
          </p>
        </div>

        {/* ================= PENDIDIKAN ================= */}
        <div className="mt-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Konsultasi Pendidikan
          </span>

          <h3 className="mt-3 text-3xl font-bold">
            Solusi Akademik dari Masuk Kuliah hingga Lulus
          </h3>

          <p className="mt-4 text-muted-foreground">
            Pendampingan pendidikan untuk membantu Anda mencapai target akademik
            secara efektif dan terarah.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationServices.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <service.icon className="h-6 w-6" />
              </div>

              <h4 className="mt-5 text-xl font-semibold">
                {service.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </article>
          ))}
        </div>

        {/* ================= PAJAK ================= */}
        <div className="mt-24 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pajak & Kepatuhan Bisnis
          </span>

          <h3 className="mt-3 text-3xl font-bold">
            Pendampingan Pajak hingga Pelaporan Perusahaan
          </h3>

          <p className="mt-4 text-muted-foreground">
            Membantu individu, UMKM, dan perusahaan memenuhi kewajiban
            perpajakan serta administrasi bisnis secara profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {taxServices.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <service.icon className="h-6 w-6" />
              </div>

              <h4 className="mt-5 text-xl font-semibold">
                {service.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </article>
          ))}
        </div>

        {/* ================= IT & BISNIS ================= */}
        <div className="mt-24 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            IT & Pengembangan Bisnis
          </span>

          <h3 className="mt-3 text-3xl font-bold">
            Solusi Digital untuk Pertumbuhan Bisnis
          </h3>

          <p className="mt-4 text-muted-foreground">
            Membantu perusahaan dan UMKM meningkatkan daya saing melalui
            teknologi, pemasaran digital, dan strategi pengembangan usaha.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessServices.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                <service.icon className="h-6 w-6" />
              </div>

              <h4 className="mt-5 text-xl font-semibold">
                {service.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}