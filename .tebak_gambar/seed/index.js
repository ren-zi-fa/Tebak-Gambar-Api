'use strict'
var __awaiter =
   (this && this.__awaiter) ||
   function (thisArg, _arguments, P, generator) {
      function adopt(value) {
         return value instanceof P
            ? value
            : new P(function (resolve) {
                 resolve(value)
              })
      }
      return new (P || (P = Promise))(function (resolve, reject) {
         function fulfilled(value) {
            try {
               step(generator.next(value))
            } catch (e) {
               reject(e)
            }
         }
         function rejected(value) {
            try {
               step(generator['throw'](value))
            } catch (e) {
               reject(e)
            }
         }
         function step(result) {
            result.done
               ? resolve(result.value)
               : adopt(result.value).then(fulfilled, rejected)
         }
         step((generator = generator.apply(thisArg, _arguments || [])).next())
      })
   }
Object.defineProperty(exports, '__esModule', { value: true })
const firebase_1 = require('../config/firebase')
function seed() {
   return __awaiter(this, void 0, void 0, function* () {
      const javs = [
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
            incorrect_answer: [
               'Aika Yumeno',
               'Riri Nanatsumori',
               'Akari Tsumugi'
            ]
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
         }
      ]
      const batch = firebase_1.db.batch()
      const results = []
      const snapshot = yield firebase_1.db.collection('tebak_jav').get()
      snapshot.forEach((doc) => {
         batch.delete(doc.ref) // hapus dokumen lama
      })
      for (const jav of javs) {
         const docRef = firebase_1.db.collection('tebak_jav').doc() // buat doc baru
         batch.set(docRef, jav) // masukkan data baru
         results.push(docRef.id) // simpan ID baru
      }
      try {
         yield batch.commit()
         console.log('✅ Seeding selesai!', results)
         process.exit(0)
      } catch (err) {
         console.error('❌ Gagal seeding:', err)
         process.exit(1)
      }
   })
}
seed()
//# sourceMappingURL=index.js.map
