import { db } from '../config/firebase'

type Genhsin = {
   id: number
   url_img: string
   correct_answer: string
   incorrect_answer: string[]
   question: string
}
async function seed() {
   const Genhsin_Impact: Genhsin[] = [
      {
         id: 1,
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430080/20250505140556_wkqiyf.png',
         correct_answer: 'Dihua Mars',
         question: 'dimanakah lokasi gambar tersebut?',
         incorrect_answer: ['Stone Gate', 'Sal Terrae', 'MIngyun Village']
      },
      {
         id: 2,
         question: 'dimanakah lokasi gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430080/20250505141002_aivuet.png',
         correct_answer: 'Fountaine Of Lucine',
         incorrect_answer: [
            'Opera Epiclese',
            'Marcotte Station',
            'Court Fontaine'
         ]
      },
      {
         id: 3,
         question: 'dimanakah lokasi gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430080/20250505141251_cmkm6o.png',
         correct_answer: 'People Of The springs',
         incorrect_answer: ['Ameycalo Waters', 'Teticpac Peak', 'Spring Bad']
      },
      {
         id: 4,
         question: 'dimanakah lokasi gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430088/20250505141636_d5ljwc.png',
         correct_answer: 'Cape Oath',
         incorrect_answer: [
            'Dadaupa Goerge',
            ' Falcon Coats',
            'Starsnatch Cliff'
         ]
      },
      {
         id: 5,
         question: 'dimanakah lokasi gambar tersebut?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430088/20250505141527_cfglzs.png',
         correct_answer: 'Children of echoes',
         incorrect_answer: [
            'Tepeacac Rise',
            'Wounded Shin Valley',
            'Huitzi Hillil'
         ]
      },
      {
         id: 6,
         question: 'dimanakah lokasi gambar ini?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430089/20250505141736_a2c7o2.png',
         correct_answer: 'Qingce Village',
         incorrect_answer: ['Huwang Hill', 'Mt. Aozang', 'Qingyun Peak']
      },
      {
         id: 7,
         question: 'dimanakah lokasi gambar ini?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430093/20250505141959_fowj6l.png',
         correct_answer: 'Teapot',
         incorrect_answer: [
            'Qingyun Peak',
            'Chember Jade',
            'Ancient Sacred Mountain'
         ]
      },
      {
         id: 8,
         question: 'dimanakah lokasi gambar ini?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430094/20250505142100_y62iwl.png',
         correct_answer: 'Ritou',
         incorrect_answer: ['Inazuma City', 'Chinju Forest', 'Grand Narukami']
      },
      {
         id: 9,
         question: 'dimanakah lokasi gambar ini?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430092/20250505141852_szxus6.png',
         correct_answer: 'Wang Shu In',
         incorrect_answer: ['Mingyun Village', 'Dawn Winnery', 'Teapot']
      },
      {
         id: 10,
         question: 'dimanakah lokasi gambar ini?',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746430092/20250505140751_ueil43.png',
         correct_answer: 'Bayda Harbour',
         incorrect_answer: ['Ormos', 'Pentricohr Alice', 'Yang Guang Soal']
      }
   ]

   const batch = db.batch()
   const results = []
   const snapshot = await db.collection('genshin').get()
   snapshot.forEach((doc) => {
      batch.delete(doc.ref) // hapus dokumen lama
   })

   for (const genshin of Genhsin_Impact) {
      const docRef = db.collection('genshin').doc() // buat doc baru
      batch.set(docRef, genshin) // masukkan data baru
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
