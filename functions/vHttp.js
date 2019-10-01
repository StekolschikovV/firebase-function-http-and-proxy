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
const axios = require("axios");
const cheerio = require("cheerio");
class VHttp {
    fetchData(siteUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios.get(siteUrl);
            return cheerio.load(result.data);
        });
    }
    fetchText(siteUrl, selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.fetchData(siteUrl);
            return $(selector).text();
        });
    }
    fetchHtml(siteUrl, selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const $ = yield this.fetchData(siteUrl);
            return $(selector).html();
        });
    }
}
exports.VHttp = VHttp;
