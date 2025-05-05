'use strict'
var __importDefault =
   (this && this.__importDefault) ||
   function (mod) {
      return mod && mod.__esModule ? mod : { default: mod }
   }
Object.defineProperty(exports, '__esModule', { value: true })
exports.app = void 0
const path_1 = __importDefault(require('path'))
const express_1 = __importDefault(require('express'))
const router_1 = require('../router')
const cors_1 = __importDefault(require('cors'))
const app = (0, express_1.default)()
exports.app = app
app.use(
   '/images',
   express_1.default.static(path_1.default.join(__dirname, '../public/images'))
)
app.use(express_1.default.json())
app.use(express_1.default.urlencoded({ extended: true }))
app.use(express_1.default.static('/public'))
const corsOptions = {
   origin: 'http://localhost:5173',
   credentials: true
}
app.use((0, cors_1.default)(corsOptions))
app.get('/', (req, res) => {
   res.json({ message: 'api is ok' })
})
app.use('/api', router_1.router)
//# sourceMappingURL=express.js.map
