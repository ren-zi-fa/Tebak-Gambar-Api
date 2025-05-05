import { db } from '../config/firebase'

type anime = {
   id: number
   url_img: string
   correct_answer: string
   incorrect_answer: string[]
   question: string
}
async function seed() {
   const anime: anime[] = [
      {
         id: 1,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463667/kakashi_dpzgpr.jpg',
         correct_answer: 'Boruto',
         incorrect_answer: ['Naruto', 'One Piece', 'One Punchman']
      },
      {
         id: 2,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463667/opm_obuiae.jpg',
         correct_answer: 'One Punch Man',
         incorrect_answer: ['One Piece', 'SPy X family', 'Gintama']
      },
      {
         id: 3,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463477/Dress-blue_p92f4k.webp',
         correct_answer: 'Dearest Blue',
         incorrect_answer: [
            'Anehame',
            'Inshitsu Otaku ni Ikareru Kanoj',
            'Otaku ni Yasashii Gal toka'
         ]
      },
      {
         id: 4,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463477/nogamenolife_as3iji.webp',
         correct_answer: 'No Game No Life',
         incorrect_answer: ['Swor Art Online', 'The New Gate', 'Lazarus']
      },
      {
         id: 5,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463665/eminance_shadow_twef0h.jpg',
         correct_answer: 'The Eminance Shadow',
         incorrect_answer: ['Konosuba', 'Bungo Stray Dogs', 'Lazarus']
      },
      {
         id: 6,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463625/kanchigai_yt1opa.png',
         correct_answer: 'Kanchigai no Atelier Meister',
         incorrect_answer: [
            'Tattoeba Last Dungeon',
            'Konosuba',
            'Ore Wa seikan Kokkano...'
         ]
      },
      {
         id: 7,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463667/konosuba_gwurqf.jpg',
         correct_answer: 'Konosuba',
         incorrect_answer: ['The New Gate', 'Bungo Stray Dogs', 'Lazarus']
      },
      {
         id: 8,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463624/anehame_yk03yb.png',
         correct_answer: 'Anehame',
         incorrect_answer: [
            'Overflow',
            'Gomu o Tsukete to Iimashita yo ne...',
            'Shounen ga Otona ni...'
         ]
      },
      {
         id: 9,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463623/solev_tsfunq.webp',
         correct_answer: 'Solo Leveling',
         incorrect_answer: ['Fire Force', 'Bleach', 'Bungo Stray Dogs']
      },
      {
         id: 10,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746463477/attack-on-titan_vgkhx1.webp',
         correct_answer: 'Attack On Tittan',
         incorrect_answer: ['Bleach', 'Jojo Bizarre', 'Konosuba']
      },
      {
         id: 11,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746464753/images_pa1phd.jpg',
         correct_answer: 'Dr Stone',
         incorrect_answer: ['Boruto', 'Jojo Bizarre', 'One Piece']
      },
      {
         id: 12,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746464933/sddefault_xcmjs8.jpg',
         correct_answer: 'One Piece',
         incorrect_answer: ['Boruto', 'Jojo Bizarre', 'One Piece']
      },
      {
         id: 13,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746465115/images_h9nlol.jpg',
         correct_answer: 'The Beginning After the End ',
         incorrect_answer: ['Mushoku Tensei', 'Konosuba', 'Spy X family']
      },
      {
         id: 14,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746465188/jfiwjef_vuvrsn.webp',
         correct_answer: 'Katainaka Ossan',
         incorrect_answer: ['Konosuba', 'Mushoku Tensei', 'One Piece']
      },
      {
         id: 15,
         question: 'Tebak Judul Anime berdasarkan gambar Berikut !',
         url_img:
            'https://res.cloudinary.com/dschnntvt/image/upload/v1746465307/latest_v1qmwy.jpg',
         correct_answer: 'Mushoku Tensei',
         incorrect_answer: [
            'The Beginning After the End',
            'Bungo Stray Dogs',
            'Fire Force'
         ]
      }
   ]

   const batch = db.batch()
   const results = []

   const snapshot = await db.collection('anime').get()

   snapshot.forEach((doc) => {
      batch.delete(doc.ref) // hapus dokumen lama
   })

   for (const anime_item of anime) {
      const docRef = db.collection('anime').doc() // buat doc baru
      batch.set(docRef, anime_item) // masukkan data baru
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
