import { db } from '../config/firebase'

const TebakWilayahGenshin = async (category: string, total: number) => {
   const snapshot = await db.collection('genshin').orderBy('id', 'asc').limit(total).get()
   const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
   }))
   return {
      category,
      data
   }
}

export {TebakWilayahGenshin}
