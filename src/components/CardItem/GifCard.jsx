import React from "react";
import { getGif } from "../../../apitest/api";
import { useQuery } from "react-query";
export default function GifCard() {
  const { data, status, error } = useQuery("gif", getGif);
  return (
    <div>
      {status === "success" && (
        <img
          style={{ width: "80vw", minHeight: "80vh" }}
          src={`/static/gif/${data.gifs[0].filename}`}
        ></img>
      )}
    </div>
  );
}
