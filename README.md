# 🍿 Kriuk Nyemil E-Commerce (Monorepo)

Kriuk Nyemil adalah aplikasi e-commerce sederhana untuk brand camilan popcorn caramel buatan lokal.  
Project ini dibuat dengan **monorepo** yang berisi **backend** (Express.js + Prisma) dan **frontend** (Next.js + ShadCN UI).  

---

## 📂 Struktur Project
/backend -> REST API menggunakan Express.js + Prisma ORM
/frontend -> Frontend website menggunakan Next.js + ShadCN UI
## ⚙️ Teknologi yang Digunakan

### Backend
- [Express.js](https://expressjs.com/) – Framework Node.js
- [Prisma](https://www.prisma.io/) – ORM untuk database
- [dotenv](https://github.com/motdotla/dotenv) – Load environment variables
- [cors](https://www.npmjs.com/package/cors) – Middleware CORS
- [nodemon](https://nodemon.io/) – Auto-restart server saat ada perubahan

### Frontend
- [Next.js](https://nextjs.org/) – Framework React.js
- [Axios](https://axios-http.com/) – HTTP client untuk komunikasi API
- [ShadCN UI](https://ui.shadcn.com/) – Komponen UI modern berbasis Tailwind CSS

---

## 🚀 Cara Install & Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/username/kriuk-nyemil.git
cd kriuk-nyemil

2. Setup Backend

Masuk ke folder backend:

cd backend

Install Dependencies
npm install express prisma @prisma/client dotenv cors nodemon

Konfigurasi Prisma

Buat file .env di folder backend:

DATABASE_URL="mysql://username:password@localhost:3306/kriuk_nyemil"


Jalankan migration:

npx prisma migrate dev --name init

Jalankan Backend
npm run dev


Server akan berjalan di:
👉 http://localhost:2000 (atau port sesuai yang ada di server.js)

3. Setup Frontend

Masuk ke folder frontend:

cd ../frontend

Install Dependencies
npm install next react react-dom axios


Tambahkan ShadCN UI:

npx shadcn-ui@latest init

Jalankan Frontend
npm run dev


Website akan berjalan di:
👉 http://localhost:3000

🛠️ Development Notes

Backend:

API endpoint default ada di /products

Gunakan Prisma Client untuk query database

Konfigurasi database ada di .env

Frontend:

Menggunakan Axios untuk request API dari backend

Komponen UI dibangun dengan ShadCN UI (di atas Tailwind CSS)

✨ Fitur Utama

📦 Katalog produk popcorn caramel

🛒 Keranjang belanja

💳 Sistem checkout sederhana

🔗 API terhubung langsung antara frontend & backend
