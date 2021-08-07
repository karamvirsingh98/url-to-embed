# url-to-embed
A super simple api for converting regular video urls into embeddable urls. 

## How to use
You can visit the website [https://url-to-embed.herokuapp.com](https://url-to-embed.herokuapp.com) and follow the instrucitons to convert a youtube or vimeo
link into an embeddable link, or you can send a POST request to https://url-to-embed.herokuapp.com/convert with the response body formatted as 
{ "url" : "your-video-url"}. The api will return your embeddable url as a string. 
