import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              Edukonsul.
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Konsultan pendidikan terpercaya untuk membantu Anda memilih kampus, menyelesaikan tugas akhir, dan mewujudkan karier akademik impian.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Layanan</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Rekomendasi Kampus</li>
              <li>Sistem RPL Kampus</li>
              <li>Bimbingan Skripsi & Tesis</li>
              <li>Pendampingan Disertasi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +62 812 3456 7890</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> halo@edukonsul.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Edukonsul. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
