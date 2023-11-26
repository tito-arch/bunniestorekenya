"use client";

import React, { useState, useEffect } from "react";
import he from "he";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateRandomText = (text) => {
  return text.split("").map((letter, index) => (
    <span key={index} style={{ color: getRandomColor() }}>
      {letter}{" "}
    </span>
  ));
};

const MyArticles = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://www.bunnieabc.com/index.xml");
        const xmlText = await res.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const itemNodes = xmlDoc.querySelectorAll("item");

        const items = Array.from(itemNodes).map((itemNode) => {
          const title = he.decode(itemNode.querySelector("title").textContent);
          const preview = title
            .split(" ")
            .slice(0, 3)
            .map((word) => word.charAt(0))
            .join("");

          return {
            title,
            link: itemNode.querySelector("link").textContent,
            pubDate: itemNode.querySelector("pubDate").textContent,
            description: he.decode(
              itemNode.querySelector("description").textContent
            ),
            preview,
          };
        });

        setItems(items);
      } catch (error) {
        setError(true);
        console.error("Error fetching or parsing XML data:", error);
      }
    }

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (error) {
    return (
      <section>
        <div>
          <h3>Latest Articles</h3>
          <ul>
            <p>Failed to fetch data, please try again later.</p>
          </ul>
          <a
            href={"https://bunnieabc.com/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Visit Bunnie ABC
          </a>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <h3>Tech Articles</h3>
        <ul className="flex flex-col gap-2">
          {currentPosts.map((item, index) => (
            <div key={index} className="flex border-black">
              <div
                className="flex w-[200px]"
                style={{ backgroundColor: getRandomColor(), padding: "20px" }}
              >
                {generateRandomText(item.preview)}
              </div>
              <div className="flex flex-col">
                <a href={item.link} target={"_blank"}>
                  <h3>{item.title}</h3>
                </a>
                <p>{item.description}</p>
                <p>{item.pubDate}</p>
              </div>
            </div>
          ))}
        </ul>
        <div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastPost >= items.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyArticles;
