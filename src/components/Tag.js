import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5">
      <h1 className="mt-[15px] text-2xl font-bold underline uppercase">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gif" />}

      <input
        className="w-10/12 text-lg py-5 rounded-lg mb-[3px] text-center"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-9/12 bg-yellow-500 text-lg py-5 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
