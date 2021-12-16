import React, { useState, useEffect } from "react";
import axios from "axios";

function DataCard() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/api').then(res => res.json()).then(data => {
  //     console.log(data);
  //     setData(data);
  //   });
  // }, []);
  useEffect(() => {
    // async function getData() {
    //   //因為url被註解所以會出錯
    //   const result = await axios.get('http://127.0.0.1:5000/api');
    //   setData(result.data);
    // }
    // getData();
  }, []);
  return (
    <ul>
        <li style={{listStyle:'none'}}key={data?.name}>
          <p>{Object.keys(data)[0]}:{data?.name}</p>
        </li>
    </ul>
  );
}
export default DataCard;
