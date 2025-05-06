# 📸 Tebak Gambar API Documentation

API ini menyediakan endpoint untuk mendapatkan data soal tebak gambar berdasarkan kategori tertentu.

## ✨ Endpoint

**Base URL:**  
https://tebak-gambar-api.vercel.app/api/question

```
GET /api/question
```

## 📝 Query Parameters

| Parameter | Type   | Required | Description                                                          | Example          |
|-----------|--------|----------|----------------------------------------------------------------------|------------------|
| category  | string | Yes      | Kategori soal yang diinginkan. Pilihan: `anime`, `jav`, `genshin`.   | `category=anime` |
| total     | number | Yes     | Jumlah soal yang ingin diambil (default: 1, maksimum: 10).           | `total=5`        |

## 🎭 Genre (Category) Options

| Category | Description                         |
|----------|-------------------------------------|
| anime    | Gambar dari anime/anime character.  |
| jav      | Gambar dari artis JAV.              |
| genshin  | Gambar karakter dari Genshin Impact.|

## 📦 Response Format

```json
{
  "success": true,
  "data": {
    "category": "anime",
    "data": [
      {
        "id": 3,
        "question": "Tebak Judul Anime berdasarkan gambar Berikut !",
        "url_img": "https://res.cloudinary.com/dschnntvt/image/upload/v1746463477/Dress-blue_p92f4k.webp",
        "correct_answer": "Dearest Blue",
        "incorrect_answer": [
          "Anehame",
          "Inshitsu Otaku ni Ikareru Kanoj",
          "Otaku ni Yasashii Gal toka"
        ]
      },
      {
        "id": 4,
        "question": "Tebak Judul Anime berdasarkan gambar Berikut !",
        "url_img": "https://res.cloudinary.com/dschnntvt/image/upload/v1746463477/AnotherImage.webp",
        "correct_answer": "Attack on Titan",
        "incorrect_answer": [
          "Bleach",
          "Naruto",
          "One Piece"
        ]
      }
      // ...hingga total N sesuai request
    ]
  }
}
```

## 🔍 Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Status sukses atau tidak. |
| data.category | string | Kategori yang diminta (anime, jav, genshin). |
| data.data | array | Array soal sesuai jumlah permintaan. |
| └ id | number | ID unik untuk soal. |
| └ question | string | Teks pertanyaan. |
| └ url_img | string | URL gambar yang harus ditebak. |
| └ correct_answer | string | Jawaban yang benar. |
| └ incorrect_answer | string[] | Array dari jawaban yang salah (biasanya 3 item). |

## ⚠️ Error Responses

| HTTP Code | Response Example | Description |
|-----------|------------------|-------------|
| 400 | `{ "success": false, "message": "Invalid category. Must be one of: anime, jav, genshin." }` | Jika kategori tidak valid. |
| 500 | `{ "success": false, "message": "Internal server error." }` | Kesalahan server. |

## ✅ Example Request

```bash
GET https://tebak-gambar-api.vercel.app/api/question?category=anime&total=3
```

## 📖 Notes

- Maksimal soal yang bisa diambil dalam satu request adalah 10.
- Semua URL gambar adalah link langsung yang bisa di-embed di frontend quiz app.


