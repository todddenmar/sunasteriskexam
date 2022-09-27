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

function EditArticlePage() {
  const pageTitle = "Edit Article Page";
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const articleID = router?.query.articleID;
  const currentArticles = useSelector((state) => state.currentArticles.value);
  const currentArticle = currentArticles.find(
    (article) => article.id === articleID
  );
  const [title, setTitle] = useState(currentArticle?.title);
  const [content, setContent] = useState(currentArticle?.content);
  const onUpdateArticle = () => {
    if (title === "") {
      return;
    }
    if (content === "") {
      return;
    }
    setIsLoading(true);
    const newData = {
      id: articleID,
      title: title.trim(),
      content: content.trim(),
    };
    const newArticles = currentArticles.map((item) =>
      item.id === articleID ? newData : item
    );
    dispatch(setArticles(newArticles));
    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(timeout);
    }, 1000);
  };
  return (
    <div>
      <Header title={pageTitle} />
      <body className="bg-gray-900 ">
        <Container>
          <div className="flex items-center gap-5">
            <IconButton
              Icon={<ArrowUturnLeftIcon className="h-5 w-5" />}
              onClick={() => router.push("/create-article")}
            />
            <SectionTitle text={pageTitle} />
          </div>
          <div className="mt-5">
            <InputGroup
              label={"Title"}
              placeholder={"Add Title Here"}
              value={title}
              onChange={(val) => setTitle(val)}
            />
            <TextAreaGroup
              label={"Content"}
              placeholder="Your content here."
              value={content}
              onChange={(val) => setContent(val)}
            />
            <div className="flex justify-end">
              <PrimaryButton
                text={"Update"}
                onClick={onUpdateArticle}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Container>
        <Footer />
      </body>
    </div>
  );
}

export default EditArticlePage;
