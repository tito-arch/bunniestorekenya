"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { parse } from "fast-xml-parser";

function Blogs() {
  const [xmlData, setXmlData] = useState([]);

  useEffect(() => {
    axios
      .get("https:bunnieabc.com/index.xml")
      .then((response) => {
        const xmlText = response.data;
        console.log("Raw XML Data:", xmlText); // Log the raw XML data

        const jsonData = parse(xmlText, {
          ignoreAttributes: false,
          attributeNamePrefix: "_",
        });

        // Check if the XML structure matches your expectations
        const items = jsonData.rss?.channel?.item;

        if (Array.isArray(items)) {
          setXmlData(items);
        } else if (items) {
          // If there's only one item, wrap it in an array
          setXmlData([items]);
        } else {
          console.error("No 'item' elements found in XML data.");
        }
      })
      .catch((error) => {
        console.error("Error fetching or parsing XML data:", error);
      });
  }, []);
  console.log(xmlData);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {xmlData.map((post, index) => (
          <li key={index}>
            <a href={post.link._text}>{post.title._text}</a>
            <p>{post.description._text}</p>
            <p>Published on: {post.pubDate._text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
