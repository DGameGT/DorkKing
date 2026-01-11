# 👑 Dork King - Generator Google Dorks Terbaik

> **Alat Pengintaian Pasif Tingkat Profesional untuk Peneliti Keamanan & Pemburu Bug Bounty**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![100% Client-Side](https://img.shields.io/badge/Client--Side-100%25-green.svg)](https://rajadork.dgxo.my.id)
[![Privacy Focused](https://img.shields.io/badge/Privacy-Focused-brightgreen.svg)](https://rajadork.dgxo.my.id)

---

## Kredit & Atribusi

**Kode Sumber Asli:** Proyek ini didasarkan pada [OSINT-dork-tool](https://github.com/mitocondria40/OSINT-dork-tool.git) oleh mitocondria40.

**Peningkatan Dork King 👑:** Dimodifikasi secara ekstensif dan ditingkatkan oleh Tim DGXO dengan fitur-fitur revolusioner termasuk sistem mode ganda, pembuat kueri (query builder), 150+ pola, dan 24 operator.

---

**Dork King 👑** adalah generator Google Dorks yang paling komprehensif dan kuat yang pernah ada. Dengan 150+ pola dork siap pakai di 20 kategori, 24 operator cepat, dan sistem pembuat kueri revolusioner, alat ini dirancang untuk menjadi alat utama bagi penelitian keamanan, perburuan bug bounty, dan investigasi OSINT.

**Demo Langsung:** [https://rajadork.dgxo.my.id](https://rajadork.dgxo.my.id)

---

## Mengapa Dork King 👑?

### Permata Mahkota

- **Pembuat Kueri Revolusioner** - Bangun kueri multi-dork yang kompleks secara interaktif, bukan sekadar pencarian satu kali klik
- **Sistem Mode Ganda** - Beralih antara mode Domain Target dan mode Input Bebas
- **24 Operator Cepat** - Cakupan operator terdepan di industri dengan penyisipan satu klik
- **150+ Pola Dork** - Koleksi terlengkap yang diatur dalam 20 kategori
- **Fitur Enterprise** - Pencarian Batch, Preset, Bagikan Kueri, Ekspor Hasil
- **100% Sisi-Klien** - Tidak ada data yang dikirim ke server mana pun, privasi total
- **Pratinjau Real-Time** - Lihat kueri Anda sebelum dieksekusi

### Apa yang Membuatnya Berbeda

Sebagian besar alat dork hanyalah antarmuka "klik dan cari" yang sederhana. **Dork King 👑** adalah **bengkel konstruksi kueri** yang memberi Anda:

- **Kendali Penuh** - Bangun kueri langkah demi langkah, gabungkan beberapa dork, edit secara manual
- **Alat Pembelajaran** - Pahami bagaimana dork digabungkan dan bekerja sama
- **Fleksibilitas** - Targetkan domain tertentu ATAU buat kueri bentuk bebas
- **Efisiensi** - Tombol operator cepat menghilangkan kebutuhan menghafal sintaks
- **Kekuatan** - Gabungkan 2, 3, 4+ dork dengan cara yang tidak bisa ditangani kompetitor

---

## Fitur Utama

### 1. Sistem Mode Ganda

#### Mode Domain Target
Fokuskan dork Anda pada domain target tertentu:
- Penanganan prefiks `site:` otomatis
- Validasi dan pembersihan domain
- Sempurna untuk bug bounty dan pengintaian yang ditargetkan

#### Mode Input Bebas
Kebebasan penuh untuk kueri kustom yang kompleks:
- Tidak ada prefiks otomatis
- Pembuatan kueri manual
- Ideal untuk OSINT dan penelitian lanjutan

**Beralih antar mode secara instan!**

---

### 2. Pembuat Kueri Revolusioner

Tidak seperti alat tradisional yang langsung menjalankan pencarian, Dork King memungkinkan Anda **MEMBANGUN** kueri:

1. **Klik operator** → Masukkan di posisi kursor
2. **Klik pola dork** → Tambahkan ke kueri (belum mencari!)
3. **Gabungkan beberapa dork** → Bangun kueri yang kompleks
4. **Edit secara manual** → Sempurnakan kueri Anda
5. **Pratinjau real-time** → Lihat hasil akhirnya
6. **Eksekusi saat siap** → Klik "🔍 SEARCH NOW"

**Contoh Alur Kerja:**
```
1. Beralih ke mode "Input Bebas"
2. Klik [intext:] → "intext:"
3. Klik [" "] → "intext:"
4. Ketik: password → "intext:"password""
5. Klik "SQL Dumps" → "intext:"password" filetype:sql intext:CREATE TABLE"
6. Klik "AWS Keys" → "intext:"password" filetype:sql intext:CREATE TABLE intext:AKIA"
7. Pratinjau menampilkan kueri lengkap
8. Klik 🔍 SEARCH NOW untuk mengeksekusi
```

---

### 3. Operator Cepat (Total 24)

#### Operator Pencarian Dasar
- `intext:` - Cari di dalam teks halaman
- `intitle:` - Cari di dalam judul halaman
- `inurl:` - Cari di dalam URL
- `filetype:` - Filter berdasarkan ekstensi file
- `site:` - Batasi pada domain tertentu

#### Semua Varian (Pencocokan Ketat)
- `allintext:` - SEMUA kata kunci harus ada di teks
- `allintitle:` - SEMUA kata kunci harus ada di judul
- `allinurl:` - SEMUA kata kunci harus ada di URL

#### Operator Lanjutan
- `ext:` - Alias untuk filetype
- `inanchor:` - Cari di teks jangkar tautan
- `related:` - Temukan situs web serupa
- `cache:` - Lihat versi cache
- `define:` - Definisi kamus

#### Filter Waktu & Tanggal
- `before:` - Hasil sebelum tanggal (TTTT-BB-HH)
- `after:` - Hasil setelah tanggal (TTTT-BB-HH)

#### Operator Khusus
- `" "` - Pencocokan frasa tepat
- `*` - Wildcard (kata apa saja)
- `+` - Paksa sertakan istilah
- `-` - Kecualikan istilah
- `OR` - Logika ATAU
- `AND` - Logika DAN
- `AROUND(X)` - Istilah dalam jarak X kata satu sama lain
- `..` - Rentang angka (mis., 2020..2025)

---

### 4. Pola Dork (150+ dalam 20 Kategori)

#### File & Dokumen (10 pola)
File PDF, lembar Excel, dokumen Word, presentasi, arsip, eBook, dan lainnya.

#### Server & Konfigurasi (10 pola)
Daftar direktori, file konfigurasi, file log, status server web, konfigurasi Docker/Kubernetes.

#### Bug Bounty & Kerentanan (10 pola)
Pengalihan terbuka, parameter XSS, vektor injeksi SQL, LFI/RFI, SSRF, IDOR, unggahan file, XXE.

#### Cloud & DevOps (10 pola)
Bucket AWS S3, penyimpanan Azure, Google Cloud, repo Git, konfigurasi CI/CD, file environment.

#### Database & Cadangan (10 pola)
Dump SQL, ekspor MongoDB, dump Redis, cadangan database, phpMyAdmin, kredensial.

#### Kredensial & Rahasia (10 pola)
Kunci API, kunci AWS, kunci SSH, token JWT, token OAuth, kunci Stripe, token GitHub, token Slack.

#### Kode Sumber & Kebocoran (8 pola)
Kode sumber yang terekspos, file cadangan, kata sandi yang di-hardcode, paparan .git, SVN, file swap.

#### Lingkungan Debug & Dev (8 pola)
Mode debug aktif, situs pengujian/staging, API Swagger, GraphQL, debug Laravel/Django, jejak stack.

#### Jaringan & Infrastruktur (8 pola)
Port terbuka, Elasticsearch, Kibana, Grafana, RabbitMQ, Redis, Apache Tomcat, Prometheus.

#### Orang & Identitas OSINT (8 pola)
Daftar karyawan, direktori telepon, CV/resume, nomor identitas, daftar email, bagan organisasi.

#### OSINT & Pengintaian (8 pola)
Penemuan subdomain, Wayback Machine, kamera publik, perangkat IoT, panel VPN, router, webcam.

#### Teknologi Web (8 pola)
Deteksi WordPress, Joomla, Drupal, PHP, ASP.NET, Node.js, React, Vue.js.

#### Otentikasi & Login (8 pola)
Halaman login, panel admin, lupa kata sandi, SSO, OAuth, SAML, otentikasi dasar, direktori yang dilindungi.

#### E-Commerce (7 pola)
Magento, Shopify, WooCommerce, halaman pembayaran, halaman keranjang, formulir pemesanan, faktur.

#### Pastebin & Berbagi Kode (8 pola)
Pastebin, GitHub, GitLab, Bitbucket, Gist, SourceForge, Paste.ee, Justpaste.it.

#### Intelijen Pelanggaran & Insiden (6 pola)
Laporan pelanggaran data, korban ransomware, kebocoran kredensial, laporan peretasan, pengungkapan kerentanan.

#### Operator Lanjutan (10 pola)
Cache, situs terkait, pencocokan tepat, pengecualian, varian all-in, jangkar, rentang angka.

#### Media Sosial (8 pola)
Facebook, Twitter/X, LinkedIn, Instagram, TikTok, Reddit, diskusi GitHub, Stack Overflow.

#### API & Dokumentasi (8 pola)
Endpoint API, Swagger/OpenAPI, Postman, GraphQL, REST, SOAP, dokumen API.

#### CMS & Kerangka Kerja (8 pola)
Laravel, Django, Ruby on Rails, Spring Boot, Struts, CodeIgniter, Symfony, Flask.

---

## Kasus Penggunaan

### Perburuan Bug Bounty
- Temukan kerentanan di domain target
- Temukan kredensial dan rahasia yang terekspos
- Identifikasi kesalahan konfigurasi dan masalah keamanan
- Temukan panel admin dan halaman debug

### Investigasi OSINT
- Pencarian orang dan pemeriksaan latar belakang
- Pengumpulan intelijen perusahaan
- Pengintaian media sosial
- Pemantauan pelanggaran data

### Penelitian Keamanan
- Pengintaian pasif
- Pemetaan permukaan serangan
- Identifikasi tumpukan teknologi
- Enumerasi infrastruktur

### Pengujian Penetrasi
- Fase pengintaian awal
- Pembuatan profil target
- Penemuan kerentanan
- Pemanenan kredensial

---

## Contoh Kueri

### Pemindaian Domain Target Dasar
```
Mode: Domain Target
Input: example.com
Klik: "Admin Panels" + "Login Pages" + "SQL Errors"
Hasil: site:example.com (inurl:admin OR inurl:login) intitle:"login" intext:"sql syntax"
```

### Perburuan Kebocoran Multi-Dork Lanjutan
```
Mode: Input Bebas
Bangun: intext:"password" filetype:sql intext:"CREATE TABLE" site:pastebin.com before:2024-01-01
Temuan: Dump SQL dengan kata sandi di Pastebin sebelum 2024
```

### Penemuan Penyimpanan Cloud
```
Mode: Input Bebas
Bangun: site:s3.amazonaws.com OR site:blob.core.windows.net intext:"confidential"
Temuan: Bucket penyimpanan cloud yang terekspos dengan data rahasia
```

### Paparan Kunci API
```
Mode: Input Bebas
Bangun: (intext:"api_key" OR intext:"AKIA") (filetype:json OR filetype:env OR filetype:txt)
Temuan: Kunci API dan kredensial AWS yang terekspos dalam file
```

---

## Antarmuka Pengguna

### Desain Bersih, Gelap, Profesional
- **Tema Gelap** - Nyaman di mata untuk sesi penelitian yang panjang
- **Kategori Terorganisir** - Ikon emoji untuk navigasi visual cepat
- **Tata Letak Responsif** - Bekerja di desktop, tablet, dan seluler
- **Aksesibilitas** - Dukungan pembaca layar, navigasi keyboard
- **Distraksi Minimal** - Fokus pada pekerjaan

### Sorotan UX
- 🟢 **Toggle Mode Aktif/Tidak Aktif** - Sorotan hijau untuk mode aktif
- 📊 **Pratinjau Kueri Real-Time** - Lihat kueri Anda saat Anda membangunnya
- 📋 **Salin Satu Klik** - Salin kueri ke papan klip
- 🔍 **Tombol Cari yang Menonjol** - Panggilan untuk bertindak yang jelas
- ⚡ **Pintasan Keyboard** - Tekan Enter untuk mencari

---

## Privasi & Keamanan

### Pemrosesan 100% Sisi-Klien
- **Tidak Ada Komunikasi Server** - Semua pemrosesan terjadi di browser Anda
- **Tidak Ada Pengumpulan Data** - Kami tidak melacak, mencatat, atau menyimpan apa pun
- **Tidak Ada Cookie** - Nol cookie pelacakan
- **Hanya HTTPS** - Koneksi aman ke Google Search
- **Open Source** - Audit kodenya sendiri

### Penggunaan yang Bertanggung Jawab
> [!WARNING]
> **Gunakan Secara Bertanggung Jawab dan Legal**
>
> Dork King dirancang untuk tujuan penelitian keamanan, OSINT, dan pendidikan yang sah. Pengguna harus:
> - Menghormati persyaratan layanan situs web
> - Mendapatkan otorisasi yang tepat sebelum pengujian
> - Mematuhi hukum dan peraturan setempat
> - Menggunakan temuan secara etis dan bertanggung jawab
>
> Pembuat alat tidak bertanggung jawab atas penyalahgunaan.

---

## Tumpukan Teknis

- **HTML5** - Markup semantik yang dapat diakses
- **CSS3** - Penataan gaya modern dengan variabel CSS
- **Vanilla JavaScript** - Tanpa kerangka kerja, performa murni
- **Google Fonts** - Roboto Mono untuk estetika peretas

### Dukungan Browser
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## Instalasi & Penerapan

### Opsi 1: Gunakan Online (Disarankan)
Cukup kunjungi [https://rajadork.dgxo.my.id](https://rajadork.dgxo.my.id)

### Opsi 2: Clone dan Jalankan Secara Lokal
```bash
# Clone repositori
git clone https://github.com/DGameGT/DorkKing.git

# Masuk ke direktori
cd DorkKing

# Buka di browser (tidak perlu build!)
open index.html
```

### Opsi 3: Terapkan ke GitHub Pages
1. Fork repositori ini
2. Aktifkan GitHub Pages di Pengaturan
3. Atur sumber ke cabang `main`
4. Akses di `https://yourusername.github.io/DorkKing/`

### Opsi 4: Terapkan ke Vercel/Netlify
Cukup seret dan lepas folder - ini bekerja secara instan!

---

## Dokumentasi

### Panduan Mulai Cepat

1. **Pilih Mode Anda**
   - Klik "🌐 Domain Target" untuk pemindaian domain terfokus
   - Klik "📝 Input Bebas" untuk pembuatan kueri kustom

2. **Bangun Kueri Anda**
   - Gunakan tombol Operator Cepat untuk menyisipkan sintaks
   - Klik tombol Kategori Dork untuk menambahkan pola
   - Ketik secara manual untuk kontrol halus

3. **Pratinjau & Eksekusi**
   - Tonton pembaruan pratinjau kueri secara real-time
   - Klik "🔍 SEARCH NOW" saat siap
   - Hasil terbuka di tab baru

### Tip Lanjutan

**Menggabungkan Beberapa Dork:**
```
Mode Situs: example.com (Menambahkan "Panel Admin" + "File Konfigurasi" + "Dump SQL")
Hasil: site:example.com (inurl:admin OR inurl:login) (filetype:xml OR filetype:conf) filetype:sql
```

**Pencarian Terikat Waktu:**
```
Klik [before:] → Ketik: 2024-01-01
Klik [after:] → Ketik: 2020-01-01
Tambahkan: filetype:pdf breach
Hasil: filetype:pdf breach before:2024-01-01 after:2020-01-01
```

**Pencarian Proksimitas:**
```
Ketik: password
Klik [AROUND()]
Ketik: leak
Hasil: password AROUND(5) leak
```

### Pintasan Keyboard
- `Enter` - Eksekusi pencarian (saat input fokus)
- `Tab` - Navigasi antar elemen
- `Escape` - Tutup notifikasi

---

## Berkontribusi

Kami menyambut kontribusi! Begini cara Anda dapat membantu:

### Menambahkan Pola Dork Baru
1. Edit `script.js`
2. Temukan array `dorksData`
3. Tambahkan pola Anda ke kategori yang sesuai:
```javascript
{
  category: "🐛 Bug Bounty & Vulnerabilities",
  items: [
    // ... item yang ada
    { label: "Dork Baru Anda", dork: "your:dork query:here" }
  ]
}
```

### Melaporkan Masalah
- Gunakan GitHub Issues
- Berikan versi browser dan OS
- Sertakan langkah-langkah untuk mereproduksi
- Tangkapan layar sangat membantu!

### Permintaan Fitur
- Buka diskusi terlebih dahulu
- Jelaskan kasus penggunaan
- Pertimbangkan kompatibilitas ke belakang

---

## Riwayat Versi

### v2.0.0 (2026-01-11) - **Dork King Edition** 👑
**Perombakan Besar:**
- 🔥 **BARU:** Sistem Pembuat Kueri Revolusioner
- 🔥 **BARU:** Mode Ganda (Domain Target / Input Bebas)
- 🔥 **BARU:** 24 Operator Cepat (diperluas dari 9)
- 🔥 **BARU:** 150+ Pola Dork (diperluas dari ~80)
- 🔥 **BARU:** 20 Kategori (diperluas dari 13)
- 🔥 **BARU:** 7 Kategori Baru Ditambahkan:
  - 🛠️ Teknologi Web
  - 🔐 Otentikasi & Login
  - 🛒 E-Commerce
  - 📋 Pastebin & Berbagi Kode
  - 📱 Media Sosial
  - 📡 API & Dokumentasi
  - ⚡ CMS & Kerangka Kerja
- ✨ **DITINGKATKAN:** Emoji kategori untuk UX yang lebih baik
- ✨ **DITINGKATKAN:** Lebih banyak pola di kategori yang ada
- ✨ **DITINGKATKAN:** Pratinjau kueri real-time
- ✨ **DITINGKATKAN:** Tombol pencarian khusus
- ✨ **DITINGKATKAN:** Organisasi operator yang lebih baik dan rapi
### v2.5.0 (2026-01-11) - **Enterprise Edition** 👑
**Pembaruan Fitur Utama:**
- 🔥 **BARU:** **Generator Pencarian Batch** - Jalankan dork terhadap beberapa domain sekaligus
- 🔥 **BARU:** **Simpan/Muat Preset** - Simpan kueri favorit Anda (Lokal & Ekspor File)
- 🔥 **BARU:** **Validator Kueri** - Pemeriksaan sintaks & peringatan real-time
- 🔥 **BARU:** **Bagikan Kueri** - Hasilkan tautan yang dapat dibagikan untuk kolaborasi
- 🔥 **BARU:** **Ekspor Hasil** - Ekspor kueri ke JSON, CSV, MD, atau TXT
- 🔥 **BARU:** **Perombakan UI** - Navbar Baru, Menu Burger, dan Filter Pencarian Dork
- ✨ **DITINGKATKAN:** Salin & Favoritkan dork (Sistem Bintang)
- ✨ **DITINGKATKAN:** Sistem notifikasi toast

### v2.0.0 (2026-01-11) - **Dork King Edition** 👑
**Perombakan Besar:**
- 🔥 **BARU:** Sistem Pembuat Kueri Revolusioner
- Kategori dork dasar
- Antarmuka pencarian klik-untuk-mencari sederhana
- Fungsionalitas inti

---

## Kredit

**Dibuat dengan ❤️ oleh Tim DGXO**

**Proyek Asli:** Berbasis pada [OSINT-dork-tool](https://github.com/mitocondria40/OSINT-dork-tool) karya **mitocondria40**

- **Pengembang Utama:** DGameGT
- **Asisten AI:** MashaAI
- **Desain:** Tim Desain DGXO
- **Didukung oleh:** Infrastruktur DGXO

### Ucapan Terima Kasih
- Dokumentasi Operator Pencarian Google
- Komunitas OSINT
- Komunitas Bug Bounty
- Peneliti Keamanan di Seluruh Dunia

---

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](LICENSE) untuk detailnya.

```
MIT License

Copyright (c) 2026 DGXO - Dork King

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## Tautan

- **Situs Web:** [https://rajadork.dgxo.my.id](https://rajadork.dgxo.my.id)
- **Dokumentasi:** [https://rajadork.dgxo.my.id/docs](https://rajadork.dgxo.my.id/docs)
- **GitHub:** [https://github.com/DGameGT/Dork-King](https://github.com/DGameGT/Dork-King)
- **Masalah:** [https://github.com/DGameGT/Dork-King/issues](https://github.com/DGameGT/Dork-King/issues)
- **DGXO:** [https://dgxo.my.id](https://dgxo.my.id)

---

## Kontak & Dukungan

- **Email:** contact@dgxo.my.id
- **Twitter:** [@DGXO](https://twitter.com/DGXO)
- **Discord:** [Komunitas DGXO](#)

---

<div align="center">

**🌟 Jika Anda merasa Dork King bermanfaat, silakan beri bintang! 🌟**

Dibuat dengan 👑 oleh Tim DGXO

**Pengetahuan adalah kekuatan. Keamanan adalah kebebasan. Gunakan keduanya secara bertanggung jawab.**

---

**© 2026 Dork King - Didukung oleh DGXO**

</div>
