import React, { useState,useEffect } from 'react'
import axios from "axios";

function Test(){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      const getArticles = async () => {
        setLoading(true);
        setError(false);
        try {
          const resp = await axios("https://jsonplaceholder.typicode.com/posts");
          setArticles(resp.data);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      };
      getArticles();
    }, []);
    return (
      <>
        {error ? (
          <p>Error, something went wrong...</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          articles.map(article => (
            <div key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))
        )}
      </>
    );
  };
  export default Test;
