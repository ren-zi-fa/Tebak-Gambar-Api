# Panduan Kontribusi 🔧

## Langkah-langkah

### 1️⃣ Buat Branch Baru
Gunakan konvensi:
```
feat/<deskripsi-singkat>
```

Contoh:
```bash
git checkout -b feat/tebakan-example
```
➡️ `tebakan-example` = deskripsi singkat tebakan yang lo tambahkan.

### 2️⃣ Tambahkan Data di File Seed
Cari array:
```ts
const Genhsin_Impact: Genhsin[] = [
   // data lama di sini
]
```

Tambahkan item baru di bawahnya dengan format seperti ini:
```ts
{
   id: <NUMBER>, // lanjutkan ID terakhir
   question: 'Dimanakah lokasi gambar ini?',
   url_img: 'https://your-cloudinary-url.png',
   correct_answer: 'Jawaban Benar',
   incorrect_answer: ['Salah 1', 'Salah 2', 'Salah 3']
}
```

✅ Pastikan:
- ID unik & urut.
- `incorrect_answer` SELALU isi 3 item.
- URL gambar valid & dicek di browser.

### 3️⃣ Commit Perubahan
Ikuti format commit message:
```bash
git add .
git commit -m "feat: tambah tebakan gambar <deskripsi-singkat>"
```

➡️ Contoh:
```bash
git commit -m "feat: tambah tebakan gambar Stormterror Lair"
```

### 4️⃣ Push Branch
```bash
git push origin feat/tebakan-example
```

### 5️⃣ Buat Pull Request (PR)
Judul PR:
```
feat: tambah tebakan gambar <deskripsi-singkat>
```

Deskripsi:
Jelaskan:
- Apa yang ditambahin.
- Screenshot jika perlu.
- Checklist validasi (data, gambar, dll).