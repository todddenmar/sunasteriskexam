import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../redux/slices/currentArticlesSlice";
import PrimaryButton from "./PrimaryButton";

function ArticleCard({ article, readOnly }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentArticles = useSelector((state) => state.currentArticles.value);
  const onDeleteArticle = () => {
    const newArticles = currentArticles.filter(
      (item) => item.id !== article.id
    );
    dispatch(setArticles(newArticles));
  };
  return (
    <div className={`p-5 grid gap-3 bg-gray-800 rounded-lg `}>
      <div
        className={` ${readOnly && "cursor-pointer"}`}
        onClick={() => readOnly && router.push(`/view-article/` + article.id)}
      >
        <h4>{article.title}</h4>
        <p>{article.content}</p>
      </div>

      <div className="grid sm:flex gap-2">
        {!readOnly && (
          <PrimaryButton text={"Delete"} onClick={onDeleteArticle} />
        )}
        <PrimaryButton
          text={"Edit"}
          onClick={() => router.push(`/edit-article/` + article.id)}
        />
      </div>
    </div>
  );
}

export default ArticleCard;
