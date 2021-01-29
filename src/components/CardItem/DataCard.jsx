import React, { useState, useEffect } from "react";
import axios from "axios";

function DataCard() {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function getData() {
      // const result = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
      setData(result.data);
    }
    getData();
  }, []);
  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
export default DataCard;
