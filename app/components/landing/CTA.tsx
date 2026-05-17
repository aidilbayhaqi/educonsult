import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";


export function CTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-gradient-accent py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-10 shadow-2xl sm:p-14 lg:p-20">
          
          {/* Glow Effect */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-5">
            
            {/* Left Content */}
            <div className="lg:col-span-3">
              
              {/* Heading */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Siap Memulai Perjalanan Akademik Anda?
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Jadwalkan sesi konsultasi gratis hari ini.
                Tim kami akan membantu memetakan langkah terbaik
                untuk meraih gelar impian — tanpa biaya,
                tanpa komitmen.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />

                  Chat WhatsApp
                </a>

                {/* Email Button */}
                <a
                  href="mailto:halo@edukonsul.id"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >
                  Email Kami

                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:col-span-2 lg:block">
              
              {/* Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-white/10 blur-xl" />

              {/* Image */}
              <Image
                src={'/graduate.jpg'}
                alt="Mahasiswa wisuda lulus dengan gelar dari kampus impian"
                width={1200}
                height={1400}
                className="relative w-full rounded-2xl border border-white/20 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}