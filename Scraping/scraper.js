const cheerio = require('cheerio');
const request = require('request');

console.log("Up")
request("http://books.toscrape.com/", (err, res, html) => {
  if (!err && res.statusCode === 200) {
    //   console.log(html);

    const $ = cheerio.load(html);
    const heading = $(".page-header");
    console.log(heading.text());
  } else {
    console.log(err);
  }
});