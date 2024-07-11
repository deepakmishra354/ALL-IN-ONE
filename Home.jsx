import React, { useState, useEffect } from 'react';
import './HomePage.css';
const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const url = "https://newsapi.org/v2/everything?q=";

function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("India");

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
  }

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };

  return (
    <div>
 
      <SearchBar handleSearch={handleSearch} />
      <div className="cards-container  flex">
        {articles.map((article, index) => (
          article.urlToImage && <NewsCard key={index} article={article} />
        ))}
      </div> 
    </div>
  );
}

function SearchBar({ handleSearch }) {
  return (
    <div className="search-bar flex">
      {/* <input 
        id="search-text" 
        type="text" 
        className="news-input" 
        placeholder="e.g. Science"
        onKeyPress={handleSearch}
      /> */}
    </div>
  );
}

function NewsCard({ article }) {
  const { urlToImage, title, description, source, publishedAt, url } = article;
  const date = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="card" onClick={() => window.open(url, "_blank")}>
      <div className="card-header">
        <img src={urlToImage} alt="news" id="news-img" />
      </div>
      <div className="card-content">
        <h3 id="news-title">{title}</h3>
        <h6 className="news-source" id="news-source">{`${source.name} · ${date}`}</h6>
        <p className="news-desc" id="news-desc">{description}</p>
      </div>
    </div>
  );
}

export default Home;
