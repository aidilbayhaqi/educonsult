import Image from "next/image";
import {
  MessageCircle,
  GraduationCap,
  Calculator,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const contactServices = [
  {
    title: "Pendidikan",
    desc: "Kampus, RPL, Skripsi, Tesis, Disertasi, serta konsultasi akademik untuk mahasiswa dan profesional.",
    icon: GraduationCap,
    href: "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20pendidikan.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-300",
  },
  {
    title: "Pajak & Kepatuhan",
    desc: "SPT Tahunan, Pajak Badan, Tax Planning, serta penyusunan laporan dan kepatuhan perusahaan.",
    icon: Calculator,
    href: "https://wa.me/6281234567891?text=Halo,%20saya%20ingin%20konsultasi%20pajak.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  {
    title: "IT & Bisnis",
    desc: "Website, Sistem Informasi, Digital Marketing, Branding, dan strategi pengembangan bisnis.",
    icon: Briefcase,
    href: "https://wa.me/6281295533604?text=Halo,%20saya%20ingin%20konsultasi%20IT%20dan%20bisnis.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-300",
  },
];

export function CTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 p-8 shadow-2xl sm:p-12 lg:p-16">

          {/* Background Effects */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-5">

            {/* Left Content */}
            <div className="lg:col-span-3">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
                Konsultasi Profesional
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Solusi Pendidikan, Pajak & Pengembangan Bisnis
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Dapatkan pendampingan profesional mulai dari pendidikan,
                perpajakan, teknologi informasi, hingga strategi pengembangan
                bisnis untuk individu, UMKM, maupun perusahaan.
              </p>

              {/* Contact Cards */}
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {contactServices.map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex h-full flex-col rounded-3xl border border-white/20 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.borderHover}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg}`}
                      >
                        <service.icon
                          className={`h-7 w-7 ${service.iconColor}`}
                        />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    {/* Badge */}
                    <span className="mt-5 inline-flex w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      Konsultasi
                    </span>

                    {/* Title */}
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-500">
                      {service.desc}
                    </p>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="flex items-center text-sm font-medium text-green-600">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat WhatsApp
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
                <div>✓ Respon Cepat</div>
                <div>✓ Konsultan Berpengalaman</div>
                <div>✓ Pendampingan Profesional</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:col-span-2 lg:block">
              <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-xl" />

              <Image
                src="/hero-student.jpg"
                alt="Konsultasi Profesional"
                width={1200}
                height={1400}
                priority
                className="relative h-[580px] w-full rounded-3xl border border-white/20 object-cover shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}