"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
// Gantikan __dirname
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env.development') });
// Export config
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    FIREBASE_SERVICE_ACCOUNT: process.env.FIREBASE_SERVICE_ACCOUNT,
    JWT_SECRET: process.env.JWT_SECRET
};
//# sourceMappingURL=vars.js.map