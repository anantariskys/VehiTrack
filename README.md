# VehiTrack
<p align="center">
  <a href="https://github.com/anantariskys/vehitrack">
    <h1 align="center" style="color: #4B47FF">VehiTrack</h1>
  </a>
</p>

Aplikasi ini dirancang untuk memudahkan perusahaan tambang nikel dalam memantau dan mengelola kendaraan yang digunakan untuk operasional perusahaan. Aplikasi ini memungkinkan pegawai untuk memesan kendaraan, yang kemudian disetujui oleh atasan secara berjenjang. Selain itu, aplikasi ini juga menyediakan dashboard untuk memonitor pemakaian kendaraan dan laporan pemesanan dalam format Excel.

## 🚀 Tech Stack / Framework

- **Laravel 11**
- **Inertia.js**
- **React**
- **Tailwind CSS**
- **Zustand**

## Struktur database
![db structure](https://github.com/anantariskys/vehitrack/blob/main/public/struktur_db.png?raw=true)

## Fitur Utama

- **Manajemen Kendaraan**: Admin dapat menambah, mengedit, dan menghapus data kendaraan yang tersedia, baik milik perusahaan maupun kendaraan sewaan.
- **Manajemen Driver**: Admin dapat menambah, mengedit, dan menghapus data supir yang tersedia.
- **Pemesanan Kendaraan**: Admin dapat menginputkan pemesanan kendaraan dan menentukan driver serta pihak yang menyetujui pemesanan, dengan syarat banyak pihak yang menyetujui pemesanan minimal 2 pihak dan Admin hanya bisa memilih kendaraan dan driver yang ber status "available"
- **Service Kendaraan**: Admin dapat mendata kendaraan yang akan diservis, kendaraan yang di servis status akan berubah menjadi maintenance sehigga tidak bisa di gunakan untuk pemesanan.
- **Riwayat Pemakaian Kendaraan**: Menampilkan riwayat pemakaian kendaraan dari setiap pemesanan yang selesai
- **Persetujuan Berjenjang**: Pemesanan kendaraan harus disetujui oleh minimal dua level atasan dengan role approver sebelum dapat digunakan.
- **Dashboard Monitoring**: Menampilkan grafik pemakaian kendaraan, termasuk durasi pemesanan/pemakaian dan konsumsi bahan bakar, serta menampilkan statistik dari Kendaraan, Driver dan Pemesanan.
- **Laporan Pemesanan**: Admin dapat mengunduh laporan pemesanan kendaraan secara periodik dalam format **Excel**.

## System Requirements

-   **PHP Version:**  8.2.12
-   **Laravel Framework Version:** 11.36.1
-   **Database Version:** MySQL 15.1

## 📥 Panduan Instalasi
Langkah-langkah berikut akan memandu Anda melalui proses instalasi untuk menjalankan aplikasi di lingkungan pengembangan secara lokal di komputer Anda:
1. Clone versi terbaru dari repository.
2. Jalankan perintah composer install untuk menginstal dependensi PHP yang diperlukan.
3. Salin file .env.example menjadi .env, lalu edit kredensial database sesuai dengan server database Anda.
4. Jalankan php artisan key:generate untuk membuat aplikasi key baru.
5. Jalankan php artisan migrate untuk membuat tabel pada database. Anda juga dapat menambahkan flag --seed untuk mengisi database dengan data dummy.
6. Jalankan php artisan serve untuk memulai server pengembangan.
7. Buka terminal lain dan jalankan npm install && npm run build untuk menginstal modul node yang diperlukan.Jalankan npm run dev untuk mengompilasi aset untuk pengembangan.
8. Buka browser Anda dan akses http://localhost:8000 untuk melihat aplikasi.

# 📋 Daftar Akun Pengguna  

Berikut adalah daftar akun pengguna yang tersedia untuk pengujian aplikasi:  

| Nama                | Email                       | Password | Role          | Jabatan                |
| ------------------- | --------------------------- | -------- | ------------- | ---------------------- |
| Ananta Risky Susanto | admin_main@gmail.com        | password | Administrator | Pengelola Kendaraan    |
| Malsha Aqila         | approver_main1@gmail.com    | password | Approver      | Manajer Utama          |
| Kamilia Luthfitah    | approver_main2@gmail.com    | password | Approver      | Kepala Operasi Utama   |
| Lara Mariesta        | approver_branch1@gmail.com  | password | Approver      | Manajer Cabang         |
| Daffa Prayoga        | approver_branch2@gmail.com  | password | Approver      | Kepala Operasi Cabang  |
| Fadillah Putri       | approver_branch3@gmail.com  | password | Approver      | Supervisor Cabang      |

---

## 📖 Penjelasan Role

- **Administrator**:  
  Mengelola pemesanan kendaraan, mengatur driver, dan menentukan pihak yang menyetujui pemesanan.  

- **Approver**:  
  Memberikan persetujuan pemakaian kendaraan secara berjenjang.  

Gunakan informasi login di atas untuk mengakses aplikasi sesuai dengan role dan tugas masing-masing pengguna.  


## Panduan Pengguna

### Login

Anda dapat login sebagai admin atau approver sesuai daftar akun diatas. Setelah login, beberapa halaman menu akan tersedia berdasarkan peran Anda.

### 1. Dashboard

Menampilkan grafik penggunaan kendaraan, Statistik dari Kendaraan, Driver dan juga Pemesanan.

- **Peran Admin & Approver**: Dapat melihat seluruh dashboard, termasuk data kendaraan, driver, dan pemesanan.

### 2. Manajemen Kendaraan

Menampilkan daftar kendaraan, yang memungkinkan pemantauan konsumsi bahan bakar, jadwal servis, dan riwayat penggunaan kendaraan.

- **Peran Admin**: Dapat menambah, mengedit, dan menghapus data kendaraan (baik kendaraan milik perusahaan maupun kendaraan sewaan). Ketika pertama kali data kendaraan dibuat status secara default akan bernilai "Available" dan status ini akan berubah seiring waktu secara otomatis, apakah kendaraan tersebut sedang dalam pebaikan (maintenance) atau dalam pemesanan (unavalilable), admin tidak bisa menghapus kendaraan dengan status "maintenance" atau "unavailable"

### 3. Manajemen Driver

Menampilkan daftar driver yang tersedia beserta status mereka (available/assigned).

- **Peran Admin**: Dapat menambah, mengedit, dan menghapus data driver. Ketika pertama kali data driver dibuat status secara default akan bernilai "Available" dan status ini akan berubah seiring waktu secara otomatis, apakah driver sedang ditugaskan pada pemesanan tertentu (assigned)

### 4. Pemesanan Kendaraan

Memungkinkan admin untuk menginputkan pemesanan kendaraan, termasuk pemilihan kendaraan, driver, dan pihak yang menyetujui pemesanan.

- **Peran Admin**: Dapat membuat pemesanan baru dengan memilih kendaraan, driver, dan pihak yang menyetujui pemesanan. Pemesanan harus disetujui oleh minimal dua pihak approver sebelum bisa diproses. Hanya kendaraan dan driver dengan status "available" yang dapat dipilih untuk pemesanan.
- **Peran Approver**: Dapat menyetujui atau menolak permintaan pemesanan kendaraan.

disini ketika pemesanan dibuat status dari pemesanan akan secara default bernilai "pending", status ini akan berubah seiring waktu ketika salah satu dari pihak approver menolak pemesanan ini, maka status pemesanan akan berubah menjadi "rejected", Lalu ketika semua pihak menyetujui pemesanan ini maka status akan berubah menjadi "approved, dan progres dari status ini akan menjadi "ongoing"

### 5. Laporan Servis

Menampilkan data servis dari setiap kendaraan, menunjukan status dari setiap servis antara "ongoing" atau "done", jika ongoing status kendaraan akan berubah menjadi "maintenane" sehingga kendaraan tidak dapat digunakan untuk pemesanan.

- **Peran Admin**: Dapat menambahkan servis untuk kendaraan. Status kendaraan akan berubah menjadi "pemeliharaan" dan kendaraan tersebut tidak dapat digunakan untuk pemesanan sampai selesai servis. Lalu admin dapat merubah status servis menjadi "done" dengan klik tombol selesai. lalu jika di klik status kendaraan menjadi "available" dan siap dipilih untuk sebuah pemesanan.

### 6. Riwayat Pemakaian

Menampilkan riwayat pemakaian kendaraan, termasuk pemesanan yang sudah selesai dan detail penggunaannya.

- **Peran Admin**: Dapat melihat riwayat pemakaian semua kendaraan, serta dapat melakukan penyelesaian dari suatu peminjaman. setelah melakukan penyelesaian pada suatu peminjaman, progress dari peminjaman tersebut akan berubahn menjadi "done" lalu status dari kendaraan dan driver terkait akan berubah juga menjadi "available". Lalu data riwayat akan tertampil pada halaman ini

### 7. Dashboard Monitoring

Menampilkan pemantauan secara real-time terkait penggunaan kendaraan, termasuk data durasi pemesanan, konsumsi bahan bakar, dan statistik lainnya yang berkaitan dengan kendaraan, driver, dan pemesanan.
- **Peran Admin && Approver**: Dapat melihat data pemantauan secara lengkap untuk kendaraan dan pemesanan.

### 8. Laporan Pemesanan

Memungkinkan admin untuk mengunduh laporan pemesanan dalam format Excel secara periodik.
- **Peran Admin**: Dapat mengekspor laporan pemesanan secara detail untuk analisis dan pencatatan.

### 9. Aktivitas Log
Fitur Log Aktivitas memungkinkan admin dan pengguna dengan peran yang tepat untuk melacak dan mencatat semua tindakan yang dilakukan dalam aplikasi. Setiap aktivitas yang dilakukan oleh pengguna, seperti perubahan data kendaraan, pemesanan, persetujuan, dan status servis, akan dicatat dalam log aktivitas untuk keperluan audit, pemantauan, dan keamanan.

- **Peran Admin && Approver**: Admin dapat melihat seluruh log aktivitas yang terjadi dalam sistem. Log aktivitas akan mencatat informasi seperti siapa yang melakukan tindakan, waktu tindakan dilakukan, serta perubahan apa yang terjadi pada data.

## Activity Diagram
![db structure](https://github.com/anantariskys/vehitrack/blob/main/public/Activity_Diagram.png?raw=true)




