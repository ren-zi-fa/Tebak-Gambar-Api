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
exports.question = void 0;
const express_validator_1 = require("express-validator");
const jav_service_1 = require("../service/jav.service");
const genshin_service_1 = require("../service/genshin.service");
const anime_service_1 = require("../service/anime.service");
const question = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        // Ada error validasi
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // Ambil query param
    const category = req.query.category;
    const queryTotal = req.query.total;
    const total = parseInt(queryTotal, 10);
    if (category === 'jav') {
        const { data, category: categoryData } = yield (0, jav_service_1.TebakAktris)(category, total);
        res.status(200).json({
            success: true,
            data: {
                category: categoryData,
                data: data
            }
        });
    }
    else if (category === 'genshin') {
        const { data, category: categoryData } = yield (0, genshin_service_1.TebakWilayahGenshin)(category, total);
        res.status(200).json({
            success: true,
            data: {
                category: categoryData,
                data: data
            }
        });
    }
    else if (category === 'anime') {
        const { data, category: categoryData } = yield (0, anime_service_1.TebakAnime)(category, total);
        res.status(200).json({
            success: true,
            data: {
                category: categoryData,
                data: data
            }
        });
    }
    else {
        res.status(400).json({
            succes: false,
            message: 'anime tidak tersedia saat ini '
        });
    }
});
exports.question = question;
//# sourceMappingURL=question.controller.js.map