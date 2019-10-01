
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
const vHttp_1 = require("./vHttp");
let vHttp = new vHttp_1.VHttp;
class Proxy {
    loadFromSpysMe() {
        return __awaiter(this, void 0, void 0, function* () {
            const siteUrl = "http://spys.me/proxy.txt";
            const body = yield vHttp.fetchText(siteUrl, 'body');
            let bodyList = body.match(/[^\r\n]+/g);
            let ipAndPortJsonArr = [];
            bodyList.forEach(element => {
                if (/^\d+$/.test(element[0])) {
                    let ipAndPort = element.split(' ')[0];
                    let ip = ipAndPort.split(':')[0];
                    let prot = ipAndPort.split(':')[1];
                    let json = {
                        ip,
                        prot
                    };
                    ipAndPortJsonArr.push(json);
                }
            });
            return ipAndPortJsonArr;
        });
    }
    getListFromSpysMe() {
        return __awaiter(this, void 0, void 0, function* () {
            let ipAndPortJsonArr = yield this.loadFromSpysMe();
            return JSON.stringify(ipAndPortJsonArr);
        });
    }
    getFromSpysMe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let ipAndPortJsonArr = yield this.loadFromSpysMe();
            return JSON.stringify(ipAndPortJsonArr[id]);
        });
    }
}
exports.Proxy = Proxy;
