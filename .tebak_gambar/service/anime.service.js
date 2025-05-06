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
exports.TebakAnime = void 0;
const firebase_1 = require("../config/firebase");
const TebakAnime = (category, total) => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield firebase_1.db.collection('anime').get();
    const allData = snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
    // Fisher–Yates Shuffle
    for (let i = allData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allData[i], allData[j]] = [allData[j], allData[i]];
    }
    const data = allData.slice(0, total);
    return {
        category,
        data
    };
});
exports.TebakAnime = TebakAnime;
//# sourceMappingURL=anime.service.js.map