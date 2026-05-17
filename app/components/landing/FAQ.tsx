"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Apa itu sistem RPL kampus dan siapa yang bisa mengikutinya?",
    a: "RPL (Rekognisi Pembelajaran Lampau) adalah jalur kuliah resmi yang mengakui pengalaman kerja & sertifikasi sebagai SKS. Cocok untuk profesional minimal 3 tahun pengalaman yang ingin meraih gelar S1/S2 lebih cepat dengan ijazah resmi terdaftar Dikti.",
  },
  {
    q: "Apakah jasa bimbingan skripsi & tesis legal dan etis?",
    a: "Ya. Layanan kami berfokus pada bimbingan, mentoring, dan review — bukan joki. Anda tetap menulis dengan pendampingan ahli, hasil orisinal lolos Turnitin <15%, dan disertai sertifikat bebas plagiarisme.",
  },
  {
    q: "Berapa biaya konsultasi pendidikan di Edukonsul?",
    a: "Konsultasi awal 100% gratis. Biaya program disesuaikan dengan kebutuhan: rekomendasi kampus, RPL, skripsi, tesis, atau disertasi. Tersedia cicilan ringan dan paket hemat.",
  },
  {
    q: "Berapa lama proses pendampingan hingga lulus?",
    a: "Skripsi rata-rata 3–6 bulan, tesis 6–12 bulan, dan disertasi 12–24 bulan tergantung topik & kampus. Program RPL S1 bisa selesai 1,5–2 tahun.",
  },
  {
    q: "Apakah kampus mitra terakreditasi BAN-PT?",
    a: "Seluruh kampus mitra kami terakreditasi resmi BAN-PT (minimal Baik Sekali) dan terdaftar PDDikti, sehingga ijazah diakui untuk PNS, BUMN, maupun karier swasta.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Jawaban transparan untuk pertanyaan terpopuler
            seputar konsultasi pendidikan kami.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300"
              >
                {/* Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-gray-50 cursor-pointer"
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}