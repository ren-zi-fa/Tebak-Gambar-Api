import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { TebakAktris } from '../service/jav.service'
import { TebakWilayahGenshin } from '../service/genshin.service'
import { TebakAnime } from '../service/anime.service'

const question = async (req: Request, res: Response, next: NextFunction) => {
   const errors = validationResult(req)
   if (!errors.isEmpty()) {
      // Ada error validasi
      res.status(400).json({ errors: errors.array() })
      return
   }

   // Ambil query param
   const category = req.query.category as string
   const queryTotal = req.query.total as string
   const total = parseInt(queryTotal, 10)
   if (category === 'jav') {
      const { data, category: categoryData } = await TebakAktris(
         category,
         total
      )
      res.status(200).json({
         success: true,
         data: {
            category: categoryData,

            data: data
         }
      })
   } else if (category === 'genshin') {
      const { data, category: categoryData } = await TebakWilayahGenshin(
         category,
         total
      )
      res.status(200).json({
         success: true,
         data: {
            category: categoryData,
            data: data
         }
      })
   } else if (category === 'anime') {
      const { data, category: categoryData } = await TebakAnime(category, total)
      res.status(200).json({
         success: true,
         data: {
            category: categoryData,
            data: data
         }
      })
   } else {
      res.status(400).json({
         succes: false,
         message: 'anime tidak tersedia saat ini '
      })
   }
}

export { question }
