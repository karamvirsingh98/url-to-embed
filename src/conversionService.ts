interface URL {
  url: string;
}

/* 
Create the service for converting regular video urls to embeddable urls, 
which only accepts POST requests. Since results don't need to be stored, 
no database adapters or operations are added. 
*/

export default class ConversionService {
  async create(data: Pick<URL, "url">) {
    function generateEmbed(url: string) {
      
      //for youtube urls
      if (url.includes("youtube" || "youtu.be")) {
        const regExp =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[7].length === 11
          ? `https://www.youtube.com/embed/${match[7]}`
          : "invalid url";
      }

      //for vimeo urls
      else if (url.includes("vimeo")) {
        const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
        const match = url.match(regExp);
        return match && match[1].length >= 7
          ? `https://player.vimeo.com/video/${match[1]}`
          : "invalid url";
      }

      //for any other url
      else return 'invalid url'
    }
      //response from api endopint, as either the sucesfully converted url, or 'invalid url'. 
    return generateEmbed(data.url);
  }
}