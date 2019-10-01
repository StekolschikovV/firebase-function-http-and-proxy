import { VHttp } from "./vHttp";

let vHttp = new VHttp;

interface ProxyI {
    ip: string;
    prot: string;
}

export class Proxy {

    async loadFromSpysMe() {
        const siteUrl = "http://spys.me/proxy.txt";
        const body =  await vHttp.fetchText(siteUrl, 'body');
        let bodyList = body.match(/[^\r\n]+/g);
        let ipAndPortJsonArr: ProxyI[] = []; 
        bodyList.forEach(element => {
            if(/^\d+$/.test(element[0])){
                let ipAndPort = element.split(' ')[0];
                let ip = ipAndPort.split(':')[0];
                let prot = ipAndPort.split(':')[1];
                let json = {
                    ip,
                    prot
                }
                ipAndPortJsonArr.push(json);
            }
        });
        return ipAndPortJsonArr;
    }

    async getListFromSpysMe() {
        let ipAndPortJsonArr = await this.loadFromSpysMe();
        return JSON.stringify(ipAndPortJsonArr);
    }

    async getFromSpysMe(id: number) {
        let ipAndPortJsonArr = await this.loadFromSpysMe();
        return JSON.stringify(ipAndPortJsonArr[id]);
    }

}


