import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setAritcles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    setAritcles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${props.category.replace(/^./, (c) =>
      c.toUpperCase()
    )} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${
      props.pageSize
    }&category=${props.category}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setAritcles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={totalResults !== articles.length}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <h1 className="text-center" style={{ marginTop: "68px" }}>
            NewsMonkey - Top{" "}
            {props.category.replace(/^./, (c) => c.toUpperCase())} Headlines
          </h1>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 55) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230118165803.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={new Date(element.publishedAt).toGMTString()}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  apiKey: "3dea70fec57d4238923a389539a07e60",
  country: "in",
  category: "science",
  pageSize: 6,
};

News.propTypes = {
  apiKey: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
