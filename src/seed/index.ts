import { db } from '../config/firebase'

type Javs = {
   id: number
   url_img: string
   correct_answer: string
   incorrect_answer: string[]
   question: string
}
async function seed() {
   const javs: Javs[] = [
      {
         id: 1,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423124/gettyimages-649378948-612x612_uzy67l.jpg',
         correct_answer: 'Yua Mikami',
         incorrect_answer: ['Ai Uehara', 'Asuka Kirara', 'Rika Hoshimi']
      },
      {
         id: 2,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423188/images_3_r4gscp.jpg',
         correct_answer: 'Aoi Sora',
         incorrect_answer: ['Yui Hatano', 'Miku Ohashi', 'Sana Anju']
      },
      {
         id: 3,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423263/takasho_03_plzpxj.jpg',
         correct_answer: 'Shoko Takahashi',
         incorrect_answer: ['Mia Nanasawa', 'Rara Anzai', 'Yume Nikaido']
      },
      {
         id: 4,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423357/61NNqviJ5bL._AC_UF894_1000_QL80__g9als8.jpg',
         correct_answer: 'Rion',
         incorrect_answer: ['Julia', 'Nozomi Sasaki', 'Rei Mizuna']
      },
      {
         id: 5,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423845/images_2_xpnzhe.jpg',
         correct_answer: 'Kanna Seto',
         incorrect_answer: ['Eimi Fukada', 'Yuria Satomi', 'Riko Tachibana']
      },
      {
         id: 6,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423845/images_3_qm3smx.jpg',
         correct_answer: 'Mio Ishikawa',
         incorrect_answer: ['Aika Yumeno', 'Riri Nanatsumori', 'Akari Tsumugi']
      },
      {
         id: 7,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423846/TRE2024_kawakita_saika01__cropped_fnyaal.jpg',
         correct_answer: 'Sahika Kawakita',
         incorrect_answer: ['Airi Suzumura', 'Nene Tanaka', 'Karen Kaede']
      },
      {
         id: 8,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423845/images_4_v99zat.jpg',
         correct_answer: 'Kana morizawa',
         incorrect_answer: ['Mion Sonoda', 'Arisa Hanyu', 'Ruka Inaba']
      },
      {
         id: 9,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423845/51BNsUkqKxL_tjc8tn.jpg',
         correct_answer: 'Kiho Kanemetsu',
         incorrect_answer: ['Mei Washio', 'Tsukasa Aoi', 'Hikaru Konno']
      },
      {
         id: 10,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746423844/images_5_csguna.jpg',
         correct_answer: 'Emi Fukada',
         incorrect_answer: ['Mao Hamasaki', 'Miyuki Alice', 'Erika Momotani']
      },

      {
         id: 11,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'hhttps://res.cloudinary.com/dschnntvt/image/upload/v1746462460/takakato_mtlqcx.webp',
         correct_answer: 'Taka Kato',
         incorrect_answer: ['Toru Ozawa', 'Date masamune', 'Echiro Oda']
      },
      {
         id: 12,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746462692/toruu_wve0jr.webp',
         correct_answer: 'Toru Ozawa',
         incorrect_answer: ['Taka Kato', 'Shigeo Tokuda', 'Tokugawa Shigeshige']
      },
      {
         id: 13,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746462845/download_ypbgtj.jpg',
         correct_answer: 'Hana Shirato',
         incorrect_answer: ['Yu Shinoda', 'Shuzu Hanjo', 'Sora Aoi']
      },
      {
         id: 14,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463021/images_2_kuikmt.jpg',
         correct_answer: 'Ameri Ichinose',
         incorrect_answer: ['Yu Shinoda', 'Shuzu Hanjo', 'Sora Aoi']
      },
      {
         id: 15,
         question: 'siapakah yang ada di gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463079/images_3_confa0.jpg',
         correct_answer: 'Yu Shinoda',
         incorrect_answer: ['Ameri Ichinose', 'Hana Shirato', 'Shuzu Hanjo']
      }
   ]

   const batch = db.batch()
   const results = []

   const snapshot = await db.collection('tebak_jav').get()

   snapshot.forEach((doc) => {
      batch.delete(doc.ref) // hapus dokumen lama
   })

   for (const jav of javs) {
      const docRef = db.collection('tebak_jav').doc() // buat doc baru
      batch.set(docRef, jav) // masukkan data baru
      results.push(docRef.id) // simpan ID baru
   }

   try {
      await batch.commit()
      console.log('✅ Seeding selesai!', results)
      process.exit(0)
   } catch (err) {
      console.error('❌ Gagal seeding:', err)
      process.exit(1)
   }
}

seed()
