import React from "react";
import Navbar from "../components/Navbar";
import { useParams, useSearchParams } from "react-router-dom";
import { data_new } from "@data/data_new";

const DetailNew: React.FC = () => {
  const { id, newId } = useParams();
  const [searchParams] = useSearchParams();
  let newsArticle = data_new[0].type_new
    .filter((type) => type.id === parseInt(id as string))[0]
    .news_type.filter((article) => article.id === parseInt(newId as string))[0];
  // console.log(newsArticle);
  return (
    <>
      <Navbar />
      <p className="text-md text-end mr-14 ">ผู้เข้าชม: {searchParams.get("viewer")} </p>
      <h1 style={{textAlign:"center"}} className="text-2xl font-bold">รายละเอียด{newsArticle.headline}</h1>
      <div id="detail">
        <p className="text-md text-left">รหัสข่าว: {newsArticle.id}</p>
        <p className="text-md text-left">วันที่ลงข่าว: {newsArticle.date}</p>
        <p className="text-md text-left">เวลาที่ลงข่าว: {newsArticle.time}</p>
        <p className="text-md text-left">หัวข้อข่าว: {newsArticle.headline}</p>
        <p className="text-md text-left">เนื้อหาข่าว: {newsArticle.content}</p>
        <h3 className="text-md text-left">
          ประเภทข่าว: {newsArticle.category}
        </h3>
        <h2 className="text-md text-left">
          สำนักข่าว: {newsArticle.publisher}
        </h2>
      </div>
      <></>
    </>
  );
};

export default DetailNew;
