import { useLoaderData, useParams } from "react-router";
import NewsCard from "../component/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();

  const categoryId = Number(id);

  const categoryNews =
    categoryId === 0
      ? newsData
      : categoryId === 1
      ? newsData.filter(
          (news) => news.others?.is_today_pick
        )
      : newsData.filter(
          (news) => news.category_id === categoryId
        );

  return (
    <section>
      

      <div className="space-y-6">
        {categoryNews.length > 0 ? (
          categoryNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
            />
          ))
        ) : (
          <div className="py-10 text-center text-gray-500">
            No news found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryNews;