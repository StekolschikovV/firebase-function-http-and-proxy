

import * as functions from "firebase-functions";
import { Proxy } from "./lib/proxy";

let proxy = new Proxy;

export let getProxyList = functions.https.onRequest((req, res) => {
    proxy.getListFromSpysMe().then((list)=>{
        res.status(200).send(list)
    });
})

export let getProxy = functions.https.onRequest((req, res) => {
    if(req.param('id')){
        proxy.getFromSpysMe(+req.param('id')).then((list)=>{
            res.status(200).send(list)
        });
    } else {
        res.status(200).send('need id');
    }
})



