import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    image_url,
    total_view,
    rating,
    author,
    others,
  } = news;

  return (
    <article className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold">
              {author.name}
            </h4>

            <p className="text-sm text-gray-500">
              {format(
                new Date(author.published_date),
                "MMMM d, yyyy"
              )}
            </p>
          </div>
        </div>

        {others?.is_trending && (
          <span className="badge badge-secondary">
            Trending
          </span>
        )}
      </div>

      {/* Image */}
      <figure>
        <img
          src={image_url}
          alt={title}
          className="w-full h-[250px] object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-xl leading-snug">
          {title}
        </h2>

        <p className="text-gray-600">
          {details.slice(0, 180)}...
        </p>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />

            <span className="font-medium">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2">
            <FaEye />

            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;