"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TebakAktris = void 0;
const firebase_1 = require("../config/firebase");
const TebakAktris = (category, total) => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield firebase_1.db.collection('tebak_jav').orderBy('id', 'asc').limit(total).get();
    const data = snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
    return {
        category,
        data
    };
});
exports.TebakAktris = TebakAktris;
//# sourceMappingURL=jav.service.js.map