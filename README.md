# Library System – UTS Remedial PAW

Aplikasi **Library System** berbasis **REST API** menggunakan **Node.js (Express)** dan **MySQL**.
Aplikasi ini dibuat untuk memenuhi **UTS Remedial Pengembangan Aplikasi Web (PAW)**.

Aplikasi **tidak menggunakan frontend**, seluruh pengujian dilakukan melalui **API Client (Postman / Thunder Client)**.

---

## 📌 Fitur Aplikasi

* Menampilkan data buku
* Menambah, mengubah, dan menghapus buku (Admin)
* Validasi input sederhana (title dan author tidak boleh kosong)
* Peminjaman buku oleh user
* Pencatatan lokasi peminjaman (latitude & longitude)
* RESTful API
* Database MySQL

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* Sequelize ORM
* MySQL
* Nodemon

---

## ⚙️ Cara Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/B-PPAW-TI503P-2025/20230140088_B_REMED_UTS.git
cd 20230140088_B_REMED_UTS
```

### 2. Install Dependency

```bash
npm install
```

### 3. Konfigurasi Database

Buat database MySQL dengan nama:

```sql
CREATE DATABASE library_db;
```

### 4. Konfigurasi Environment

Buat file `.env` di root project:

```env
DB_NAME=library_db
DB_USER=root
DB_PASS=
DB_HOST=localhost
PORT=3000
```

### 5. Jalankan Aplikasi

```bash
npm run dev
```

Jika berhasil, server akan berjalan di:

```
http://localhost:3000
```

---

## 📡 Dokumentasi Endpoint API

Base URL:

```
http://localhost:3000/api
```

---

## 🔓 Public Endpoints

Endpoint yang dapat diakses tanpa autentikasi.

### GET /api/books

**Deskripsi:**
Menampilkan seluruh data buku.

📸 Screenshot Test Endpoint GET /api/books
<img width="790" height="331" alt="Public GET " src="https://github.com/user-attachments/assets/a0328695-1e06-4c54-aca3-e7a508896ced" />

---

### GET /api/books/:id

**Deskripsi:**
Menampilkan detail buku berdasarkan ID.

**Contoh:**

```
GET /api/books/1
```

📸 Screenshot Test Endpoint GET /api/books/:id
<img width="792" height="237" alt="Public GET detail book" src="https://github.com/user-attachments/assets/0d072383-aae8-430d-9f8f-fe128bea1ced" />

---

## 🔐 Admin Mode

Endpoint khusus Admin.
Wajib menambahkan header:

```
x-user-role: admin
```

---

### POST /api/books

**Deskripsi:**
Menambahkan buku baru ke sistem.

**Body (JSON):**

```json
{
  "title": "Parabel",
  "author": "Brian Krisna",
  "stock": 4
}
```

**Validasi:**

* title tidak boleh kosong
* author tidak boleh kosong

📸 Screenshot Test Endpoint POST /api/books
<img width="792" height="266" alt="Cuplikan layar 2026-01-30 010043" src="https://github.com/user-attachments/assets/7dd742e0-077b-47ff-a74b-5ee800df78f5" />

---

### PUT /api/books/:id

**Deskripsi:**
Mengubah data buku berdasarkan ID.

**Contoh:**

```
PUT /api/books/3
```

📸 Screenshot Test Endpoint PUT /api/books/:id
<img width="791" height="256" alt="PUT" src="https://github.com/user-attachments/assets/456c273d-1178-42c1-bcd7-8dbdd3e947e3" />

---

### DELETE /api/books/:id

**Deskripsi:**
Menghapus buku berdasarkan ID.

**Contoh:**

```
DELETE /api/books/1
```

📸 Screenshot Test Endpoint DELETE /api/books/:id
<img width="791" height="238" alt="image" src="https://github.com/user-attachments/assets/cd473817-1563-423f-96b9-c571f4db10b8" />

---

## 👤 User Mode (Peminjaman Buku)

Endpoint khusus User.
Wajib menambahkan header:

```
x-user-role: user
x-user-id: 1
```

---

### POST /api/borrow

**Deskripsi:**
Melakukan peminjaman buku oleh user dan mencatat lokasi peminjaman.

**Body Payload (JSON):**

```json
{
  "bookId": 2,
  "latitude": -6.2088,
  "longitude": 106.8456
}
```

**Logic Proses:**

1. Mengecek ketersediaan stok buku
2. Mengurangi stok buku sebanyak 1
3. Menyimpan data peminjaman ke tabel BorrowLogs
4. Menyimpan data lokasi peminjaman (latitude dan longitude)

📸 Screenshot Test Endpoint POST /api/borrow
<img width="790" height="286" alt="Cuplikan layar 2026-01-30 010411" src="https://github.com/user-attachments/assets/58803adf-bcbb-445f-a9f7-47abe73702d0" />

---

## 🗄️ Struktur Database

### Tabel Books

| Field     | Tipe              |
| --------- | ----------------- |
| id        | INT (Primary Key) |
| title     | VARCHAR           |
| author    | VARCHAR           |
| stock     | INT               |
| createdAt | DATETIME          |
| updatedAt | DATETIME          |

<img width="578" height="219" alt="databaseBooks" src="https://github.com/user-attachments/assets/3879ac10-72ff-4d6c-8d02-8608a467ea0d" />

---

### Tabel BorrowLogs

| Field      | Tipe              |
| ---------- | ----------------- |
| id         | INT (Primary Key) |
| userId     | INT               |
| bookId     | INT               |
| borrowDate | DATETIME          |
| latitude   | FLOAT             |
| longitude  | FLOAT             |


<img width="563" height="240" alt="tabelBorrowLogs" src="https://github.com/user-attachments/assets/54c7a66c-bb54-4cdf-88aa-330eb46347e3" />

---

## 📂 Struktur Folder Project

```
<img width="223" height="331" alt="image" src="https://github.com/user-attachments/assets/1689a0f9-3b18-4d93-a7c0-598b3a1ecd5c" />

```

---

## 👤 Identitas Mahasiswa

* Nama: **Dzakiyah Al Zahrani**
* NIM: **20230140088**
* Kelas: **B**
* Mata Kuliah: **Pengembangan Aplikasi Web**
