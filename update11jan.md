# � Update Log - 11 Januari 2026: Dork King v2.5

Update kali ini difokuskan pada transformasi Dork King dari "sekadar tools" menjadi **ekosistem pembelajaran & alat kerja profesional**. Berikut adalah rincian lengkap perubahan, alasan, dan ekspektasi dampaknya.

---

## 🚀 1. Ultra Features (Phase 6)
Penambahan fitur kelas "Enterprise" untuk pengguna power-user & bug hunter profesional.

### A. Multiple Target Manager
*   **Apa yang Baru:**
    *   Sistem manajemen list target (bisa nambah/hapus domain).
    *   **Mass Scan Mode**: Fitur untuk menggabungkan target secara otomatis menggunakan operator `OR`.
*   **Alasan Penambahan:**
    *   Evaluasi workflow: User sering harus melakukan recon ke banyak domain (subsidiary) milik satu perusahaan.
    *   Manual query `site:a.com OR site:b.com` itu melelahkan dan rawan typo.
*   **Harapan:**
    *   Mempercepat proses recon hingga 5x lipat untuk target korporat.
    *   Mengurangi *human error* dalam penulisan syntax.

### B. Visual Dork Builder
*   **Apa yang Baru:**
    *   Antarmuka UI berbasis modal untuk menyusun query kompleks.
    *   Dropdown menu untuk operator (`intext`, `filetype`, `site` dll) dan logic (`AND`, `OR`).
    *   Live Preview query yang sedang disusun.
*   **Alasan Penambahan:**
    *   Banyak user pemula (Academy students) kesulitan menghafal syntax Google Dork.
    *   Mempermudah eksperimen kombinasi dork tanpa takut salah sintaks.
*   **Harapan:**
    *   Menurunkan *barrier to entry* bagi pemula.
    *   Memungkinkan pembuatan query yang sangat spesifik dan akurat secara visual.

---

## 📚 2. Academy Expansion (Phase 5)
Transformasi total modul pembelajaran.

*   **Apa yang Baru:**
    *   **15 Artikel Deep Dive**: Setiap artikel diperluas menjadi 1000+ kata dengan struktur: Pengertian -> Bahaya -> Dork Praktis -> Mitigasi.
    *   **Lokalisasi Penuh**: Semua konten kini dalam Bahasa Indonesia yang kasual namun teknis.
*   **Alasan Penambahan:**
    *   Versi sebelumnya terlalu singkat (hanya definisi saja).
    *   User butuh konteks *mengapa* dork ini berbahaya dan *bagaimana* cara menutup celahnya (Blue Team perspective).
*   **Harapan:**
    *   User tidak hanya bisa *copy-paste*, tapi paham fundamental riset keamanan.
    *   Menambah *value* edukasi pada tools ini.

---

## ⚡ 3. Quality of Life & Fixes
Penyempurnaan pengalaman pengguna (UX).

### A. UI/UX Fixes
*   **Fix Modal Layout**: Memperbaiki bug dimana konten modal melayang keluar karena struktur HTML yang salah (`div` pembungkus hilang).
*   **Cleanup**: Menghapus duplikasi search bar yang membingungkan.
*   **Alasan**: UI yang rapi meningkatkan kepercayaan dan kenyamanan pengguna.

### B. Keyboard Shortcuts
*   **Fitur**: `Ctrl + K` (Fokus Search), `Esc` (Blur).
*   **Alasan**: Standar industri (seperti di VS Code / Slack/ Discord) untuk efisiensi navigasi tanpa mouse.

---

## 🔮 Summary
Update v2.5 ini bukan sekadar polesan kosmetik, tapi **upgrade fungsional**. Dork King sekarang siap dipakai untuk skenario *real-world bug bounty* dengan fitur Mass Scan, sekaligus menjadi tempat belajar yang valid lewat Academy baru.

*Tertanda,*
**Developer**
