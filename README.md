# Library System – UTS REMED PAW

Aplikasi **Library System** berbasis **REST API** menggunakan **Node.js (Express)** dan **MySQL**.  
Aplikasi ini dibuat untuk memenuhi tugas **UTS Remedial Pengembangan Aplikasi Web**.

---

## 📌 Fitur
- CRUD Buku (API)
- Peminjaman Buku
- Log Peminjaman
- Validasi input sederhana (title & author tidak boleh kosong)
- RESTful API
- Database MySQL

---

## 🛠️ Teknologi
- Node.js
- Express.js
- Sequelize ORM
- MySQL

---

## ⚙️ Cara Menjalankan Aplikasi

1. Clone Repository
```bash
git clone https://github.com/B-PPAW-TI503P-2025/20230140088_B_REMED_UTS.git
cd 20230140088_B_REMED_UTS

2. Install Dependency
npm install

3. Konfigurasi Environment
But file .env
<img width="212" height="107" alt="image" src="https://github.com/user-attachments/assets/3ded7ae3-219d-4f3a-9975-59e42f2da08f" />
Pastikan database library_db sudah dibuat di MySQL.

4. Jalankan Server
npm run dev

jika berhasil, akan muncul log:
Server berjalan di port 3000


**## Dokumentasi & Test Endpoint API**

🔓 Public Endpoints
Endpoint yang dapat diakses tanpa autentikasi.

1️⃣ GET Semua book (public)
<img width="236" height="26" alt="image" src="https://github.com/user-attachments/assets/4ffd43e3-814b-4eb7-8131-ff2a91bf5e2a" />
Deskripsi:
Menampilkan seluruh data buku yang tersedia di perpustakaan.
<img width="790" height="331" alt="Public GET " src="https://github.com/user-attachments/assets/07d60799-abf8-4b82-a69c-146eaef1098a" />

2️⃣ GET Book dengan ID (public)
<img width="170" height="26" alt="image" src="https://github.com/user-attachments/assets/92399ed5-9c62-491b-a4d4-620723d7aae1" />
Deskripsi:
Menampilkan detail satu buku berdasarkan ID.
<img width="792" height="237" alt="Public GET detail book" src="https://github.com/user-attachments/assets/91f436b5-d19a-4a22-9a65-83986affe7fa" />


 POST Tambah Buku
<img width="209" height="26" alt="image" src="https://github.com/user-attachments/assets/1e1b4cbf-9f1e-4a5a-83cd-a995c39a8ac7" />
Body
