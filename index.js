"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
const proxy_1 = require("./lib/proxy");
let proxy = new proxy_1.Proxy;
exports.getProxyList = functions.https.onRequest((req, res) => {
    proxy.getListFromSpysMe().then((list) => {
        res.status(200).send(list);
    });
});
exports.getProxy = functions.https.onRequest((req, res) => {
    if (req.param('id')) {
        proxy.getFromSpysMe(+req.param('id')).then((list) => {
            res.status(200).send(list);
        });
    }
    else {
        res.status(200).send('need id');
    }
});
