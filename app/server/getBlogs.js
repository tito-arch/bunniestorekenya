"use server";
import { JSDOM } from "jsdom";
import xml2js from "xml2js";

const parseHtml = (html) => {
  const { document } = new JSDOM(html).window;

  const titleElement = document.querySelector("title");
  const linkElement = document.querySelector('link[rel="canonical"]');
  const imageElement = document.querySelector('meta[property="og:image"]');
  const authorElement = document.querySelector('meta[name="author"]');
  const descriptionElement = document.querySelector('meta[name="description"]');
  const datePublishedElement = document.querySelector(
    'meta[property="article:published_time"]'
  );

  const title = titleElement ? titleElement.textContent : null;
  const link = linkElement ? linkElement.getAttribute("href") : null;
  const image = imageElement ? imageElement.getAttribute("content") : null;
  const author = authorElement ? authorElement.getAttribute("content") : null;
  const description = descriptionElement
    ? descriptionElement.getAttribute("content")
    : null;
  const datePublished = datePublishedElement
    ? datePublishedElement.getAttribute("content")
    : null;

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

    // Fetch and extract additional data for each link
    const additionalDataList = await Promise.all(
      links.map(async (link) => {
        const response = await fetch(link);
        const html = await response.text();
        const articleData = parseHtml(html);

        // Check if the article contains useful information
        if (
          articleData.title &&
          articleData.author &&
          articleData.description &&
          articleData.datePublished
        ) {
          return articleData;
        } else {
          // Return null for articles without useful information
          return null;
        }
      })
    );

    // Filter out articles with null values
    const filteredDataList = additionalDataList.filter(
      (article) => article !== null
    );

    // Log or process the filtered data as needed
    console.log("Filtered data for all links:", filteredDataList);

    // Return the filteredDataList instead of links
    return filteredDataList;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    return "<p>Error fetching articles. Please try again later.</p>";
  }
};

export default MyArticlesData;
