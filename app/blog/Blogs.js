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
    <section className="bg-gray-100">
      <div className="m-3 ">
        <h3 className="text-center">Tech Articles</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {currentPosts.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col bg-white p-2  gap-2 rounded`}
            >
              {/* Date, Title, Image/Decorated Text Preview */}
              <div className="flex flex-col md:flex-col-reverse sm:flex-col-reverse">
                <div>
                  <p className="text-gray-500">{item.pubDate}</p>
                  <a href={item.link} target="_blank">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  </a>
                </div>
                <div
                  className="flex-shrink-0 rounded-md w-32 h-32 md:w-48 md:h-auto bg-gray-300"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {generateRandomText(item.preview)}
                </div>
              </div>

              <div className="flex flex-col ">
                <p className="text-gray-600 ">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 mr-2 disabled:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastPost >= items.length}
            className="bg-blue-500 text-white px-4 py-2 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyArticles;
