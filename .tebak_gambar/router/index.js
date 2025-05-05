'use strict'
var __importDefault =
   (this && this.__importDefault) ||
   function (mod) {
      return mod && mod.__esModule ? mod : { default: mod }
   }
Object.defineProperty(exports, '__esModule', { value: true })
exports.router = void 0
const express_1 = __importDefault(require('express'))
const express_validator_1 = require('express-validator')
const controller_1 = require('../controller')
const router = express_1.default.Router()
exports.router = router
router.get(
   '/question',
   [
      (0, express_validator_1.query)('category').notEmpty().isString(),
      (0, express_validator_1.query)('total')
         .notEmpty()
         .isInt({ min: 1, max: 10 })
   ],
   controller_1.questionController.question
)
//# sourceMappingURL=index.js.map
