import { db } from '../config/firebase'

const TebakAktris = async (category: string, total: number) => {
   const snapshot = await db.collection('tebak_jav').orderBy('id', 'asc').limit(total).get()
   const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
   }))
   return {
      category,
      data
   }
}

export {TebakAktris}
