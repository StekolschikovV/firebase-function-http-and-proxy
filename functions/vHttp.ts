const axios = require("axios");
const cheerio = require("cheerio");

export class VHttp {

    async fetchData(siteUrl){
        const result = await axios.get(siteUrl);
        return cheerio.load(result.data)
    }

    async fetchText(siteUrl, selector){
        const $ = await this.fetchData(siteUrl);
        return $(selector).text();
    }

    async fetchHtml(siteUrl, selector){
        const $ = await this.fetchData(siteUrl);
        return $(selector).html();
    }
    
}
