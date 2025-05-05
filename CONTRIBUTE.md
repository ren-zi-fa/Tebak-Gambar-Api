## 🤝 Cara Berkontribusi

Anda dapat berkontribusi dengan menambahkan kategori baru atau memperkaya data pada kategori yang sudah ada. Berikut panduan untuk berkontribusi:

### 1. Fork dan Clone Repository

```bash
git clone https://github.com/yourusername/tebak-gambar-api.git
cd tebak-gambar-api
```

### 2. Buat Branch Baru

Gunakan format branch `feat/kategori-name` saat menambahkan kategori baru atau memperbaharui data kategori yang sudah ada:

```bash
git checkout -b feat/anime-new
```

### 3. Struktur Data

Setiap soal harus mengikuti format berikut:

```typescript
type Question = {
   id: number
   url_img: string
   correct_answer: string
   incorrect_answer: string[]
   question: string
}
```

### 4. Tambahkan Data

Tambahkan data baru dengan mengikuti contoh berikut:

```typescript
const newCategory: Question[] = [
   {
      id: 1,
      question: 'Tebak Judul ... berdasarkan gambar Berikut !',
      url_img:
         'https://res.cloudinary.com/dschnntvt/image/upload/v1746463667/example.jpg',
      correct_answer: 'Judul Yang Benar',
      incorrect_answer: ['Judul Salah 1', 'Judul Salah 2', 'Judul Salah 3']
   }
   // Tambahkan data lainnya
]
```

> **Catatan**: Pastikan URL gambar adalah URL valid dan dapat diakses publik. Disarankan untuk menggunakan layanan seperti Cloudinary untuk hosting gambar.

### 5. Commit dan Push

```bash
git add .
git commit -m "feat: tambah kategori baru atau update kategori"
git push origin feat/kategori-name
```

### 6. Buat Pull Request

Buat pull request dari branch Anda ke repository utama. Berikan deskripsi yang jelas tentang perubahan yang Anda lakukan.

### 7. entar gw check dan bakal gw seed ke databse
