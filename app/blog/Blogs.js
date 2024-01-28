"use client";

import { useState, useEffect } from "react";
import MyArticlesData from "../server/getBlogs";
import { IoMdCalendar } from "react-icons/io";
import Image from "next/image";
import LoadingGif from "../../public/assets/BunnieLoading.gif";

function Blogs() {
  const [articlesData, setArticlesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch article data from the server
        const data = await MyArticlesData();

        // Update state with the fetched data
        setArticlesData(data);
        console.log(articlesData);

        // Set loading to false
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        // Handle the error as needed
        setLoading(false);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  // Logic for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articlesData.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format date string
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Truncate text for uniformity
  function truncateText(text, max_length = 120) {
    // Truncates text to a given length with ellipses
    if (text.length <= max_length) {
      return text;
    }
    return text.substring(0, max_length - 3) + "...";
  }

  return (
    <div className="md:ml-8 my-3">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="rounded-full overflow-hidden">
              <Image className="w-22 h-22" src={LoadingGif} alt="Loading GIF" />
            </div>
            <h1 className="text-2xl font-semibold mt-4">Hmmm! </h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:m-0 ">
            {currentPosts.map((article, index) => (
              <div
                key={index}
                className="bg-white max-w-sm rounded-lg shadow-md overflow-hidden "
              >
                <Image
                  src={article.image}
                  alt={article.title || "No Title"}
                  className="w-full"
                  width={300}
                  height={300}
                />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <p className="text-gray-800 font-semibold">
                        {article.author || "Unknown"}
                      </p>
                      <IoMdCalendar className="ml-2 text-gray-400" />
                      <p className="text-gray-400 ml-1">
                        {formatDate(article.datePublished)}
                      </p>
                    </div>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xl font-bold hover:underline"
                  >
                    {truncateText(article.title || "No Title", 120)}
                  </a>
                  <p className="text-gray-700">
                    Description:{" "}
                    {truncateText(
                      article.description || "No description available.",
                      120
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {/* Pagination */}
            <nav>
              <ul className="pagination flex gap-2">
                {[
                  ...Array(
                    Math.ceil(articlesData.length / postsPerPage)
                  ).keys(),
                ].map((number) => (
                  <li key={number} className="page-item">
                    <a
                      onClick={() => paginate(number + 1)}
                      href="#"
                      className={`page-link ${
                        currentPage === number + 1 ? "active" : ""
                      }`}
                    >
                      {number + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
