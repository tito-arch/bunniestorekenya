import parser from "fast-xml-parser";

export default function getBlogs() {
  return fetch("https://www.bunnieabc.com/index.xml")
    .then((res) => res.text())
    .then((data) => {
      const jsonObj = parser.parse(data);
      return jsonObj.rss.channel.item;
    })
    .catch((error) => console.error("Error fetching XML:", error));
}
// console.log(data);
