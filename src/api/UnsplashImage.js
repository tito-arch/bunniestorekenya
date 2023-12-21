"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const UnsplashImage = ({ query }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?query=${query}&client_id=9izMXJ7H6APv0XAeKHnJQ9KVlmh7ErCQXPSnS9aomRk`
        );
        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [query]);

  return (
    <Image
      src={imageUrl}
      alt={`Random ${query} pattern`}
      width={1080}
      height={720}
    />
  );
};

export default UnsplashImage;
