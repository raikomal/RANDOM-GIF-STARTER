import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    try {
      const url = tag
        ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

      const { data } = await axios.get(url);
      setGif(data.data.images.downsized_large.url);
    } catch (error) {
      console.error("Error fetching gif:", error);
    } finally {
      setLoading(false);
    }
  }

  // fetch first gif on mount
  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, loading, fetchData };
}
