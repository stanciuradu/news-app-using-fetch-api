import React from "react";
import NewsItem from "../../components/NewsItem";

function NewsListLast(props) {
  const { news } = props;
  return (
    <div>
      {news
        .filter((news, index) => index > 9 && index < 15)
        .map((news, index) => {
          return (
            <NewsItem title={news.title} details={news.details} key={index} />
          );
        })}
    </div>
  );
}

export default NewsListLast;
