import React, { useState } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { ArrowUturnLeftIcon, BeakerIcon } from "@heroicons/react/24/solid";
import IconButton from "../../components/IconButton";
import { useRouter } from "next/router";
import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import PrimaryButton from "../../components/PrimaryButton";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewArticle,
  setArticles,
} from "../../redux/slices/currentArticlesSlice";
import ArticleCard from "../../components/ArticleCard";
import Footer from "../../components/Footer";

function ViewArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const articleID = router?.query.articleID;
  const currentArticles = useSelector((state) => state.currentArticles.value);

  const currentArticle = currentArticles.find(
    (article) => article.id === articleID
  );
  const pageTitle = currentArticle?.title;
  const content = currentArticle?.content;
  return (
    <div>
      <Header title={pageTitle} />
      <body className="bg-gray-900 ">
        <Container>
          <div className="flex items-center gap-5">
            <IconButton
              Icon={<ArrowUturnLeftIcon className="h-5 w-5" />}
              onClick={() => router.push("/")}
            />
            <SectionTitle text={pageTitle} />
          </div>
          <div className="mt-5">
            <p>{content}</p>
          </div>
        </Container>
        <Footer />
      </body>
    </div>
  );
}

export default ViewArticlePage;
