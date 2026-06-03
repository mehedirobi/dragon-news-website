import React, { useEffect } from "react";
import { useParams, useLoaderData } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (!Array.isArray(data)) return;

    const filteredNews = data.filter(
      (news) => String(news.Category_id) === String(id)
    );

    console.log(filteredNews);
  }, [data, id]);

  return <div>Category News: {id}</div>;
};

export default CategoryNews;