import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";
import NewsCard from "../component/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(data);
      return;
    }
      else if (id == "1") {
        const filteredNews = data.filter(
          (news) => (news.others.is_today_pick) == true
        );
        
        setCategoryNews(filteredNews);
        
    
    }
    else{
      const filteredNews = data.filter(
      (news) => (news.category_id) == id
    );

    console.log(filteredNews);
    setCategoryNews(filteredNews);
    }
    
  }, [data, id]);

  return <div> <h1 className="text-3xl font-bold mb-5">Category News: {categoryNews.length}</h1 >

  <div className="grid grid-cols-1 gap-5">
    {
      categoryNews.map((news) => <NewsCard key={news.id} news={news} />)
    }

  </div>
  </div>;
  
};

export default CategoryNews;