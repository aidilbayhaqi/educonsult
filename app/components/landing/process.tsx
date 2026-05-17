
import Image from "next/image";

const steps = [
  { n: "01", title: "Konsultasi Awal", desc: "Sesi diskusi gratis untuk memahami kebutuhan, target, dan kondisi akademik Anda." },
  { n: "02", title: "Penyusunan Roadmap", desc: "Tim ahli merancang strategi personal — mulai pemilihan topik, kampus, hingga timeline." },
  { n: "03", title: "Pendampingan Intensif", desc: "Mentor mendampingi setiap tahap dengan jadwal fleksibel dan revisi tanpa batas." },
  { n: "04", title: "Lulus & Sukses", desc: "Anda meraih hasil terbaik — diterima kampus impian atau lulus sidang dengan nilai memuaskan." },
];

export function Process() {
  return (
    <section id="proses" className="relative bg-gradient-accent py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <Image
                src={'/students-collab.jpg'}
                alt="Mahasiswa kolaborasi belajar bersama mentor konsultan"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Proses Sederhana</span>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Empat Langkah Menuju <span className="text-gradient">Kesuksesan Akademik</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Proses yang transparan, terstruktur, dan terbukti efektif membawa ribuan mahasiswa lulus tepat waktu.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-soft">
                  <span className="font-display text-3xl font-semibold text-gradient">{s.n}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
