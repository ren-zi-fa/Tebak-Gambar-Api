import { db } from '../config/firebase'

const TebakAnime = async (category: string, total: number) => {
   const snapshot = await db.collection('anime').get()
   const allData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
   }))

   // Fisher–Yates Shuffle
   for (let i = allData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[allData[i], allData[j]] = [allData[j], allData[i]]
   }

   const data = allData.slice(0, total)

   return {
      category,
      data
   }
}

export { TebakAnime }
