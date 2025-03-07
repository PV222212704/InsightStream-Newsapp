import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const GeneralContext = React.createContext();

const GeneralContextProvider = ({ children }) => {
  const [topNews, setTopNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);

  useEffect(() => {
    fetchTopNews();
    fetchBusinessNews();
    fetchPoliticsNews();
    fetchTechnologyNews();
    fetchGoogleNews();
  }, []);

  const fetchTopNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=popular&apiKey=37306aca596542f0a8402978de3d4224");
      setTopNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBusinessNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=business&apiKey=37306aca596542f0a8402978de3d4224");
      setBusinessNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPoliticsNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=37306aca596542f0a8402978de3d4224");
      setPoliticsNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTechnologyNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=37306aca596542f0a8402978de3d4224");
      setTechnologyNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGoogleNews = async () => {
    const options = {
      method: 'GET',
      url: 'https://google-news-api1.p.rapidapi.com/search',
      headers: {
        'x-rapidapi-key': '31bd38c353msh1177b36ace9f984p175ca2jsn23d9bfe106e6',
        'x-rapidapi-host': 'google-news-api1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // You can modify this to update state if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GeneralContext.Provider value={{ topNews, businessNews, technologyNews, politicsNews }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
