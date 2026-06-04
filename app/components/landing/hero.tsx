import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Background Effects */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">

        {/* Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-blue-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Mitra Konsultasi Pendidikan, Pajak & Pengembangan Bisnis
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Solusi Profesional untuk{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
              Pendidikan, Pajak & Bisnis
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            Mendampingi mahasiswa, profesional, UMKM, dan perusahaan
            dalam mencapai tujuan akademik, kepatuhan perpajakan,
            transformasi digital, serta pengembangan bisnis yang
            berkelanjutan.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#layanan"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
            >
              Lihat Layanan
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Profesional & Terpercaya
            </div>

            <div className="flex items-center gap-2">
              <span className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-r from-blue-600 to-indigo-800"
                  />
                ))}
              </span>

              <span>
                <b className="text-gray-900">5.000+</b> klien & mahasiswa terbantu
              </span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 opacity-20 blur-2xl" />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-2xl">
            <Image
              src="/graduate.jpg"
              alt="Konsultasi Pendidikan Pajak dan Bisnis"
              width={1200}
              height={1200}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card Left */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:block">
            <div className="text-3xl font-bold text-blue-600">
              98%
            </div>

            <div className="text-xs text-gray-500">
              Tingkat Kepuasan Klien
            </div>
          </div>

          {/* Floating Card Right */}
          <div className="absolute -right-4 top-8 hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:block">
            <div className="text-3xl font-bold text-blue-600">
              200+
            </div>

            <div className="text-xs text-gray-500">
              Klien & Mitra
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}