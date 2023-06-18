import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoChevronForward } from 'react-icons/io5';
import './app.css';

export default function News() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://lgbtq-world-news-live.p.rapidapi.com/news';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '636bebde4cmshb02bb5e308f7de8p1c57a7jsna0416ad50c9c',
          'X-RapidAPI-Host': 'lgbtq-world-news-live.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='news'>
      <div className="Header">
        <Link to="/locator">
          <div className="backarrow">
            <IoIosArrowBack/>
          </div>
        </Link>
        <p>🏳️‍🌈 News</p>
        <Link to="/resources">
          <div className="forwardarrow">
            <IoChevronForward/>
          </div>
        </Link>
      </div>
      <div className='newsBody'>
        {loading ? (
          // Render the loading animation with waving flag
          <div className="loading-animation">
            <div className="flag"></div>
            <p>Loading...</p>
          </div>
        ) : (
          // Render the fetched data
          data.slice(0, 10).map((item) => (
            <div className="newsBodyCard" key={item.title}>
              <h2>{item.title}</h2>
              <div className='newsBodyCardBottom'>
                <p>{item.source}</p>
                <a href={item.url} target="_blank">Read More...</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
