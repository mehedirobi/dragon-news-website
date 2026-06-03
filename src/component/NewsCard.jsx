import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <img src={news.image_url} alt={news.title} />
        </div>
    );
};

export default NewsCard;