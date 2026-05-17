import { GraduationCap, BookOpen, FileText, Award, Compass, Library } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Rekomendasi Kampus Terbaik",
    desc: "Analisis personal untuk menemukan kampus & jurusan yang paling sesuai dengan minat, anggaran, dan tujuan karier Anda di dalam maupun luar negeri.",
  },
  {
    icon: GraduationCap,
    title: "Sistem RPL Kampus",
    desc: "Pendampingan jalur Rekognisi Pembelajaran Lampau (RPL) untuk konversi pengalaman kerja menjadi SKS — kuliah lebih cepat, ijazah resmi.",
  },
  {
    icon: FileText,
    title: "Bimbingan Skripsi",
    desc: "Pendampingan penyusunan skripsi S1 dari topik, proposal, metodologi, hingga sidang dengan mentor sesuai bidang keilmuan.",
  },
  {
    icon: BookOpen,
    title: "Bimbingan Tesis S2",
    desc: "Riset berkualitas, penulisan akademik standar internasional, serta strategi publikasi jurnal terindeks Sinta & Scopus.",
  },
  {
    icon: Award,
    title: "Pendampingan Disertasi S3",
    desc: "Bimbingan disertasi doktoral menyeluruh: roadmap riset, analisis data lanjutan, sidang tertutup hingga promosi terbuka.",
  },
  {
    icon: Library,
    title: "Informasi & Akreditasi Kampus",
    desc: "Database lengkap akreditasi BAN-PT, biaya, beasiswa, dan jalur masuk kampus negeri & swasta terbaik di Indonesia.",
  },
];

export function Services() {
  return (
    <section id="layanan" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Layanan Kami</span>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Solusi <span className="text-gradient">Pendidikan Universitas</span> dari Awal Hingga Lulus
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Satu mitra terpercaya untuk seluruh perjalanan akademik Anda — mulai memilih kampus
            hingga meraih gelar doktor.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
