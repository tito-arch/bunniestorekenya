"use client";

import React, { useState, useEffect } from "react";
import he from "he";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const dynamicClass = "bg-f7f7f7";

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
  const [isClicked, setIsClicked] = useState(false);

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

  const getDateString = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options); // Adjust locale as needed
  };

  const getTimeString = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12; // Handle midnight and noon as 12

    return `${formattedHours}:${minutes} ${isPM ? "PM" : "AM"}`;
  };

  if (error) {
    return (
      <section>
        <div className="flex flex-col justify-center items-center">
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
    <section
      className={`min-h-screen flex flex-col justify-between xl:m-7 ${dynamicClass}`}
    >
      <div className="m-3 flex-1">
        <div className="flex flex-col my-3 ">
          <h1 className="text-2xl font-bold">BunnieAbC Newsroom</h1>
        </div>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:mx-9"
          itemType="https://schema.org/Article"
        >
          {currentPosts.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col p-2 relative border border-slate-800 gap-2 rounded min-h-[23em] max-h-auto ${
                isClicked ? "animate-border" : ""
              }`}
              onClick={() => setIsClicked(!isClicked)}
            >
              {" "}
              {/* Date, Title, Image/Decorated Text Preview */}
              <div className="flex flex-col m-2 md:flex-col-reverse sm:flex-col-reverse border border-solid border-gray-500 p-4 rounded">
                <div className="my-7">
                  <h2 className="text-xl font-semibold leading-loose mt-4 uppercase text-center">
                    -- {generateRandomText(item.preview)} --
                  </h2>
                </div>
              </div>
              <div className="flex gap-1">
                <IoMdCalendar size={25} />
                <p className="text-gray-500">
                  {getDateString(item.pubDate)} {getTimeString(item.pubDate)}
                </p>
              </div>
              <a href={item.link} target="_blank">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              </a>
              <div className="flex flex-col mt-auto ">
                <p className="text-gray-600">
                  {item.description.substring(0, 120)}...
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-2 my-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="flex items-center justify-center rounded-full p-4 bg-gradient-to-l from-blue-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 active:scale-90 transition-transform duration-300"
            disabled={currentPage === 1}
          >
            <IoIosArrowBack size={25} />
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastPost >= items.length}
            className="flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 active:scale-90 transition-transform duration-300"
          >
            <IoIosArrowForward size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyArticles;
