import express from 'express'
import { query } from 'express-validator'
import { questionController } from '../controller'

const router = express.Router()

router.get(
   '/question',
   [
      query('category').notEmpty().isString(),
      query('total').notEmpty().isInt({ min: 1, max: 15 })
   ],
   questionController.question
)

export { router }
