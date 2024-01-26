"use server";
import { JSDOM } from "jsdom";
import xml2js from "xml2js";

const parseHtml = (html) => {
  const { document } = new JSDOM(html).window;

  const title = document.querySelector("title").textContent;
  const link = document
    .querySelector('link[rel="canonical"]')
    .getAttribute("href");
  const image = document
    .querySelector('meta[property="og:image"]')
    .getAttribute("content");
  const author = document
    .querySelector('meta[name="author"]')
    .getAttribute("content");
  const description = document
    .querySelector('meta[name="description"]')
    .getAttribute("content");
  const datePublished = document
    .querySelector('meta[property="article:published_time"]')
    .getAttribute("content");

  return {
    title,
    link,
    image,
    author,
    description,
    datePublished,
  };
};

const MyArticlesData = async () => {
  try {
    // Fetch XML data
    const res = await fetch("https://www.bunnieabc.com/index.xml");
    const xmlText = await res.text();

    const parser = new xml2js.Parser();
    const parsedResult = await new Promise((resolve, reject) => {
      parser.parseString(xmlText, (err, result) => {
        if (err) {
          reject(err); // Handle parsing error
        } else {
          resolve(result);
        }
      });
    });

    // Extract links from parsed XML data
    const links = parsedResult.rss.channel[0].item.map(({ link }) => link);

    // Choose a sample link (in this case, the first link)
    const sampleLink = links[0];

    // Fetch more data from the sample link
    const sampleLinkResponse = await fetch(sampleLink);
    const sampleLinkHtml = await sampleLinkResponse.text();

    // Log or process the additional data as needed
    const additionalData = parseHtml(sampleLinkHtml);
    console.log("Additional data from the sample link:", additionalData);

    // Construct the unordered list
    const unorderedList = `<ul>${links
      .map((link) => `<li><a href="${link}">${link}</a></li>`)
      .join("")}</ul>`;

    console.log(unorderedList); // Log the unordered list
    return links;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    return "<p>Error fetching articles. Please try again later.</p>";
  }
};

export default MyArticlesData;
