# Sistem Manajemen Perpustakaan

## Tim Pengembang
| No | NIM | Nama | Peran |
|----|-----|------|-------|
| 1 | G64190038 | Rafida Nisa Maghfiroh | Analis Sistem |
| 2 | G64190038 | Andra Setiyo Wicaksono | Tester |
| 3 | G64190092 | Ramadhanti Nisa Permahadi | Analis Sistem |
| 4 | G64190096 | Febri Bawahir | Front End Developer |
| 5 | G64190097 | Muhamad Rian Nayandra | Analis Sistem |


## Product Vision Documents

### Problem Description
Perpustakaan adalah salah satu sarana penyediaan sumber-sumber informasi yang dapat digunakan untuk meningkatkan kualitas sumber daya manusia. Dalam Pasal 4 UU Nomor 43 Tahun 2007 tentang perpustakaan disebutkan bahwa perpustakaan bertujuan memberikan layanan kepada pemustaka (pengguna perpustakaan), meningkatkan kegemaran membaca, serta memperluas wawasan dan pengetahuan untuk mencerdaskan kehidupan bangsa. Di sisi lain, teknologi informasi telah menjadi kebutuhan pada berbagai aspek. Oleh karena itu, diperlukan pengembangan untuk mentransformasikan perpustakaan tradisional menjadi perpustakaan digital. 

### Kapabilitas Sistem
Sistem telah mampu melakukan CRUD sederhana untuk melakukan simulasi peminjaman buku. Kelas-kelas yang terlibat dalam simulasi ini adalah Buku, Dosen, Mahasiswa, Pinjam, UI, UIBuku, UIUser, User, Dosen, dan Mahasiswa. UIBuku dan UIUser di sini sebagai anak dari UI. Dosen dan Mahasiswa di sini sebagai anak dari User. Kemudian tugas utama pada sistem ini adalah:
- Mengelola katalog buku
- Mengelola peminjaman buku


### Manfaat Sistem
Sistem dapat digunakan oleh perpustakaan untuk mempermudah peminjaman buku. Dengan menggunakan sistem ini, peminjaman buku pada perpustakaan menjadi semakin terstruktur dan dapat tercatat dengan rapi. Sehingga, tidak perlu lagi mencatat peminjaman buku secara konservatif.

## Analisis Berorientasi Objek

### Identifikasi Aktor
| No | Aktor | Deskripsi |
|----|-----|------|
| 1 | Pustakawan | Aktor yang bertanggung jawab untuk menambahkan buku, menambahkan buku, menambah user, dan menghapus user |
| 2 | Antarmuka | Aktor yang berperan menampilkan objek antarmuka yang ada di dalam sistem kepada pustakawan |

### Identifikasi User Stories
| No | Aktor | User Story | Acceptance Criteria |
|----|-----|------|-------|
| 1 | Pustakawan | Sebagai seorang pustakawan, saya ingin menambahkan buku ke dalam list buku | Buku berhasil ditambahkan ke dalam list buku |
| 2 | Pustakawan | Sebagai seorang pustakawan, saya ingin menghapus buku yang ada dalam list buku | Buku berhasil dihapus dari list buku |
| 3 | Pustakawan | Sebagai seorang pustakawan, saya ingin menambahkan user yang ingin meminjam buku | User berhasil ditambahkan |
| 4 | Pustakawan | Sebagai seorang pustakawan, saya ingin menghapus user yang telah mengembalikan buku | User berhasil dihapus |
