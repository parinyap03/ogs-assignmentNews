import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { data_new } from "@data/data_new";
import { useNavigate, useParams } from "react-router-dom";

type NewsArticle = {
  id: number;
  headline: string;
  content: string;
  date: string;
  time: string;
  category: string;
  publisher: string;
};

type NewsCategory = {
  id: number;
  name: string;
  news_type: NewsArticle[];
};

type NewsData = {
  title: string;
  sub_title: string;
  type_new: NewsCategory[];
};
const AllNew: React.FC = () => {
  const { id } = useParams();
  const [sortedNews, setSortedNews] = useState<NewsData[]>([]);
  const navigator = useNavigate();
  useEffect(() => {
    const sortedData = data_new.map((category: NewsData) => ({
      ...category,
      type_new: category.type_new.map((type) => ({
        ...type,
        news_type: type.news_type.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
      })),
    }));
    setSortedNews(sortedData);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {sortedNews.map((news, index) => (
          <div id="content" key={index} className="ml-14 text-left">
            {news.type_new
              .filter((type) => id === undefined || type.id === parseInt(id))
              .map((type) => (
                <div className="text-sm text-left " key={type.id}>
                  <h5 className="font-semibold text-xl text-center">
                    {type.name}
                  </h5>
                  {type.news_type.map((article) => (
                    <div
                      onClick={() =>
                        navigator(
                          `/detailnew/${type.id}/${article.id}?viewer=bam`
                        )
                      }
                      id="box"
                      key={article.id}
                      className="text-left"
                    >
                      <p className="text-left text-neutral-500">
                        {article.date}
                      </p>
                      <h6 className="font-semibold text-left">
                        {article.headline}
                      </h6>
                      <p className="text-left">{article.content}</p>
                      <p className="text-left text-neutral-500">
                        ประเภทข่าว : {type.name}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default AllNew;
