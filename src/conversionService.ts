interface URL {
  url: string;
}

export default class ConversionService {
  async create(data: Pick<URL, "url">) {
    function generateEmbed(url: string) {
      if (url.includes("youtube" || "youtu.be")) {
        const regExp =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[7].length == 11
          ? `https://www.youtube.com/embed/${match[7]}`
          : "invalid url";
      }
      else if (url.includes("vimeo")) {
        const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
        const match = url.match(regExp);
        return match && match[1].length == 9
          ? `https://player.vimeo.com/video/${match[1]}`
          : "invalid url";
      }
      else return 'invalid url'
    }

    return generateEmbed(data.url);
  }
}
